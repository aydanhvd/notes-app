import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FaRegStickyNote } from 'react-icons/fa';

export const Header = () => {
	return (
		<Container>
			<LogoContainer>
				<FaRegStickyNote color='F9521E' />
				<p>Idrix</p>
			</LogoContainer>
			<Nav>
				<StyleNavLink exact to='/'>Pano</StyleNavLink>
				<StyleNavLink to='/archive'>Archive</StyleNavLink>
				<StyleNavLink to='/create'>Create</StyleNavLink>
			</Nav>
		</Container>
	);
};

const Container = styled.header`
    display: flex;
    box-sizing: border-box;
    max-height: 100px;
    margin: 0 auto;
	justify-content: space-between;
	align-items: center;
    background: #868b8e;
    padding: 20px;
    color: white;
    width: 100%;
    border-bottom: 6px solid #D1D0D0;
    box-shadow: 2px 18px 24px -9px rgba(0,0,0,0.28);
`;
const LogoContainer = styled.div`
    display: flex;
    font-size: 48px;
    width: 20%;
	justify-content: center;
	align-items: center;
	color: white;
`;
const Nav = styled.div`
    display: flex;
    width: 30%;
	justify-content: flex-start;
	align-items: center;
	text-decoration: none;
`;
const StyleNavLink=styled(NavLink)`
    margin-left : 10px;
    font-size: 25px;
    color: white;
    text-decoration: none;
    border: 3px solid transparent;
    padding: 10px;
    border-radius:6px;
    transition: all 0.3s ease-out;
    &.active{
        border: 2px solid white;
        box-shadow: 2px 18px 24px -9px rgba(0,0,0,0.28);
    }
`