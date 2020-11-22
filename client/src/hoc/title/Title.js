import React from 'react';

const Title = () => {
    return (
        <div style={titleBox}>
            <h1>(React) Google Books Search</h1>
            <h3>Search for and Save Books of Interest.</h3>

        </div>
    )

};



const titleBox = {
    margin: 'auto',
    border: '1px solid black',
    maxWidth: '800px',
    marginTop: '30px',
    height: '175px',
    textAlign: 'center'
}


export default Title;