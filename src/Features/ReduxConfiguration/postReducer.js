import * as constants from './forumConstants';

const initialState = {
   people: [],
   isLoading: false,
   saveStatus: 'READY',
   person: {
       name: '',
       email: '',
       course: null,
       department:null
   }
}

export const reducer = (state=initialState, action)=>{
    switch(action.type) {
        case constants.FETCH_PEOPLE_REQUEST:
            return Object.assign({},state, {
                isLoading: true
            });
        case constants.FETCH_PEOPLE_SUCCESS:
            return Object.assign({}, state, {
                people: action.people,
                isLoading: false
            });
        case constants.SAVE_PEOPLE_REQUEST:
            return Object.assign({},state, {
                saveStatus: 'SAVING'
            });
        case constants.SAVE_PEOPLE_FAILURE:
            return Object.assign({}, state,{
                saveStatus:'ERROR'
            });
        case constants.SAVE_PEOPLE_SUCCESS:
            return Object.assign({}, state, {
                people:action.people,
                person:{
                    name: '',
                    email: '',
                    course: null,
                    department:null
                },
                saveStatus:'SUCCESS'
            });
        default:
            return state;
    }
}