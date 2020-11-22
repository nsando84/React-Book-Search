import React from 'react';

const Navbar = () => {
    return (
        <nav style={navbarStyle}>
            <p>Google Books</p>


        </nav>
    )
}

export default Navbar

const navbarStyle = {
    width: '100%',
    fontSize: '18px',
    height: '75px',
    borderBottom: '1px solid black'

}