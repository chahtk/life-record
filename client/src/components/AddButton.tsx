import React from 'react';
import styled from 'styled-components';

interface StyleProps {
  left?: boolean;
  right?: boolean;
}

interface Props extends StyleProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handler: (e: any) => void;
}

const AddButtonStyle = styled.button<StyleProps>`
  width: 20px;
  height: 20px;
  border-radius: 20px;
  outline: none;
  border: none;
  position: absolute;
  left: ${({ left }) => (left ? 0 : null)};
  right: ${({ right }) => (right ? 0 : null)};
  opacity: 0.5;
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;

function AddButton({ handler, left = false, right = false }: Props) {
  return (
    <AddButtonStyle onClick={handler} right={right}>
      +
    </AddButtonStyle>
  );
}

export default AddButton;
