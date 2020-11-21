import React from 'react';

import styled from 'styled-components';
import Label from './Label.tsx';
import Item from './Item';

const WrapperTableWinners = styled.div`

`;

const TableWinners = () => {
  return (
    <WrapperTableWinners>
      <Label name="Leader Board"/>
      <Item/>
      <Item/>
      <Item/>
      <Item/>
    </WrapperTableWinners>);
};

export default TableWinners;
