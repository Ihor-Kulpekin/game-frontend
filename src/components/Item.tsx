import React from 'react';

import styled from 'styled-components';

const WrapperItem = styled.div`
 display: flex;
 justify-content: space-between;
 padding: 5px 20px;
 width: 350px;
 background-color: lightgray;
 margin-bottom: 2px;
`;

const Item = () => {
  return (
    <WrapperItem>
      <p>
        User name
      </p>
      <p>Date</p>
    </WrapperItem>
  );
};

export default Item;
