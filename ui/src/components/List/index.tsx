import React from 'react';

type Props = {
    ordered: boolean;
    className?: string;
    children: React.ReactElement[] | React.ReactElement;
};

const List: React.FC<Props> = (props): JSX.Element => {
    return props.ordered ? (
        <ol className={props.className ? props.className : ''}>{props.children}</ol>
    ) : (
        <ul className={props.className ? props.className : ''}>{props.children}</ul>
    );
};

export default List;
