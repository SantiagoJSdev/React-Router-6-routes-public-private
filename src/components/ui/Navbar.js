import React, { useContext } from 'react'
import { Link, NavLink, useHistory, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'

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
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className= { ({isActive}) => "nav-item nav-link" + (isActive) ? 'active' : ''  }
                        
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                  
                        className= { ({isActive}) => "nav-item nav-link" + (isActive) ? 'active' : ''  }
                        
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    
                    <NavLink 
                        // activeClassName="active"
                        className= { ({isActive}) => "nav-item nav-link" + (isActive) ? 'active' : ''  }
                        // exact
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">

                    <span className='nav-item nav-link text-info'>{user.name}</span>
                    <button 
                      
                        className="nav-item nav-link btn" 
                        onClick={handleLogout}
                      
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}