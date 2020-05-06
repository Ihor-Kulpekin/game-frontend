import React from 'react';
import './App.scss';
import GameField from './components/GameField';
import TableWinners from './components/TableWinners';

const App = () => {
  return (
    <div className="App">
      <GameField/>
      <TableWinners/>
    </div>
  );
};

export default App;
