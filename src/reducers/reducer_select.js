import {
  SELECT_POST,
  DESELECT_POST
} from '../actions/type';


export default (state = [], action) => {
  switch(action.type){
    case SELECT_POST:
    return [...state, action.payload];
    case DESELECT_POST:
    return [...state].filter(value => value !== action.payload)
    default:
    return state;
  }
}
