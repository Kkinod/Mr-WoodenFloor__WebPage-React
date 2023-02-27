import { Shadow } from 'components/atoms/Shadow/Shadow.styles';
import React from 'react';
import {
    FooterCopyright,
    FooterList,
    FooterListItem,
    FooterListItemLink,
    FooterLogo,
    FooterLogoBox,
    FooterNavigation,
    FooterSection,
} from './Footer.styles';
import logoBronze from 'assets/logo/Logo-bronze/logo_bronze.png';
import { Col1of2, Row } from 'components/atoms/Grid/Grid.styles';
import { labels } from 'views/labels';

const Footer = (): JSX.Element => {
    return (
        <FooterSection>
            <Shadow />
            <FooterLogoBox>
                <FooterLogo src={logoBronze} alt='logo_bronze' />
            </FooterLogoBox>
            <Row>
                <Col1of2>
                    <FooterNavigation>
                        <FooterList>
                            <FooterListItem>
                                <FooterListItemLink href={labels.footer.itemLinkHrefFirst}>{labels.footer.itemLinkTextFirst}</FooterListItemLink>
                            </FooterListItem>
                            <FooterListItem>
                                <FooterListItemLink href={labels.footer.itemLinkHrefSecond}>{labels.footer.itemLinkTextSecond}</FooterListItemLink>
                            </FooterListItem>
                            <FooterListItem>
                                <FooterListItemLink href={labels.footer.itemLinkHrefThird}>{labels.footer.itemLinkTextThird}</FooterListItemLink>
                            </FooterListItem>
                            <FooterListItem>
                                <FooterListItemLink href={labels.footer.itemLinkHrefFourth}>{labels.footer.itemLinkTextFourth}</FooterListItemLink>
                            </FooterListItem>
                        </FooterList>
                    </FooterNavigation>
                </Col1of2>
                <Col1of2>
                <FooterCopyright>
                    {labels.footer.buildBy}<FooterListItemLink href={labels.footer.hrefForLink}>{labels.footer.kkinod}</FooterListItemLink>{labels.footer.copyrightText}
                </FooterCopyright>
                </Col1of2>
            </Row>
        </FooterSection>
    );
};

export default Footer;
