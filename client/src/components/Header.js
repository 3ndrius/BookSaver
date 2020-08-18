import React from 'react'
import styled from 'styled-components';
import { Container } from './Container';
import { Link } from 'react-router-dom';
import { Button } from './Button';

const HeaderContainer = styled.header`
    width:100%;
    height:100px;
    color:white;
    background: ${({theme}) => theme.dark};
    
`;
const NavBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width:100%;
`;
const Nav = styled.ul`
    list-style-type:none;
    display: flex;
    justify-content: center;
    align-items:center;
`;
const Item = styled.li`
    color:white;

    a{ 
        color:${({theme})=>theme.white};
        font-size: 15px;
        text-decoration: none;
        padding: 0 5px;
    }
`;
const Logo = styled.h1`
    font-weight: ${({theme}) => theme.bold };
    font-size: ${({theme}) => theme.l};
`;

export default function Header() {
    return (
        <HeaderContainer>
            <Container>
                <NavBar>
                    <Logo>Book Diary</Logo>
                    <Nav>
                        <Item>
                            <Link to={'/'}>Search</Link>
                        </Item>
                        <Item>
                            <Link to={'/saved'}>Saved</Link>
                        </Item>
                        <Button>Dark mode</Button>
                    </Nav>
                </NavBar>
            </Container>
        </HeaderContainer>
    )
}
