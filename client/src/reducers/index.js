import {combineReducers} from 'redux' ;
import clientReducer from './clientReducer';
import loginReducer from './loginReducer';

export default combineReducers({
   client: clientReducer,
   loginUser: loginReducer

});