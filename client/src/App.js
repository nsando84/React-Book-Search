import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './hoc/navbar/Navbar'
import Title from './hoc/title/Title'
import Search from './containers/Searched/Searched'
import Saved from './containers/Saved/Saved'

function App() {
  return (
    <>
    <BrowserRouter>

      <Navbar />
      <Title />
        <Switch>
          <Route path='/saved' exact component={Saved} value={'saved'}/>
          <Route path='/' component={Search} value={'search'}/>     
        </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
