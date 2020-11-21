import React from 'react';

import styled from 'styled-components';

const StyledButton = styled.button`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 40px 0 40px;
  border: none;
  color: white;
  background-color: gray;
  border-radius: 5px;
  
  :hover {
   background-color: rgba(128,128,128,0.8);
  }
  
`;

const WrapperButton = styled.div`
  margin-left: 27px;
`;

const Button = ({text='PLAY', value}) => {
  return (
    <WrapperButton>
      <StyledButton disabled={value===''}>{text}</StyledButton>
    </WrapperButton>
  );
};

export default Button;
