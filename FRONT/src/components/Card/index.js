  import React, { useState } from 'react';
  import ReactTooltip from 'react-tooltip';
  
  import marked from 'marked';
  import DOMPurify from 'dompurify';

  import { 
    MdDelete, 
    MdUndo, 
    MdRedo, 
    MdEdit, 
    MdDone,
    MdClear
   } from 'react-icons/md';
  import { Container, DivButton, ErrorMessage, ContentDescription } from './styles';
  
  
  function Markdown(content) {
    let html = marked(content);
    html = DOMPurify.sanitize(html);
    return <div dangerouslySetInnerHTML={{ __html: html }} />;
  }

  function Card({title, description, update, remove, next, back}) {

    const [editTitle, setEditTitle] = useState(title)
    const [editDescription, setEditDescription] = useState(description)
    const [displayTitle, setDisplayTitle] = useState('none')
    const [displayDescription, setDisplayDescription] = useState('none')


    const [mode, setMode] = useState('view')
    function view(title, description) {
     return (
      <Container>
        <header>
          {title}
          <DivButton>
            <button data-tip data-for='editCard' onClick={() => setMode('edit')}>
              <MdEdit size={20} color="#a6a6a6" />
            </button>
          <ReactTooltip id='editCard' type='info' effect="solid"><span>Editar</span></ReactTooltip>

          </DivButton>
        </header> 
        <ContentDescription>{Markdown(description)}</ContentDescription>
        
        <DivButton>
          { back ? <button data-tip data-for='backCard' onClick={back}>
            <MdUndo size={20} color="#a6a6a6" />
          </button> : <span></span>}
          <ReactTooltip id='backCard' type='info' effect="solid"><span>Retornar este card?</span></ReactTooltip>
          <button data-tip data-for='delete' onClick={remove}>
            <MdDelete size={20} color="#ff5e5e" />
          </button>
          <ReactTooltip id='delete' type='error' effect="solid"><span>Deseja remover este card?</span></ReactTooltip>

          {next ? 
          <button data-tip data-for='nextCard' onClick={next}>
            <MdRedo size={20} color="#a6a6a6" />
          </button> : <span></span>}
          <ReactTooltip id='nextCard' type='info' effect="solid"><span>Avançar este card?</span></ReactTooltip>

        </DivButton>

      </Container>
      )
    }
    function edit(title, description) {
      function cancel() {
        setEditTitle(title)
        setEditDescription(description)
        setMode('view')
      }
      function save() {
        if (!editTitle && !editDescription){

          setDisplayTitle('block')
          setDisplayDescription('block')
        } else if (!editTitle) {
          setDisplayTitle('block')
        } else if (!editDescription){
          setDisplayDescription('block')
    
        } else {
          setDisplayTitle('none')
          setDisplayDescription('none')
          update(editTitle, editDescription)
          setMode('view')
        }
      }
      return(
        <Container>
          <header>
            <input type="text" value={editTitle} onChange={e => setEditTitle(e.target.value)} />
          </header> 
          <ErrorMessage style={{display: displayTitle}}>Campo não pode ficar vazio</ErrorMessage>
          <div>
            <input type="text" value={editDescription} onChange={e => setEditDescription(e.target.value)} />
            <ErrorMessage style={{display: displayDescription}}>Campo não pode ficar vazio</ErrorMessage>

          </div>
          <DivButton>
            <button data-tip data-for='cancelEdit' onClick={cancel}>
              <MdClear size={20} color="#ff5e5e" />
            </button>
            <ReactTooltip id='cancelEdit' type='error' effect="solid"><span>Cancelar</span></ReactTooltip>

            <button data-tip data-for='confirmEdit' onClick={save}>
              <MdDone size={20} color="#080" />
            </button>
            <ReactTooltip id='confirmEdit' type='info' effect="solid"><span>Salvar</span></ReactTooltip>

          </DivButton>
        </Container>
      )
    }
    return (
      <>
        {mode === 'edit' ? edit(title, description) : view(title, description)}
      </>
    );
  }
  
  export default Card;