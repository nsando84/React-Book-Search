import React from 'react';
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav style={navbarStyle}>
            <p style={navWordsLogo}>Google Books</p>
            <NavLink activeClassName="active" to='/search'>
                <p style={navWords} className='navLinks'>Search</p>
            </NavLink>
            <NavLink activeClassName="active" to='/saved' >
                <p style={navWords} className='navLinks'>Saved</p>
            </NavLink>
            
        </nav>
    )
}

export default Navbar

const navbarStyle = {
    width: '100%',
    fontSize: '18px',
    height: '75px',
    borderBottom: '1px solid black',
    display: 'flex',
    alignItems: 'center',
}

const navWords = {
    marginBottom: '7px',
    marginLeft: '15px',
    fontSize: '15px',

}

const navWordsLogo = {
    fontSize: '20px',
    margin: '10px',
}