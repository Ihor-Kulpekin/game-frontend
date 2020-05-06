import {createAction} from 'redux-actions';

import {ActionTypes} from '../constants/constants'

export const getWinners = createAction(ActionTypes.GET_WINNERS,(payload)=>payload);
export const getWinnersSuccess = createAction(ActionTypes.GET_GAME_SUCCESS,(payload)=>payload);
export const getWinnersFailure = createAction(ActionTypes.GET_WINNERS_FAILURE,(payload)=>payload);

export const getGameSettings = createAction(ActionTypes.GET_GAME_SETTINGS,(payload)=>payload);
export const getGameSettingsSuccess = createAction(ActionTypes.GET_GAME_SUCCESS,(payload)=>payload);
export const getGameSettingsFailure = createAction(ActionTypes.GET_GAME_FAILURE,(payload)=>payload);