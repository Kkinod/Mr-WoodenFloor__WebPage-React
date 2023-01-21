import { css, FlattenSimpleInterpolation } from 'styled-components';

export const position = {
    centerHorizontalVertical: (): FlattenSimpleInterpolation => css`
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    `,
};
