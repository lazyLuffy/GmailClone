import { Button } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from './features/userSlice'
import { auth, provider } from './Firebase'
import "./login.css"
function Login() {
    const dispatch = useDispatch()
    const signIn=()=>{
        auth.signInWithPopup(provider)
        .then(({user})=>{
            dispatch(login({
                displayName:user.displayName,
                email:user.email,
                photoUrl:user.photoURL,
            }))
        }).catch(error=>alert(error.message))
    }
  return (
    <div className='login'>
          <div className="login__container">
              <img src="https://www.citypng.com/public/uploads/preview/-11597272377xtovj4zmfl.png" alt="Gmail-Logo" />
          <Button variant="contained" color='primary'  onClick={signIn}>Sign In</Button>
          </div>

    </div>
  )
}

export default Login