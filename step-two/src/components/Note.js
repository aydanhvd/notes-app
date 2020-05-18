import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Note = ({ note: { title, text, id, color } }) => {
	return (
		<NoteLink to={`/notes/${id}`}>
		<NoteContainer color={color}>
			<Header>
				<Title>{title}</Title>
				<span></span>
			</Header>
			<Text>{text}</Text>
		</NoteContainer>
		</NoteLink>
	);
};
const NoteLink=styled(Link)`
	text-decoration: none;
`

const NoteContainer = styled.div`
	background-color: ${(p) => p.color};
	padding: 20px;
	max-width: 350px;
	height: 300px;
	border-radius: 6px;
	color: #523a28;
	position: relative;
	box-sizing: border-box;
	transform: rotate(-2deg);
	overflow:hidden;
	text-overflow: ellipsis;
	white-space: initial;
	transition: all 0.2s ease-in;
	box-shadow: 10px 10px 12px -1px rgba(0,0,0,0.25);
	&:hover{
		box-shadow: 10px 10px 12px -1px rgba(249,82,30,1);
	}
`;

const Header = styled.div`
	display: flex;
	justify-content: center;
	border-bottom: 1px solid #523a28;
	padding: 5px;
	span{
		background-color:#F9521E;
		width: 30px;
		height:30px;
		border-radius: 100%;
		position: absolute;
		top: 10px;
		right: 20px;
		
		box-shadow: 2px 10px 24px -10px rgba(0,0,0,0.25);
	}
`;

const Title = styled.div`
	padding: 8px;
	font-size: 25px;
	font-weight: bold;
	margin-bottom: 10px;
`;

const Text = styled.p`
	text-align: center;
	margin-block-start: 0;
	font-size: 24px;
	padding:10px;
	font-family: 'Dancing Script', cursive;
	font-weight: Medium;
`;
