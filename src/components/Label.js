import React from 'react';

import styled from 'styled-components';

const StyledLabel = styled.label`
  font-size: ${({ name }) => (name === 'Leader Board' ? '32px' : '20px')};
  color: lightslategray;
  font-weight: 500;
`;

const WrapperLabel = styled.div`
  margin-bottom: 30px;
  margin-top: ${({ name }) => (name === 'Leader Board' ? null : '30px')};
  display: flex;
  justify-content: ${({ name }) => (name === 'Leader Board' ? null : 'center')};
`;

const Label = ({ name }) => {
  return (
    <WrapperLabel name={name}>
      <StyledLabel name={name}>{name}</StyledLabel>
    </WrapperLabel>
  );
};

export default Label;
