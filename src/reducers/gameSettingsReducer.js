import {handleActions} from 'redux-actions'

import {getGameSettings,getGameSettingsSuccess,getGameSettingsFailure} from '../actions/actions'

const initialState = {
  error:false,
  gameMode:{}
};

export default {
  gameSettings:handleActions({
    [getGameSettings]:(state)=>{
      return{
        ...state,
        error: false
      }
    },
    [getGameSettingsSuccess]:(state,payload)=>{
      return{
        ...state,
        error: false,
        gameMode: payload
      }
    },
    [getGameSettingsFailure]:(state)=>{
      return{
        ...state,
        error:true
      }
    }
  },initialState)
}
