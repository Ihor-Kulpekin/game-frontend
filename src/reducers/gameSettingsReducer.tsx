import {handleActions} from 'redux-actions'

import {getGameSettings,getGameSettingsSuccess,getGameSettingsFailure} from '../actions/actions'
import { GameSettingsState } from '../types/types';

const initialState : GameSettingsState= {
  error:false,
  gameMode: {
    field: 3,
    delay: 0
  }
};

export default {
  gameSettings:handleActions({
    [getGameSettings.toString()]:(state: GameSettingsState)=>{
      return{
        ...state,
        error: false
      }
    },
    [getGameSettingsSuccess.toString()]:(state: GameSettingsState,payload:any)=>{
      return{
        ...state,
        error: false,
        gameMode: payload
      }
    },
    [getGameSettingsFailure.toString()]:(state)=>{
      return{
        ...state,
        error:true
      }
    }
  },initialState)
}
