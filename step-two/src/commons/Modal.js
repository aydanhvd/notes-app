import React, { useContext } from 'react';
import styled from 'styled-components';

import { NotesContext } from '../context/NotesContext';

export const Modal = ({ push, note, handleModal }) => {
	const { deleteNote } = useContext(NotesContext);
	const deleteSucses = (note) => {
		push('/');
		deleteNote(note);
	};

	return (
		<Container>
			<Window>
				<Header>
					<h2>Are you sure you want to perminantly delete this note ? </h2>
				</Header>
				<BtnContainer>
					<StyledButton onClick={() => deleteSucses(note)}>Yes</StyledButton>
					<StyledButton onClick={handleModal}>No</StyledButton>
				</BtnContainer>
			</Window>
		</Container>
	);
};

const Container = styled.div`
	position: fixed;
	background: rgba(0, 0, 0, .3);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 1000;
	top: 0;
	left: 0%;
	width: 100%;
	height: 100%;
`;
const BtnContainer = styled.div`
	display: flex;
	width: 100%;
	margin-top: 20px;
	justify-content: space-between;
`;
const Header = styled.div`
	border-bottom: 2px solid #eeede7;
	color: #eeede7;
`;
const Window = styled.div`
	background-color: #f46234;
	padding: 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	border-radius: 10px;
	height: 200px;
`;
const StyledButton = styled.button`
	border: 2px solid #eeede7;
	background-color: #eeede7;
	border-radius: 6px;
	width: 47%;
	height: 50px;
`;
