import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div>
        <nav>
            <h3>Logo</h3>
            <ul className='nac'>
                <Link to='/about'>
                    <li>About</li>
                </Link>
                <Link to='/posts'>
                    <li>Posts</li>
                </Link>
            </ul>
        </nav>
    </div>
  );
}

export default Nav;