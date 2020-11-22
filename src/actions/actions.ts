
import { ActionTypes } from '../constants/constants';
import { createAction } from 'redux-actions';
import { GameSettingsType } from '../types/types';

export const getWinners = createAction(ActionTypes.GET_WINNERS, (payload:any) => payload);
export const getWinnersSuccess = createAction(ActionTypes.GET_WINNERS_SUCCESS, (payload:any) => payload);
export const getWinnersFailure = createAction(ActionTypes.GET_WINNERS_FAILURE, (payload:any) => payload);

export const getGameSettings = createAction(ActionTypes.GET_GAME_SETTINGS, (payload:string) => payload);
export const getGameSettingsSuccess = createAction(ActionTypes.GET_GAME_SETTINGS_SUCCESS, (payload:GameSettingsType) => payload);
export const getGameSettingsFailure = createAction(ActionTypes.GET_GAME_SETTINGS_FAILURE, (payload:any) => payload);
