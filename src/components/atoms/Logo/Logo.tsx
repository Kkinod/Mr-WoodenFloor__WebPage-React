import React from 'react'
import { LogoBox, LogoImg } from './Logo.styles'
import LogoWhite from 'assets/img/logo-white.png'

const Logo = ():JSX.Element => {
  return (
    <LogoBox>
        <LogoImg src={LogoWhite}></LogoImg>
    </LogoBox>
  )
}

export default Logo