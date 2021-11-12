import React from 'react';
import {NavLink} from 'react-router-dom';

const NavBar = ({ currentUser }) => {
    return(
        <nav>
            <NavLink to='/questions'>Questions Index</NavLink>
            |
            {
                currentUser ? (
                    <>
                    <NavLink to='/questions/new'>New Question</NavLink>
                    - 
                    <span>Welcome, {currentUser.first_name}</span>
                    </>
                ) : (
                    <NavLink to='sign_in'>Sign In</NavLink>
                )
            }
            
        </nav>
    )
}

export default NavBar;

