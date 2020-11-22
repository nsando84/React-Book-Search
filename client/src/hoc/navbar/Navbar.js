import React from 'react';

const Navbar = () => {
    return (
        <nav style={navbarStyle}>
            <p style={navWordsLogo}>Google Books</p>
            <p style={navWords}>Search</p>
            <p style={navWords}>Saved</p>
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