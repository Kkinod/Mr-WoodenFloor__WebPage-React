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
    phoneSmall320px: `(max-width: ${theme.size.phoneSmall320px})`,
    phoneSmall: `(max-width: ${theme.size.phoneSmall})`,
    phoneRotated: `(max-width: ${theme.size.tabPort}) and (max-height: ${theme.size.phone})`,
    phone: `(max-width: ${theme.size.phone})`,
    tabPort800: `(max-width: ${theme.size.tabPort800})`,
    tabPort: `(max-width: ${theme.size.tabPort})`,
    tabLand: `(max-width: ${theme.size.tabLand})`,
    bigDesktop: `(min-width: ${theme.size.bigDesktop})`,
};
