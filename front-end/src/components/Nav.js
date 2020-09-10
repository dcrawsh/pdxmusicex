import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <div className="topnav">
        <nav>
            {/* <img className='top_logo' src={logo} alt='logo'/> */}
            <ul>
                <NavLink  to='/'>
                    <li className="navBtn">Home</li>
                </NavLink>
                <NavLink  to='/posts'>
                    <li className="navBtn">Posts</li>
                </NavLink>
                <NavLink className="navBtn" to='/posts/new'>
                    <li className="navBtn">Create New</li>
                </NavLink>
                <NavLink className="navBtn aboutBtn" to='/about'>
                    <li >About</li>
                </NavLink>
                
            </ul>
        </nav>
    </div>
  );
}

export default Nav;