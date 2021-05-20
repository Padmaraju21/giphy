import React from 'react'
import './_login.scss'

function Login() {
    return (
        <div className='login'>
         <div className='login__container'>
            <h2>Gifs Explorer</h2>
            <img
               src='https://developers.giphy.com/branch/master/static/header-logo-8974b8ae658f704a5b48a2d039b8ad93.gif'
               alt=''
            />
            <button>LOGIN USING GOOGLE</button>
            <p>This WebApp is made using GIPHY API</p>
         </div>
      </div>
    )
}

export default Login