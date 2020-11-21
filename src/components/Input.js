import React from 'react';

import styled from 'styled-components';

const StyledInput = styled.input`
height: 34px;
background-color: rgba(220,220,220,0.3);
border: none;
padding-left: 10px;
outline: none;
`;

const WrapperInput = styled.div`
margin-left: 25px;
`;

const Input = ({ text, handleChangeText }) => {
  return (
    <WrapperInput>
      <StyledInput placeholder="Enter your name" value={text} onChange={handleChangeText}/>
    </WrapperInput>
  );
};

export default Input;