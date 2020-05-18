import React from 'react';
import styled from 'styled-components';

export const NotesRow=({children, count ,gutter})=>{

    return(
        <Conatiner count={count} gutter={gutter}>
            {[].map.call(children,(item)=>(
                <Column key={Date.now()+item.name}count={count} gutter={gutter}>
                    {item}
                </Column>  
            ))}
        </Conatiner>
    )
}

const Conatiner= styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 -${p => p.gutter}px;
`;

const Column = styled.div`
    width: calc(100% / ${p=>p.count});
    padding: 0 ${p => p.gutter}px ${p => p.gutter*2}px;
`;

