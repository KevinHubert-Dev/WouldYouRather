import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App ">
          <Header>
            <div className='half'>
              <Navigation />
            </div>
          </Header>
          <Switch>
            <Route path='/' exact render={() => "/"} />
            <Route path='/login' exact render={() => "Login"} />
            <Route path='/new' exact render={() => "New"} />
            <Route path='/profile' exact render={() => "Profile"} />
            <Route path='/leaderboard' exact render={() => "Leaderboard"} />
            <Route exact render={() => "Other (404)"} />
          </Switch>
        </div>
      </BrowserRouter >
    );
  }
}

export default App