import React from 'react';
import axios from 'axios'

const BookInfo = (props) => {
 
    
    return (
        <div style={bigBookWrapper}>
        {props.bookInfo.map((ele, index) => {
            let { authors, description, imageLinks, infoLink, title } = ele.volumeInfo  
            return (    
                <div style={bookWrapper} key={index}>
                    <div style={bookInfoTop}>
                        <section>
                            <h3>{title}</h3>
                            <p style={bookAuthor}>Written by {!authors ? 'unknown' : authors.map((author, index) => {
                                return <span key={index}>{author}</span>
                            })}</p>
                        </section>
                    <section >
                        <button 
                            style={bookButton}
                            onClick={() => {
                            window.open(infoLink) 
                            }}
                        >View</button>
                        <button 
                            style={bookButton}
                            onClick={() => {
                                let bookInfo = {
                                    id: ele.volumeInfo.industryIdentifiers[0].identifier,
                                    authors,
                                    description,
                                    imageLinks: imageLinks.smallThumbnail,
                                    infoLink,
                                    title
                                }
                                axios.post('http://localhost:5000/api/books', bookInfo)
                                .then(response => console.log(response))
                                .catch(error => console.log(error))
                            }}
                        >Save</button>
                    </section>
                    </div>
                    <div style={bookInfoBottom}>
                        <p style={bookImage}><img alt={title} src={imageLinks.smallThumbnail} /></p>
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


export default BookInfo