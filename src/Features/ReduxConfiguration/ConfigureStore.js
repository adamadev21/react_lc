import {createStore} from 'redux'
import Reducer from './postReducer'
export const configureStore = ()=>{
    const store=createStore(Reducer)
    return store; 
}