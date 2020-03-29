import {createStore} from 'redux'
import rootReducer from './rootReducer'
import {reducer} from './postReducer'
export const configureStore = ()=>{
    const store=createStore(reducer)
    return store; 
}