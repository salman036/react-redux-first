import * as types from './constants';

const initialState = {
    user: {},
    error: {}
}

export default function AppReducer(state = initialState, action)
{
    switch(action.type){
        case types.LOGIN_REQUEST:
            return {
                ...state,
                user: action.data
            };
        case types.LOGIN_REQUEST_SUCCESS:
            return{
                ...state,
                user: action.data
            }
        case types.LOGIN_REQUEST_FAILURE:
            return{
                ...state,
                error: action.data
            }
        default:
            return state
    }
}