import React from 'react';
import Navbar from './hoc/navbar/Navbar'
import Title from './hoc/title/Title'
import Search from './containers/Searched/Searched'

function App() {
  return (
    <>
      <Navbar />
      <Title />
      <Search />
    </>
  );
}

export default App;
