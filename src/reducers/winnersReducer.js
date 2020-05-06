import {handleActions} from 'redux-actions'

import {getWinners,getWinnersSuccess,getWinnersFailure} from '../actions/actions'

const initialState = {
  error:false,
  winners:[]
};

export default {
  winners:handleActions({
    [getWinners]:(state)=>{
      return{
        ...state,
        error: false
      }
    },
    [getWinnersSuccess]:(state,{payload})=>{
      return{
        ...state,
        error: false,
        winners:payload
      }
    },
    [getWinnersFailure]:(state)=>{
      return{
        ...state,
        error: true
      }
    }
  },initialState)
}