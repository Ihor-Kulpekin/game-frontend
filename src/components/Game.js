import React from 'react';

import styled from 'styled-components';
import Board from './Board';
import { useSelector } from 'react-redux';

const StyledGame = styled.div`
display: flex;
  flex-direction: row;
  justify-content: center;
`;


const Game = () => {
  const { payload } = useSelector((state) => state.gameSettings.gameMode);
  return (
    <StyledGame>
      <Board gameMode={payload}/>
    </StyledGame>
  );
};

export default Game;
