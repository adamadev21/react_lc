import {CREATE_POST, UPDATE_POST, DELETE_POST } from "./forumConstants"
import {createReducer} from '../utilities'
export const initialState =[
      { author: 'Adama', date: new Date().toLocaleDateString, title: 'Title', text: " here is the text" }
      ]
//  export const Reducer = (state=initialState, action)=>{
//      switch (action.type) {
//          case CREATE_POST:
//              return {...state, post: state.post}
//         case UPDATE_POST:
//             return{...state, post: state.post}
//         case DELETE_POST:
//             return{...state, post: state.post}
//         default:
//             return state;
//      }

 
 export const createPost = (state,payload)=>{
     return [...state, payload]
 }
 export const updatePost = (state,payload)=>{
     return [...state.filter(payload.id!==payload.id), payload]
 }
export const deletePost =(state, payload)=>{
    return [
        ...state.filter(post=> post.id!==payload.postId)
     ]
}
 export default createReducer({initialState,
    [CREATE_POST]:createPost,
    [UPDATE_POST]:updatePost,
    [DELETE_POST]: deletePost});