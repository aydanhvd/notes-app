import React, { useContext, useState } from 'react';
import styled from 'styled-components';

import { NotesContext } from '../context/NotesContext';
import { Modal } from '../commons';
import { EditeForm, EditeArchiveForm } from '../components';

export const SingleNote = ({ history: { push }, match: { params: { id } } }) => {
	const { notes, archive , arcveBtn, editForm} = useContext(NotesContext);
	const note = notes.find((item) => item.id == +id);
	const archivedNote= archive.find((item) => item.id == +id);

	const [ popup, setPopup ] = useState(false);
	const [ edit, setEdit ] = useState(false);
	const [ archiveEdit, setArchiveEdit ] = useState(false);

	const handleModal = () => setPopup((m) => !m);
	const handleEdit = () => setEdit((m) => !m);
	const handleArchiveEdir =()=>setArchiveEdit((m)=>!m);

	const onArchive=()=>{
		arcveBtn(note.id, note);
		push('/archive')
	}
	const onUnArchive=()=>{
		editForm(archivedNote.id, archivedNote);
		push('/')
	}

	return (
		<Container>
			{note && (
				<SingleNoteContainer color={note.color}>
					<NoteContainer>
						<Header>
							<h1>{note.title}</h1>
						</Header>
						<p>{note.text}</p>
					</NoteContainer>
					<ButtonContainer>
						<StyledButton onClick={handleEdit}>Edit</StyledButton>
						<StyledButton onClick={onArchive}>Archive</StyledButton>
						<StyledButton onClick={handleModal}>Delete</StyledButton>
						<StyledButton onClick={() => push('/')}>Close</StyledButton>
					</ButtonContainer>
				</SingleNoteContainer>
			)}
			{archivedNote&&(
				<SingleNoteContainer color={archivedNote.color}>
					<NoteContainer>
						<Header>
							<h1>{archivedNote.title}</h1>
						</Header>
						<p>{archivedNote.text}</p>
					</NoteContainer>
					<ButtonContainer>
						<StyledButton onClick={handleArchiveEdir}>Edit</StyledButton>
						<StyledButton onClick={onUnArchive}>UnArchive</StyledButton>
						<StyledButton onClick={() => push('/archive')}>Close</StyledButton>
					</ButtonContainer>
				</SingleNoteContainer>
			)}
			
			{popup && <Modal push={push} handleModal={handleModal} note={note} />}
			{edit && <EditeForm note={note} color={note.color} />}
			{archiveEdit && <EditeArchiveForm note={archivedNote} color={archivedNote.color} />}
		</Container>
	);
};

const Container = styled.div`
	align-items: center;
	display: flex;
	justify-content: center;
	padding: 40px;
	margin: 0 auto;
	color: #523a28;
	position: relative;
`;
const Header = styled.header`
	/* text-align: center; */
	border-bottom: 1px solid #523a28;
	padding: 10px;
	button {
		position: absolute;
		left: 899px;
		top: 569px;
		width: 91px;
		height: 40px;
		background-color: #eae8dd;
		border: 2px solid transparent;
		align-items: center;
		color: #505459;
		border-radius: 6px;
		font-size: 15px;
		margin-bottom: 10px;
		font-family: 'Dancing Script', cursive;
		box-shadow: 10px 10px 44px -23px rgba(0, 0, 0, 0.53);
		font-size: 22px;
		&:hover {
			color: #f9521e;
			border: 3px solid #f9521e;
		}
	}
	h1 {
		margin: 0 0 20px 0;
	}
`;
const ButtonContainer = styled.div`
	display: flex;
	align-items: center;
	padding-top: 15px;
	justify-content: flex-end;
	border-top: 1px solid  #523a28;
`;
const StyledButton = styled.button`
	display: block;
	width: 100px;
	height: 40px;
	border: 1px solid transparent;
	border-radius: 10px;
	margin: 10px;
	font-size: 20px;
	font-weight: bold;
	background-color: #eae8dd;
	font-family: 'Dancing Script', cursive;
	color: #505459;

	box-shadow: 10px 25px 57px -23px rgba(0, 0, 0, 0.53);
	&:hover {
		color: #f9521e;
		border: 3px solid #f9521e;
	}

`;
const NoteContainer=styled.div`
`

const SingleNoteContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 70%;
	height: 650px;
	padding: 20px;
	border-radius: 10px;
	background-color: ${(p) => p.color};
	box-shadow: 10px 25px 57px -23px rgba(0, 0, 0, 0.53);
	p {
		font-family: 'Dancing Script', cursive;
		font-weight: Medium;
		font-size: 30px;
	}
`;
