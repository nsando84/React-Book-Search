import React, { useEffect, useState } from 'react';
import axios from 'axios'

const SavedBook = () => {

    const [ savedBooks, setSavedBooks ] = useState('')
 
    
    useEffect(() => {
        axios.get('/api/books')
        .then(response => {
            setSavedBooks(response.data)
         
            
        })
        .catch(error => console.log(error))
    }, [])
    

    return (
        <div style={bigBookWrapper}>
           {!savedBooks ? '' : savedBooks.map(book => {

               const { _id, bookid, authors, description, image, link, title } = book

                return (    
                    <div style={bookWrapper} key={bookid} id={bookid}>
                        <div style={bookInfoTop}>
                            <section>
                                <h3>{title}</h3>
                                <p style={bookAuthor}>Written by <span>{authors}</span></p>
                            </section>
                        <section >
                            <button 
                                style={bookButton}
                                onClick={() => {
                                    window.open(link) 
                                }}
                                >View</button>
                            <button 
                                style={bookButton}
                                onClick={() => {
                                    axios.delete(`/api/books/${_id}`)
                                        .then(() => {
                                            document.getElementById(bookid).remove()
                                        })
                                        .catch(error => console.log(error))
                                }}
                                >Delete</button>
                            
                        </section>
                        </div>
                        <div style={bookInfoBottom}>
                            <p style={bookImage}><img alt={title} src={image} /></p>
                            <p style={bookDescription}>{description}</p>
                        </div>
                    </div>
                )

           })}
    
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

const bookWrapper ={
    border: '1px solid grey',
    marginTop: '20px'
}

const bookAuthor = {
    fontSize: '12px',   
}



const bookImage = {}
const bookButton = {
    padding: '5px 7px',
    margin: '5px'
}
const bookDescription = {
    display: 'inline',
    padding: '10px'
}

const bookInfoBottom = {
    display: 'flex',
    padding: '10px',


}

const bookInfoTop = {
    display: 'flex',
    padding: '10px',
    justifyContent: 'space-between'
}


export default SavedBook