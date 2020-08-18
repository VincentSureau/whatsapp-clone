import React from 'react'
import { Button } from '@material-ui/core'
import { auth, provider } from '../../firebase'
import { actionTypes } from '../../store/UserReducer';

function Login() {
    const [{}, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(result => (
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                })
            ))
            .catch(error => console.log(error))
        ;
    }
    
    return (
        <div className="login">
            <div className="login__container">
                <img src="" alt=""/>
                <div className="login__text">
                    <h1>Sign In to Whatsapp</h1>
                </div>
                <Button onClick={signIn}>Sign in to Whatsapp</Button>
            </div>
        </div>
    )
}

export default Login
