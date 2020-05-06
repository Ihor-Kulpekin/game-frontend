import {put, call} from 'redux-saga/effects';

import {getWinners} from '../api/restApi';
import {getWinnersSuccess, getWinnersFailure} from '../actions/actions';

export default function* winnersSaga() {
  try {
    const result = yield call(getWinners);
    put(getWinnersSuccess(result))
  } catch (error) {
    put(getWinnersFailure(error))
  }
}