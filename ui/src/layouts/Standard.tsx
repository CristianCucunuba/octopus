import React from 'react';

import * as Components from '@components';

type Props = {
    fixedHeader?: boolean;
    children: React.ReactNode;
};

const Standard: React.FC<Props> = (props): React.ReactElement => (
    <>
        <Components.JumpToContent />
        <Components.SurveyWidget />
        <Components.Header />
        <Components.Banner />
        <main>{props.children}</main>
        <Components.Footer waves={true} />
    </>
);

export default Standard;
