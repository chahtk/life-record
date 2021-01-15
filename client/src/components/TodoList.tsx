import React, { useState } from 'react';
import styled from 'styled-components';
import AddButton from '@/components/AddButton';
import AddCard from '@/components/TodoAddCard';
import { ButtonEvent } from '@/interfaces/ButtonEvent';

const TodoListContainer = styled.div`
  flex: 0 0 auto;
  width: 200px;
  height: 95%;
  background-color: gray;
  margin: 10px;
  border-radius: 3px;
  position: relative;
`;

const ListHeader = styled.div`
  color: black;
`;

function TodoList() {
  const [activeAddCard, setActiveAddCard] = useState<boolean>(false);
  const [todoCards, setTodoCards] = useState<string[]>([]);
  const handleAddCardButton = ({ target }: ButtonEvent) => {
    if (target.name === 'addButton') {
      const { value = '' } = target;
      setTodoCards([...todoCards, value]);
    }
    setActiveAddCard(!activeAddCard);
  };

  return (
    <TodoListContainer>
      <ListHeader>
        Add New Card
        <AddButton right handler={handleAddCardButton} />
        {activeAddCard && <AddCard handler={handleAddCardButton} />}
        {todoCards.length !== 0 && todoCards.map((card, index) => <div key={`card${index.toString()}`}>{card}</div>)}
      </ListHeader>
    </TodoListContainer>
  );
}

export default TodoList;
