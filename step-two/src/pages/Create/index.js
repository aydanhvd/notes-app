import React,{useContext} from 'react'
import styled from 'styled-components';

import { NotesContext } from '../../context/NotesContext'
import { CreateForm } from '../../components';

export const Create=({history})=>{
    const {addNote}=useContext(NotesContext);
    
    const putNote=(note)=>{
        addNote(note);
        history.push('/');
    }
    return(
        <Container>
            <CreateForm btnText="Create" onSucsess={putNote}/>
        </Container>
    )
};

const Container = styled.div`
  max-width: 1200px;
  padding: 40px 15px;
  margin: 0 auto;
`;