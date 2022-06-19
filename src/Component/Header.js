import React , {useContext} from 'react'
import AuthContext from './../Context/AuthContext'
import { NavLink } from 'react-router-dom'


function Header(){


    let authContext = useContext(AuthContext)

    let doLogin = () => authContext.dispatch({type : 'user-login'}) ;

    let doLogout = () =>  authContext.dispatch({type : 'user-logout'}) ;
    

    return(
        <header>
            <div class="navbar navbar-dark navbar-expand-md bg-dark shadow-sm">
                <div class="container d-flex justify-content-between">
                    <a href="#" class="navbar-brand d-flex align-items-center">
                    <strong>Todo App</strong>
                    </a>

                    <ul className="navbar-nav mr-auto" >
                        <li className="nav-item">
                            <NavLink className="nav-link " exact to = "/" >Home</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link " to = "/about" >About</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link " to ="/contact" >Contact</NavLink>
                        </li>
                    </ul>
                </div>
                
                {
                    ! authContext.log 
                     ? <button className= "btn btn-sm btn-success" onClick={ doLogin }>login</button>
                     : <button className= "btn btn-sm btn-danger" onClick={ doLogout }>logout</button>
                }

            </div>
        </header>
    )
}

export default Header ;