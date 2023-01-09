import * as I from 'interface';

const createCoAuthorSchema: I.Schema = {
    type: 'array',
    items: {
        type: 'object',
        properties: {
            id: {
                type: 'string'
            },
            publicationId: {
                type: 'string'
            },
            email: {
                type: 'string'
            },
            code: {
                type: 'string'
            },
            confirmedCoAuthor: {
                type: 'boolean',
            },            
            linkedUser: {
                type: 'string'
            },
            user: {
                type: 'object',
                properties: {
                    firstName: {
                        type: 'string'
                    },
                    lastName: {
                        type: 'string'
                    },
                    orcid: {
                        type: 'string'
                    }
                }
            }
        },
        required: ['id', 'confirmedCoAuthor', 'email'],
        additionalProperties: false
    }
};

export default createCoAuthorSchema;
