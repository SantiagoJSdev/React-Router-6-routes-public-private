import React, { useContext } from 'react'
import { Link, NavLink, useHistory, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'
import '../ui/navStyle.css'

export const Navbar = () => {


    const {user, dispatch} = useContext(AuthContext)
    const navigate = useNavigate()

    // const history = useHistory()

const handleLogout = ()=>{
    navigate('/login', {
        replace: true
    })

    const action = {
        type: types.logout,
        payload: {logged: false} 
    }

    dispatch(action)
//    history.replace('/login')
}

    return (
        //navbar navbar-expand-sm navbar-dark bg-dark
        <div className="nav-container10"> 

            <div className='nav-2'>
                    <NavLink 
                    className={'link'}
                        // className= { ({isActive}) => "nav-item nav-link" + (isActive) ? 'active' : ''  }
                        
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>
            </div>

            <div className='nav-3'>
                    <NavLink 
                   className={'link'}
                        // className= { ({isActive}) => "nav-item nav-link" + (isActive) ? 'active' : ''  }
                        
                        to="/dc"
                    >
                        DC
                    </NavLink>
            </div>

            <div className='nav-4'>
                    <NavLink 
                     className={'link'}
                        // activeClassName="active"
                        // className= { ({isActive}) => "nav-item nav-link" + (isActive) ? 'active' : ''  }
                        // exact
                        to="/search"
                    >
                        Search
                    </NavLink>
            </div>
            

            <div className="nav-5">
               

                    <span >{user.name}</span>
            </div>

            <div className="nav-6">
                    <button 
                      
                        className="boton" 
                        onClick={handleLogout}
                      
                    >
                        Logout
                    </button>
            </div>
              
           
        </div>
    )
}