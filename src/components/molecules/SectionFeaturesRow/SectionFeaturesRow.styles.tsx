import styled from 'styled-components/macro';
import { ITheme } from 'assets/styles/theme';
import { Card } from 'components/atoms/CardsComponents/Card.styles';
import { ImgCard } from 'components/atoms/CardsComponents/CardImg.styles';
import { HeadingTertiary } from 'components/atoms/Headings/Headings.styles';
import { Small } from 'components/atoms/Headings/Small.styles';
import { CardTextWrapper } from 'components/atoms/CardsComponents/CardTextWrapper.styles';

export const CardWithHover = styled(Card)`
    &:hover ${ImgCard} {
        transform: scale(1.4);
    }

    &:hover ${CardTextWrapper}::before {
        background-color: rgba(${({ theme }: ITheme): string => theme.colors.blackRgb}, 0);
    }
`;

export const Title = styled(HeadingTertiary)`
    display: flex;
    flex-direction: column;
    color: ${({ theme }: ITheme): string => theme.colors.white};
    font-size: 3rem;
    cursor: pointer;
`;

export const SmallTitle = styled(Small)`
    text-transform: uppercase;
`;
