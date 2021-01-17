import React from 'react';
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLink from './SignedOutLink'

const NavBar = () => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">MarioPlan</Link>
                <SignedInLinks />
                <SignedOutLink />
            </div>
        </nav>
    )
}

export default NavBar;