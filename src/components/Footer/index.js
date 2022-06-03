import React, { useContext } from 'react';

import TMDBLogo from '../../images/tmdb_logo.svg';

import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Footer.styles';

const Footer = () =>
{
    return (
        <Wrapper>
            <Content>
                <a href="https://github.com/cs-iliev/react-rmdb" target="_blank">https://github.com/cs-iliev/react-rmdb</a>
                <TMDBLogoImg src={TMDBLogo} alt='tmdb-logo' />
            </Content>
        </Wrapper>
    );
}

export default Footer;