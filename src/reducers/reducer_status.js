import{
  CHECK_STATUS
} from '../actions/type';


export default (state = false, action) => {
  switch(action.type){
    case CHECK_STATUS:
    return action.payload;
     default:
    return state
  }
}
