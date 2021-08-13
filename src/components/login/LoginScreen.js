import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ({ history }) => {

const {user, dispatch} = useContext(AuthContext)
    

    const handleLogin = () => {
        // history.push('/');
        history.replace('/');
        const action = {
            type: types.login,
            payload: {name: 'santiago'}
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
