import React from 'react'
import { NavLink } from 'react-router-dom'
import './Card.css'

const Card = ({ text, src, pathTo }) => {
  return (
    <div className='card' style={{ backgroundImage: `url(${src})` }}>
      <NavLink to={pathTo}>
        <h3>{text}</h3>
      </NavLink>
    </div>
  )
}

export default Card
