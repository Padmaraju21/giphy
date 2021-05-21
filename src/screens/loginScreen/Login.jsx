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
            <h2><bold>GIFY EXPLORER</bold></h2>
            <img
               src='https://i.gifer.com/XOsX.gif'
               alt=''
            />
            <button onClick={handleLogin}>LOGIN USING GOOGLE</button>
            <p>This Application is made using giphyAPI</p>
         </div>
      </div>
    )
}

export default LoginScreen