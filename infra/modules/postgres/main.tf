resource "aws_db_subnet_group" "database_subnet" {
    name       = "${var.project_name}_database_subnet_${var.environment}"
    subnet_ids = toset(var.vpc_subnet_ids)

    tags = {
        Name        = "${var.project_name}_subnet_group_${var.environment}"
        Environment = var.environment
    }
}

resource "aws_security_group" "database_security_group" {
    name        = "${var.project_name}_database_security_group"
    description = "${var.project_name}_database_security_group"
    vpc_id      = var.vpc_id

    ingress {
        description = "Access from VPN"
        from_port   = 5432
        to_port     = 5432
        protocol    = "tcp"
        cidr_blocks = var.allowable_ips
    }

    tags = {
        Name        = "${var.project_name}_security_group_${var.environment}"
        Environment = var.environment
    }
}

resource "random_string" "db_master_pass" {
    length           = 40
    special          = false
    keepers = {
        pass_version = 1
    }
}

resource "aws_db_instance" "rds" {
    allocated_storage    = var.allocated_storage
    storage_type         = var.storage_type
    engine               = "postgres"
    engine_version       = var.db_version
    instance_class       = var.instance
    identifier           = "${var.rds_identifier}-${var.environment}"
    username             = "postgres"
    password             = random_string.db_master_pass.result
    publicly_accessible  = var.publicly_accessible

    skip_final_snapshot = true

    vpc_security_group_ids  = [aws_security_group.database_security_group.id]
    db_subnet_group_name    = aws_db_subnet_group.database_subnet.name

    auto_minor_version_upgrade  = false
    backup_retention_period     = 30

    tags = {
        Name        = "${var.project_name}_${var.environment}"
        Environment = var.environment
    }
}

// Save password to SSM
resource "aws_ssm_parameter" "db_connection_string" {
    name    = "db_connection_string_${var.environment}_${var.project_name}"
    type    = "String"
    value   = "postgresql://${aws_db_instance.rds.username}:${random_string.db_master_pass.result}@${aws_db_instance.rds.address}:5432/postgres"
}

resource "aws_ssm_parameter" "db_user" {
    name    = "db_user_${var.environment}_${var.project_name}"
    type    = "String"
    value   = aws_db_instance.rds.username
}

resource "aws_ssm_parameter" "db_password" {
    name    = "db_password_${var.environment}_${var.project_name}"
    type    = "String"
    value   = random_string.db_master_pass.result
}

resource "aws_ssm_parameter" "db_hostname" {
    name    = "db_hostname_${var.environment}_${var.project_name}"
    type    = "String"
    value   = aws_db_instance.rds.address
}
