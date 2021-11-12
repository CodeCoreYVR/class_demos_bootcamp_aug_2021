import React from 'react';
import {NavLink} from 'react-router-dom';
import { Session } from '../requests';

const NavBar = ({ currentUser, onSignOut }) => {
    const handleSignOut = () => {
        Session.destroy().then(() => {
            onSignOut()
        })
    }
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
                        -
                        <button onClick={handleSignOut}>Sign Out</button>
                    </>
                ) : (
                    <>
                        <NavLink to='sign_in'>Sign In</NavLink>
                        <NavLink to='sign_up'>Sign Up</NavLink>
                    </>
                )
            }
            
        </nav>
    )
}

export default NavBar;

