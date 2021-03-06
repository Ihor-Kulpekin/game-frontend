import React, { FC } from 'react';

import styled from 'styled-components';

const StyledSelect = styled.select`
 width: 200px;
 background-color: lightgray;
 border-radius: 3px;
 outline: none;
 border: none;
`;

const StyledOption = styled.option`
font-size: 14px;
`

interface SelectProps {
  mode: string,
  handleChangeOption?(event: React.ChangeEvent<HTMLSelectElement>):void
}

const Select : FC<SelectProps> = ({ mode, handleChangeOption }) => {
  return (
    <StyledSelect name="level" id="level" value={mode} onChange={handleChangeOption}>
      <StyledOption value="easy">
        easy
      </StyledOption>
      <option value="normal">
        normal
      </option>
      <option value="hard">
        hard
      </option>
    </StyledSelect>
  );
};

export default Select;
