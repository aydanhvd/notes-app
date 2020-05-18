import React ,{useState, useContext}from 'react'
import styled from 'styled-components';

import {NotesRow} from '../../commons';
import { Note } from '../../components';
import { NotesContext } from '../../context/NotesContext';

export const Pano=()=>{
    const {notes} = useContext(NotesContext);


    return(
        <Container>
            <NotesRow count={3} gutter={30}> 
                {notes.map(note=> <Note key ={Date.now()+note} note={note} />)}
            </NotesRow>
        </Container>
    )
}
const Container = styled.div`
  max-width: 1200px;
  padding: 40px 15px;
  margin: 0 auto;
`;
