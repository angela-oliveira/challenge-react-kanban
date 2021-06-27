import React from 'react';

import { Container, HeaderList, Count } from './styles';

function List({color, title, children, count}) {
  const style = {
    borderLeft: `${color} solid 3px`
  }
  return (
    <Container>
      <HeaderList style={style}>
        <h2>{title}</h2>
        {count !=='new' ? <Count><p>{count}</p></Count>: ''}
        
      </HeaderList>
      <ul>
        {children}
      </ul>

    </Container>
  );
}

export default List;