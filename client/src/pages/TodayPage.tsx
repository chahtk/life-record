import React from 'react';
import styled from 'styled-components';
import Board from '@/components/TodoBoard';

const TodayPageStyle = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.color.bg};
  overflow: auto;
  position: relative;
`;

function TodayPage() {
  return (
    <TodayPageStyle>
      <Board />
    </TodayPageStyle>
  );
}

export default TodayPage;
