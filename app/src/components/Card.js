import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

const Card = (props) => {
  return (
    <div className='card center-content'>
      <div className='expand'>
        <h1>{props.title}</h1>
        {props.description && <h2>{props.description}</h2>}
      </div>
      <div>
        {props.children}
      </div>
    </div>
  );
}

export default Card