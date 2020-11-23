import React from 'react';

const BookInfo = (props) => {



    const { author, description, imageLinks, link, title } = props.bookInfo
    
    return (
        <div style={bookWrapper}>
            <div style={bookInfoTop}>
            <section>
            <h3>{title}</h3>
            <p style={bookAuthor}>Written by {author.map((author, index) => {
                return <span key={index}>{author}</span>
            })}</p>
            </section>
            <section >
                <button 
                    style={bookButton}
                    onClick={() => {
                       window.open(link) 
                    }}
                >View</button>
                <button style={bookButton}>Save</button>
            </section>
            </div>
            <div style={bookInfoBottom}>
            <p style={bookImage}><img src={imageLinks} /></p>
            <p style={bookDescription}>{description}</p>
            </div>
        </div>
    )
};


const bookWrapper = {
    maxWidth: '800px',
    margin: 'auto',
    marginTop: '30px',
    minHeight: '175px',
    border: '1px solid grey'
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