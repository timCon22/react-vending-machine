import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './Navbar';
import './App.css';

import VendingMachine from './VandingMachine';
import Soda from './Soda';
import Chips from './Chips';
import Candy from './Candy';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Route exact path='/'>
          <VendingMachine/>
        </Route>

        <Route exact path='/soda'>
          <Soda/>
        </Route>

        <Route exact path='/candy'>
          <Candy/>
        </Route>

        <Route exact path='/chips'>
          <Chips />
        </Route>

      </BrowserRouter>
    </div>
  );
}

export default App;
