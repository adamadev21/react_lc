import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import {createStore} from 'redux'

const rootReducer = combineReducers({
form: formReducer
})
  
export default rootReducer;
