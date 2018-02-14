import {
  FETCH_POST
} from '../actions/type';

export default (state = [],action) => {
  switch(action.type){
    case FETCH_POST:
    return [...state, action.payload];
    default:
    return state;
  }
}
