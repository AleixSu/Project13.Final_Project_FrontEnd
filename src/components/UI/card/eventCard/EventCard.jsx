import React from 'react'
import './EventCard.css'

const EventCard = ({ key, src, eventName, eventCity }) => {
  return (
    <div
      key={key}
      className='eventCard'
      style={{ backgroundImage: `url(${src})` }}
    >
      <div id='overlayBlurCard'></div>
      <div>
        <h3>{eventName} </h3>
        <h4>{eventCity} </h4>
      </div>
    </div>
  )
}

export default EventCard
