import React, { useState } from 'react';
import styled from 'styled-components';
import TodoList from '@/components/TodoList';
import AddButton from '@/components/AddButton';

const BoardStyle = styled.div`
  width: 90%;
  height: 500px;
  background-color: #5b5f5e;
  border-radius: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ListContainer = styled.div`
  display: flex;
  width: 95%;
  height: 90%;
  overflow: scroll;
  margin: 0 auto;
  margin-top: 20px;
  border-radius: 3px;
  background: rgb(228, 226, 226);
`;

function Board() {
  const [todoLists, setTodoLists] = useState<number[]>([]);

  const handleAddButton = () => setTodoLists([...todoLists, 1]);

  return (
    <BoardStyle>
      <AddButton right handler={handleAddButton} />
      <ListContainer>
        {todoLists.length !== 0 && todoLists.map((v, i) => <TodoList key={`list${i.toString()}`} />)}
      </ListContainer>
    </BoardStyle>
  );
}

export default Board;
