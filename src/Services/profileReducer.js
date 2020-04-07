import * as types from './constants';

const initialState = {
    profileUser: {},
    error: {}
}

export default function ProfileReducer(state = initialState, action) {
    switch(action.type){
        case types.PROFILE_REQUEST:
            return{
                ...state,
                profileUser: action.data
            }
        case types.PROFILE_REQUEST_SUCCESS:
            return{
                ...state,
                profileUser: action.data
            }
        case types.PROFILE_REQUEST_FAILURE:
            return{
                ...state,
                error: action.data
            }
        default:
            return state
    }
}