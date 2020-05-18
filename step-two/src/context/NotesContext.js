import React, { useState, createContext, useEffect } from 'react';

export const NotesContext = createContext();

export const NotesContextProvider = ({ children }) => {
	const [ archive, setArchive ] = useState([]);
	const [ notes, setNotes ] = useState([]);

	const getNotes = async () => {
		const res = await fetch('http://localhost:3000/notes');
		const data = await res.json();
		const isValide = data.filter((note) => note.archive == false);
		console.log(isValide);
		setNotes(isValide);
	};

	const getArchiveNotes = async () => {
		const res = await fetch('http://localhost:3000/notes');
		const data = await res.json();
		const isValide = data.filter((note) => note.archive == true);

		setArchive(isValide);
	};

	useEffect(() => {
		getNotes();
		getArchiveNotes();
	}, []);

	const addNote = async (note) => {
		const res = await fetch('http://localhost:3000/notes', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				...note,
				archive: false
			})
		});
		const data = await res.json();
	};

	const editForm = async (id, note) => {
		const res = await fetch(`http://localhost:3000/notes/${id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				...note,
				archive: false
			})
		});
		const data = await res.json();
	};
	const arcveBtn = async (id, note) => {
		const res = await fetch(`http://localhost:3000/notes/${id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				...note,
				archive: true
			})
		});
		const data = await res.json();
	};

	const deleteNote = async (note) => {
		const res = await fetch(`http://localhost:3000/notes/${note.id}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const data = await res.json();
	};

	return (
		<NotesContext.Provider value={{ notes, archive, addNote, editForm, deleteNote, arcveBtn }}>
			{children}
		</NotesContext.Provider>
	);
};
