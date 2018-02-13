import {
  CHANGE_AUTH
} from './type';
import {push} from 'react-router-redux'


export const authenticate = isLoggedIn => {
  return{
    type:CHANGE_AUTH,
    payload:isLoggedIn
  }
}

export const navigation = text => dispatch => {
  dispatch(push(text))
}
