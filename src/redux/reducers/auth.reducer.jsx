import { LOAD_PROFILE, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from "../action.type"

const initialState = {
    accessToken:null,
    user:null,
    loading:false
}

export const authReducer = (prevState=initialState,action)=> {
const {type,payload} = action

switch(type){

    case LOGIN_REQUEST:
        return{
            ...prevState,
            loading:true
        }

        case LOGIN_SUCCESS:return{
            ...prevState,
            accessToken:payload,
            loading:false
        }
        case LOGIN_FAIL:
        return{
            ...prevState,
            accessToken:payload,
            loading:false,
            error:payload
        }
        case LOAD_PROFILE:return{
            ...prevState,
            user:payload,
            loading:false
        }
        default:
            return prevState
}

}