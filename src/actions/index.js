import {
  CHANGE_AUTH,
  CHECK_STATUS,
  SELECT_POST,
  DESELECT_POST,
  FETCH_POST
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


export const checkStatus = userStatus => {
  return {
    type:CHECK_STATUS,
    payload:userStatus
  }
}

export const fetchPost = () => async(dispatch) => {
  const url = 'https://jsonplaceholder.typicode.com/users';
  const response = await fetch(url);
  const data = await response.json();
  dispatch({
    type:FETCH_POST,
    payload:data
  })
}

export const selectPost = id => {
  return{
    type:SELECT_POST,
    payload:id
  }
}

export const deselectPost = id => {
  return{
    type:DESELECT_POST,
    payload:id
  }
}
