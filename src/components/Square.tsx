import React from 'react';

import styled from 'styled-components';

const SquareButton = styled.button`
  background: #fff;
  border: 1px solid #999;
  float: left;
  font-size: 24px;
  font-weight: bold;
  line-height: 100px;
  height: 100px;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;
  width: 100px;
`;

const Square = () => {
  return <SquareButton>0</SquareButton>;
};

export default Square;
