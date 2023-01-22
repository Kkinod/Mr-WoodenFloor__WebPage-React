import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

export const position = {
    centerHorizontalVertical: (): FlattenSimpleInterpolation => css`
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    `,
};

interface IRespondProps {
    breakpoint: 'phone' | 'tab-port' | 'tab-land' | 'big-desktop';
  }
  
  const Respond = styled.div<IRespondProps>`
      ${({ breakpoint }) => {
      if (breakpoint === 'phone') {
        return css`
          @media (max-width: 37.5em) {
            font-size: 50%;
          }
        `;
      } else if (breakpoint === 'tab-port') {
        return css`
          @media (max-width: 56.25em) {
            font-size: 56.25%;
          }
        `;
      } else if (breakpoint === 'tab-land') {
        return css`
          @media (max-width: 75em) {
            font-size: 62.5%;
          }
        `;
      } else if (breakpoint === 'big-desktop') {
        return css`
          @media (min-width: 112.5em) {
            font-size: 75%;
          }
        `;
      }
    }}
  `;