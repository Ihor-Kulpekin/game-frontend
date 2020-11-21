import React from 'react';
import GameField from './components/GameField';
import TableWinners from './components/TableWinners';

import styled from 'styled-components';
import Label from './components/Label.tsx';
import Game from './components/Game.tsx';

const WrapperApp = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const WrapperBlock = styled.div`
  width: 50%;
  border: 1px solid lightgray;
  height: 1200px;
  padding: 150px;
`;

const App = () => {
  return (
    <WrapperApp>
      <WrapperBlock>
        <GameField />
        <Label name="Message here"/>
        <Game/>
      </WrapperBlock>
      <WrapperBlock>
        <TableWinners />
      </WrapperBlock>
    </WrapperApp>
  );
};

export default App;
