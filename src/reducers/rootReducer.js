import {combineReducers} from 'redux';

import winnersReducer from './winnersReducer';
import gameSettingsReducer from './gameSettingsReducer';

export default combineReducers({
  ...winnersReducer,
  ...gameSettingsReducer
})