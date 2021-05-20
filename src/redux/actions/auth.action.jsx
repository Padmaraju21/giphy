import firebase from 'firebase/app'
import auth from '../../firebase'
import { LOAD_PROFILE, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOG_OUT } from '../action.type'


export  const login = () =>async dispatch =>{
    try{
        dispatch({
            type:LOGIN_REQUEST,
        })
        const provider=new firebase.auth.GoogleAuthProvider()
        const res= await auth.signInWithPopup(provider)
        console.log(res)

        const accessToken = res.credential.accessToken
        const profile = {
            name:res.additionalUserInfo.profile.name,
            photoURL:res.additionalUserInfo.profile.picture,
        }
        //Creating a session storage in the broswer for the user and the app
        sessionStorage.setItem("gify-access-token",accessToken)
        //Stringifying the profile as it is an object
        sessionStorage.setItem("gify-user",JSON.stringify(profile))
        dispatch({
            type: LOGIN_SUCCESS,
            payload: accessToken,
         })
         dispatch({
            type: LOAD_PROFILE,
            payload: profile,
         })
    }
    catch (error){
        console.log(error.message)
      dispatch({
          type:LOGIN_FAIL,
          payload: error.message,
        })
    }
}

export const log_out =()=>async dispatch =>{
    await auth.signOut()
    dispatch({
        type:LOG_OUT,
})
//deleting the session storage after user logout
sessionStorage.removeItem('gify-access-token')
sessionStorage.getItem('gify-user')
}