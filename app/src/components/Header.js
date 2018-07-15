import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
  return (
    <div className='header center-content'>
      {props.children}
    </div>
  );
}

export default Header