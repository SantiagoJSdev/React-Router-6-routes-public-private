import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../auth/AuthContext'
import { authReducer } from '../auth/authReducer'
import { DashboardRoutes } from './DashboardRoutes'

export const PrivateRoutes = ({children}) => {
    
    const {user} = useContext(AuthContext)

    return  (user.logged) ?
            children
            // <DashboardRoutes/>
            : <Navigate to = "/login"/>

        
        
        
    
}
