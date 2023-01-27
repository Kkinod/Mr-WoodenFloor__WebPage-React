import { css, FlattenSimpleInterpolation } from 'styled-components';
import { theme } from './theme';

export const position = {
    centerHorizontalVertical: (): FlattenSimpleInterpolation => css`
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    `,
};

export const responsiveSize = {
    phoneSmall: `(max-width: ${theme.size.phoneSmall})`,
    phone: `(max-width: ${theme.size.phone})`,
    tabPort: `(max-width: ${theme.size.tabPort})`,
    tabLand: `(max-width: ${theme.size.tabLand})`,
    bigDesktop: `(min-width: ${theme.size.bigDesktop})`,
};
