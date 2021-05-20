import React from 'react'
import './_login.scss'
import {useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/actions/auth.action'

const LoginScreen = () => {
   const dispatch = useDispatch()
   //creating an access token for the user 
   const accessToken=useSelector(state=>state.auth.accessToken)
   const history = useHistory()
   const handleLogin = () => {
      dispatch(login())
   }
   //checking if the access token is null . if null redirecting the user to home page
   useEffect(() => {
      if (accessToken) {
         history.push('/')
      }
   }, [accessToken, history])
   
    return (
        <div className='login'>
         <div className='login__container'>
            <h2>Gifs Explorer</h2>
            <img
               src='https://developers.giphy.com/branch/master/static/header-logo-8974b8ae658f704a5b48a2d039b8ad93.gif'
               alt=''
            />
            <button onClick={handleLogin}>LOGIN USING GOOGLE</button>
            <p>This WebApp is made using GIPHY API</p>
         </div>
      </div>
    )
}

export default LoginScreen