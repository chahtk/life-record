import React, { useState } from 'react';
import styled from 'styled-components';
import { ButtonEvent } from '@/interfaces/ButtonEvent';

const AddCardContainer = styled.div`
  background-color: #dba6a6;
`;
const TextArea = styled.textarea``;
const AddButton = styled.button``;
const CancelButton = styled.button``;

interface Props {
  handler: (e: ButtonEvent) => void;
}

function TodoAddCard({ handler }: Props) {
  const [text, setText] = useState<string>('');
  const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value);

  return (
    <AddCardContainer>
      <TextArea onChange={handleText} value={text} />
      <AddButton name="addButton" value={text} onClick={handler}>
        OK
      </AddButton>
      <CancelButton onClick={handler}>Cancel</CancelButton>
    </AddCardContainer>
  );
}

export default TodoAddCard;
