import { LOAD_PROFILE, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from "../action.type"

const initialState = {
    //creating the session storage 
    accessToken: sessionStorage.getItem('gify-access-token')
      ? sessionStorage.getItem('gify-access-token')
      : null,
   user: sessionStorage.getItem('gify-user')
      ? JSON.parse(sessionStorage.getItem('gify-user'))
      : null,
   loading: false,
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