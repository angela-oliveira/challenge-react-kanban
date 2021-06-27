import React, { useState } from 'react';

import { MdAdd } from 'react-icons/md';
import { Container, DivButton, ErrorMessage } from './styles';

function New({ addCard }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [displayTitle, setDisplayTitle] = useState('none')
  const [displayDescription, setDisplayDescription] = useState('none')

  const submitValue = () => {
    if (!title && !description){

      setDisplayTitle('block')
      setDisplayDescription('block')
    } else if (!title) {
      setDisplayTitle('block')
    } else if (!description){
      setDisplayDescription('block')

    } else {
      addCard(title, description);
      setTitle('')
      setDescription('')
      setDisplayTitle('none')
      setDisplayDescription('none')
    }
}

  return (
    <>
    <Container>
    <header>
      <input value={title} type="text" placeholder="Titulo*" onChange={e => setTitle(e.target.value)} />
    </header>
    <ErrorMessage style={{display: displayTitle}}>Campo não pode ficar vazio</ErrorMessage>

    <div>
      <input value={description} type="text" placeholder="Conteúdo*" onChange={e => setDescription(e.target.value)} />
      <ErrorMessage style={{display: displayDescription}}>Campo não pode ficar vazio</ErrorMessage>
      
    </div>

  </Container>
  <DivButton onClick={submitValue}>
      <MdAdd size={20} color="#a6a6a6" />
  </DivButton>
  </>
  );
}

export default New;