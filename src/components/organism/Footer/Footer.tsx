import { Shadow } from 'components/atoms/Shadow/Shadow.styles'
import React from 'react'
import { FooterLogo, FooterLogoBox, FooterSection } from './Footer.styles'
import logoBronze from 'assets/logo/Logo-bronze/logo_bronze.png'

const Footer = (): JSX.Element => {
  return (
    <FooterSection>
        <Shadow />
        <FooterLogoBox>
            <FooterLogo src={logoBronze} alt=''/>
        </FooterLogoBox>
    </FooterSection>
  )
}

export default Footer