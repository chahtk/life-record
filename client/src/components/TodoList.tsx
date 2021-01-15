import React from 'react';
import styled from 'styled-components';

const TodoListStyle = styled.div`
  flex: 0 0 auto;
  width: 200px;
  height: 95%;
  background-color: gray;
  margin: 10px;
  border-radius: 3px;
`;

function TodoList() {
  return <TodoListStyle />;
}

export default TodoList;
