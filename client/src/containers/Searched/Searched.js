import React from 'react';

const Search = () => {
    return (
        <div style={searchWrapper}>
            <p style={titleSearch}>Book Search</p>
            <input style={inputSearch} ></input>
            <button style={buttonSearch}>Search</button>
        </div>
    )
}


const searchWrapper = {
    margin: 'auto',
    border: '1px solid black',
    maxWidth: '800px',
    marginTop: '30px',
    height: '130px',
    textAlign: 'right',
}

const titleSearch = {
    textAlign: 'left',
    marginTop: '-2px',
    padding: '7px'
}

const inputSearch = {
    width: '90%',
    margin: 'auto',
    display: 'block',
    marginTop: '5px',
    padding: '5px'
}

const buttonSearch = {
    textAlign: 'right',
    marginTop: '20px',
    marginRight: '4%'
}


export default Search

