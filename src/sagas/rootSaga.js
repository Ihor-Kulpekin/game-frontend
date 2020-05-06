import {all,takeLatest} from 'redux-saga/effects'

import winnersSaga from '../sagas/winnersSaga'
import gameSettingsSaga from './gameSettingsSaga';
import {ActionTypes} from '../constants/constants';

export default function* rootSaga() {
  yield all([
    takeLatest(ActionTypes.GET_WINNERS,winnersSaga),
    takeLatest(ActionTypes.GET_GAME_SETTINGS,gameSettingsSaga)
  ])
}