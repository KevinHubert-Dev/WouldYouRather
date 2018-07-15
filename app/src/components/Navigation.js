import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Navigation extends Component {

  render() {
    return (
      <div className='navbar'>
        <NavLink to='/' exact activeClassName='active'>Home</NavLink>
        <NavLink to='/new' exact activeClassName='active'>Create Question</NavLink>
        <NavLink to='/profile' exact activeClassName='active'>Profile</NavLink>
        <NavLink to='/leaderboard' exact activeClassName='active'>Leader Board</NavLink>
      </div>
    );
  }
}

export default Navigation