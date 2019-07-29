import { combineReducers } from 'redux';
import userReducer from './userReducer'
import companyReducer from './companyReducer'

export default combineReducers({
    userReducer,
    companyReducer
});
