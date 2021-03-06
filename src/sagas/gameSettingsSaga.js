import {put, call} from 'redux-saga/effects';

import {getGameSettings as apiGetGameSettings} from '../api/restApi'
import {getGameSettingsSuccess, getGameSettingsFailure} from '../actions/actions'

export default function* gameSettingsSaga({payload}) {
  try {
    const result = yield call(apiGetGameSettings, payload);
    yield put(getGameSettingsSuccess(result))
  } catch (error) {
    yield put(getGameSettingsFailure(error))
  }
}
