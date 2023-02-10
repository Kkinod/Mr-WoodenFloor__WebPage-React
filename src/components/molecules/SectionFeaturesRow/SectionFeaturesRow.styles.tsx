import styled from 'styled-components/macro';
import { ITheme } from 'assets/styles/theme';
import { Card } from 'components/atoms/CardsComponents/Card.styles';
import { ImgCard } from 'components/atoms/CardsComponents/CardImg.styles';

export const Row1of2 = styled.div``;

export const CardWithHover = styled(Card)`
    &:hover ${ImgCard} {
        transform: scale(1.4);
    }

    &:hover ${ImgCard}::before {
        background-color: rgba(${({ theme }: ITheme): string => theme.colors.blackRgb}, 0.2);
    }
`;
