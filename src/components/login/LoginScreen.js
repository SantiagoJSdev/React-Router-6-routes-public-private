import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = () => {

const {user, dispatch} = useContext(AuthContext)
    
const navegate =useNavigate()
// console.log(navegacion)

    const handleLogin = () => {
        navegate('/', {
            replace : true
        })
        const action = {
            type: types.login,
            payload: {name: 'Santiago'}
        }
        dispatch(action)
    }

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={ handleLogin }
            >
                Login
            </button>

        </div>
    )
}
