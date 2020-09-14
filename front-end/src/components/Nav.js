import React from 'react';
import { NavLink } from 'react-router-dom';
import Login from './Login'
import logo from '/Users/dylancrawshaw/Documents/GitHub/pdxmusicex/front-end/src/pdxmusicexlogo1.jpg'

function Nav() {
  return (
    <div>
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbr-brand">
                <img className='nav-item' src={logo} alt='logo' width='200px' height='200px'/>
            </div>
            
            <div className="navbar-menu">
                <div className="navbar">
                    <NavLink className="navbar-item"  to='/'>Home</NavLink>
                    <NavLink className="navbar-item" to='/posts'>Posts</NavLink>
                    <NavLink className="navbar-item" to='/posts/new'>New</NavLink>
                    <NavLink className="navbar-item" to='/about'>About</NavLink>
                </div>
                <div className="navbar-end">
                    <div className="buttons">
                        <div className="button">
                            <NavLink className="nav-item" to='/login'>Log in</NavLink>
                        </div>
                    </div>
                </div>
                </div>
            
                
            
        </nav>
  
    </div>
  );
}

export default Nav;