import React from 'react';

import styled from 'styled-components';
import Square from './Square';

const BoardRow = styled.div`
  :after {
    clear: both;
    content: '';
    display: table;
  }
`;

const Board = ({ gameMode }) => {
  return (
    <div>
      {
        Array.from({ length: gameMode !== undefined ? gameMode.field : 4 }, () => <
          BoardRow>
          {
            Array.from({ length: gameMode !== undefined ? gameMode.field : 4 }, () => <Square/>)
          }
        </BoardRow>)
      }
    </div>
  );
};

export default Board;
