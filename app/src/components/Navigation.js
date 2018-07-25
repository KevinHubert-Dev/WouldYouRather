import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = (props) => {
  return (
    <div className='navbar'>
      <NavLink to='/' exact activeClassName='active'>Home</NavLink>
      <NavLink to='/add' exact activeClassName='active'>Create Question</NavLink>
      <NavLink to='/leaderboard' exact activeClassName='active'>Leader Board</NavLink>
    </div>
  );
}

export default Navigation