import React from 'react';

import { Label, Checkbox } from './Navigation.styles';

const Navigation = (): JSX.Element => {
    return (
        <>
            <Checkbox type="checkbox" id="navi-toggle"></Checkbox>
            <Label htmlFor="navi-toggle">Navigation</Label>;
        </>
    );
};

export default Navigation;