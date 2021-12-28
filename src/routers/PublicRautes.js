import React, { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../auth/AuthContext"




export const PublicRautes = ({children}) => {

    const {user} = useContext(AuthContext)
    return  user.logged ?  <Navigate to= '/marvel'/> : children
        
    
}
