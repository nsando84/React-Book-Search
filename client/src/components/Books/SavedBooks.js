import React from 'react';
import axios from 'axios'

const SavedBook = () => {

    axios.get('http://localhost:5000/api/books')
        .then(response => console.log(response))
        .catch(error => console.log(error))
    
    return (
        <div style={bigBookWrapper}>
           
    
        </div>     
    )
};


const bigBookWrapper = {
    maxWidth: '800px',
    margin: 'auto',
    marginTop: '30px',
    minHeight: '175px',
    marginBottom: '50px'
}


export default SavedBook