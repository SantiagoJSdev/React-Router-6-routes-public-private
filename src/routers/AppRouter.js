import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRautes } from './PublicRautes';


export const AppRouter = () => {
    return (
        <BrowserRouter>
        {/* <Navbar/> */}
        <Routes>
          
               
                    <Route path="/login" element={ 
                    <PublicRautes>
                        <LoginScreen/> 
                    </PublicRautes>
                    } 
                    />
                    
                    <Route path="/*" element={
                        <PrivateRoutes>
                            <DashboardRoutes/>
                        </PrivateRoutes>
                         } />
            
       
        </Routes>
        </BrowserRouter>
    )
}
