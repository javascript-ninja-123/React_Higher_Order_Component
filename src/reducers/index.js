import { combineReducers } from 'redux';
import AuthReducer from './reducer_auth';
import StatusReducer from './reducer_status';
import SelectReducer from './reducer_select';
import FetchSelectorReducer from './reducer_fetchPost';


const rootReducer = combineReducers({
auth:AuthReducer,
status:StatusReducer,
select:SelectReducer,
posts:FetchSelectorReducer
});

export default rootReducer;
