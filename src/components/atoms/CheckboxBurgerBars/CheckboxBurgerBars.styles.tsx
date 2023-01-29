import styled from 'styled-components/macro';
import { NavigationWrapper } from 'components/organism/Navigation/Navigation.styles';
import { NavBgc } from '../NavBackground/NavBackground.styles';

export const Checkbox = styled.input`
    display: none;

    &:checked ~ ${NavBgc} {
        transform: scale(80);
    }

    &:checked ~ ${NavigationWrapper} {
        width: 100%;
        opacity: 1;
    }
`;
