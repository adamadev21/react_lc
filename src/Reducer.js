import {TRIPLE, DOUBLE} from './testConstants'

const initialState = {
    data:12
}
 const Reducer = (state=initialState, action)=>{
     switch (action.type) {
         case TRIPLE:
             return {...state, data: state.data * 3}
        case DOUBLE:
            return{...state, data: state.data * 2}
        default:
            return state;
     }

 }
 export default Reducer;