import React, { useState } from 'react';
import axios from 'axios';
import BookInfo from '../../components/Books/Books'



const Search = () => {

    const [ searchState, setSearchState ] = useState('')
    const [ errorHandler, setErrorHandler ] = useState('')
    const [ bookInfo, setBookInfo ] = useState('')

    let searchedBook;
    if (bookInfo) {
        searchedBook = <BookInfo bookInfo={bookInfo} />
    }
    
    const searchHandler = () => {
        if (searchState.length === 0) {
            setErrorHandler('Input field empty.')
        } else {
            axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchState}`)
                .then(response => {
                    setBookInfo(response.data.items)
                })
                .catch(error => {
                    console.log(error)
                })
            setSearchState('')
        }
    }

    return (
        <>
        <div style={searchWrapper}>
            <p style={titleSearch}>Book Search</p>
            <input 
                style={inputSearch} 
                onChange={letter => {
                    setSearchState(letter.target.value)
                    if (errorHandler.length > 0) setErrorHandler('')
                }} 
                value={searchState}
            />
            <div style={errorSearch}>{errorHandler}</div>
            <button style={buttonSearch} onClick={searchHandler}>Search</button>
        </div>
        <div>
            {searchedBook}
        </div>
                
        </>
    )
}


const searchWrapper = {
    margin: 'auto',
    border: '1px solid grey',
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
    marginTop: '7px',
    marginRight: '4%',
    display: 'inline-block',
}

const errorSearch = {
    height: '15px',
    color: 'red',
    fontSize: '12px',
    display: 'block',
    marginRight: '4%'
}


export default Search

