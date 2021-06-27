import React, { useState, useEffect } from 'react';
import List from '../List';
import Card from '../Card';
import New from '../New'

import Api from '../../services/api';
import { Container } from './styles';

const { get, update, remove, add } = Api()

function Board() {
  const [data, setData] = useState([])
  useEffect(() => {

    (async function card() {
      const cards = await get()
      setData(cards)
    })()
  }, []);

  const addNew = lista => async (titulo, conteudo) => {
    const newCard = { lista, titulo, conteudo };

    const save = await add(newCard);
    setData([save, ...data]);
}

  const updateCard = id => async (titulo, conteudo) => {
    const card = data.find(e => e.id === id)
    const newCard = { ...card, titulo, conteudo };

    const save = await update(newCard);
    const reduceCards = data.reduce((res, e) => e.id === save.id ? [...res, save] : [...res, e], [])
    setData(reduceCards);
  }
  const removeCard = id => async () => {
    const card = data.find(e => e.id === id)

    const removeCardId = await remove(id);
    setData(removeCardId);
  }
  const skip = (id, lista) => async () => {
    const card = data.find(e => e.id === id)
    const newCard = { ...card, lista };
    const save = await update(newCard);
    const reduceCards = data.reduce((res, e) => e.id === save.id ? [...res, save] : [...res, e], [])
    setData(reduceCards);
  }

  return(
    <Container>
      <List count={'new'} color="#F00" title={"Novo"}>
        {<New addCard={addNew('ToDo')} />}
      
      </List>
      <List count={data.filter((e) => e.lista === 'ToDo').length} color="#FF0" title={"To Do"}>

        {data
          .filter(list => list.lista ==="ToDo")
          .map(list => 
          <Card 
          key={list.id} 
          title={list.titulo} 
          description={list.conteudo}
          update={updateCard(list.id)}
          remove={removeCard(list.id)}
          next={skip(list.id, 'Doing')} />)}

      </List>
      <List count={data.filter((e) => e.lista === 'Doing').length} color="#00F" title={"Doing"}>

        {data
          .filter(list => list.lista ==="Doing")
          .map(list => 
          <Card 
            key={list.id} 
            title={list.titulo} 
            description={list.conteudo} 
            description={list.conteudo}
            update={updateCard(list.id)}
            remove={removeCard(list.id)}
            next={skip(list.id, 'Done')}
            back={skip(list.id, 'ToDo')}
          />)}

      </List>
      <List count={data.filter((e) => e.lista === 'Done').length} color="#080" title={"Done"}>

        {data
          .filter(list => list.lista ==="Done")
          .map(list => 
          <Card
            key={list.id} 
            title={list.titulo} 
            description={list.conteudo} 
            description={list.conteudo}
            update={updateCard(list.id)}
            remove={removeCard(list.id)}
            back={skip(list.id, 'Doing')}
          />)}

      </List>
    </Container>
  );
}

export default Board;