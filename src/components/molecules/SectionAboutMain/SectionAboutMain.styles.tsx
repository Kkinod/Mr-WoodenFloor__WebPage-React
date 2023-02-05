import styled from 'styled-components/macro';
import { DefaultPhoto } from 'components/atoms/CompositionPhotos/CompositionPhotos.styles';

export const WrapperComposition = styled.div`
    position: relative;

    &:hover ${DefaultPhoto}:not(:hover) {
        transform: scale(0.9);
    }
`;
