import React, { useEffect, useState } from 'react';

import styled from 'styled-components';
import Select from './Select';
import Input from './Input';
import { useDispatch } from 'react-redux';
import { getGameSettings } from '../actions/actions';
import Button from './Button';

const WrapperGameField = styled.div`
  display: flex;
  justify-content: center;
`;

const GameField = () => {
  const dispatch = useDispatch();
  const [mode, setMode] = useState('normal');
  const [value, setValue] = useState('');

  const fetchMode = () => {
    dispatch(getGameSettings(mode));
  };

  const handleChangeOption = (event: React.FormEvent<HTMLSelectElement>) => {
    const newValue = event.currentTarget.value;
    setMode(newValue);
  };

  const handleChangeText = (event: React.FormEvent<HTMLInputElement>) =>{
    const newValue = event.currentTarget.value;
    setValue(newValue);
  };

  useEffect(fetchMode, [mode]);

  return (
    <WrapperGameField>
      <Select mode={mode} handleChangeOption={handleChangeOption}/>
      <Input text={value} handleChangeText={handleChangeText}/>
      <Button value={value}/>
    </WrapperGameField>
  );
};

export default GameField;
