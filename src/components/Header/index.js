import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import RMDBLogo from '../../images/react-movie-logo.svg';

import { Wrapper, Content, LogoImg } from './Header.styles';

import Navbarmenu from "../Navbarmenu";
import Button from "../Button";

//Context
import { Context } from '../../context';

const Header = () =>
{

    const [user] = useContext(Context);

    return (
        <Wrapper>
            <Content>
                <Link to='/'>
                    <LogoImg src={RMDBLogo} alt='rmdb-logo' />
                </Link>
                {
                    user ? (
                        <Navbarmenu
                            user={user.username} />
                    ) : (
                        <div>
                            <a href="https://www.themoviedb.org/signup?language=bg">
                                <Button text="Sign up"></Button>
                            </a>
                            <Link to='login'>
                                <Button text="Log in"></Button>
                            </Link>
                        </div>
                    )
                }

            </Content>
        </Wrapper>
    );
}

export default Header;