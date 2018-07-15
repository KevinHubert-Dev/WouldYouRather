import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation'
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './components/Header'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App "><Header>
            <div className='half'>
              <Navigation />
            </div>
          </Header>
          <Route path='/login' exact render={() => "New"} />
          <Route path='/' exact render={() => "/"} />
          <Route path='/login' exact render={() => "Login"} />
          <Route path='/new' exact render={() => "New"} />
          <Route path='/profile' exact render={() => "Profile"} />
          <Route path='/leaderboard' exact render={() => "Leaderboard"} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App