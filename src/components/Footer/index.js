import React, { useContext } from 'react';

import TMDBLogo from '../../images/tmdb_logo.svg';

import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Footer.styles';

const Footer = () =>
{
    return (
        <Wrapper>
            <Content>
                <TMDBLogoImg src={TMDBLogo} alt='tmdb-logo' />
            </Content>
        </Wrapper>
    );
}

export default Footer;