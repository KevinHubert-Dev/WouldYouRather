import React, { Component, Fragment } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { connect } from 'react-redux'

import Login from './components/Login'
import Header from './components/Header'
import Question from './components/Question'
import NotFound from './components/NotFound'
import Navigation from './components/Navigation'
import ProfileList from './components/ProfileList'
import PrivateRoute from './components/PrivateRoute'
import QuestionList from './components/QuestionList'
import HeaderProfile from './components/HeaderProfile'
import CreateQuestion from './components/CreateQuestion'

import LoadingBar from 'react-redux-loading'
import * as SharedActions from './redux/actions/sharedAction'



class App extends Component {

  componentDidMount() {
    this.props.dispatch(SharedActions.handleLoadInitialData())
  }

  render() {

    return (
      <BrowserRouter>
        <Fragment>
          <div className="App">
            <Header>
              <Navigation />
              <HeaderProfile />
            </Header>
            <LoadingBar />
            <div className='flex-center'>
              <Switch>
                <Route path='/login' exact component={Login} />
                <PrivateRoute path='/' exact component={QuestionList} />
                <PrivateRoute path='/add' exact component={CreateQuestion} />
                <PrivateRoute path='/leaderboard' exact component={ProfileList} />
                <PrivateRoute path='/questions/:id' exact component={Question} />
                <Route exact component={NotFound} />
              </Switch>
            </div>
          </div>
        </Fragment>
      </BrowserRouter >
    );
  }
}

function mapStateToProps() {
  return {}
}

export default connect(mapStateToProps)(App)