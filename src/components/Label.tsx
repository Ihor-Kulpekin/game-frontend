import React from 'react';

import styled from 'styled-components';

const StyledLabel = styled.label`
  font-size: ${({ name }: LabelProps) => (name === 'Leader Board' ? '32px' : '20px')};
  color: lightslategray;
  font-weight: 500;
`;

const WrapperLabel = styled.div`
  margin-bottom: 30px;
  margin-top: ${({ name }: LabelProps) => (name === 'Leader Board' ? null : '30px')};
  display: flex;
  justify-content: ${({ name }: LabelProps) => (name === 'Leader Board' ? null : 'center')};
`;

interface LabelProps {
  name: string
}

const Label = ({ name }: LabelProps) => {
  return (
    <WrapperLabel name={name}>
      <StyledLabel name={name}>{name}</StyledLabel>
    </WrapperLabel>
  );
};

export default Label;
