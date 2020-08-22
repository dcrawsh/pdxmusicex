import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div>
        <nav>
            <h3>PDXMUSICEX</h3>
            <ul className='nac'>
                <Link to='/'>
                    <li>Home</li>
                </Link>
                <Link to='/about'>
                    <li>About</li>
                </Link>
                <Link to='/posts'>
                    <li>Posts</li>
                </Link>
                <Link to='/posts/new'>
                    <li>Create New</li>
                </Link>
                
            </ul>
        </nav>
    </div>
  );
}

export default Nav;