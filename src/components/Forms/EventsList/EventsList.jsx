import React, { useEffect, useState } from 'react'

import './EventsList.css'
import { API } from '../../../utils/api/api'
import { useFilter } from '../../../context/FilterContext'
import EventCard from '../../UI/card/eventCard/eventCard'

const EventsList = () => {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const { selectedCountries } = useFilter()

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true)
      setError(null)

      try {
        const selectedIds = Object.values(selectedCountries)
          .filter((country) => country.selected)
          .map((country) => country.id)

        let response

        if (selectedIds.length === 0) {
          response = await API({
            endpoint: '/events',
            method: 'GET'
          })
        } else {
          const locationsParam = selectedIds.join(',')
          response = await API({
            endpoint: `/events/location/${locationsParam}`,
            method: 'GET'
          })
        }

        if (response.status === 404) {
          setEvents([])
        } else if (response.status === 200) {
          setEvents(response.data)
        } else {
          throw new Error('Failed to load the countries')
        }
      } catch (err) {
        console.error('Error fetching events:', err)
        setError(err.message)
        setEvents([])
      } finally {
        setLoading(false)
      }
    }

    fetchEvents()
  }, [selectedCountries])

  if (loading) {
    return <div className='loadingText'>Loading Events...</div>
  }

  if (error) {
    return <div className='errorText'>Error: {error}</div>
  }

  return (
    <div className='eventsListDiv'>
      {events.length === 0 && !loading ? (
        <div className='noEventsMessage'>
          <p>There's no events for the selected country</p>
        </div>
      ) : (
        <>
          <div className='eventsCount'>
            <h5>Events found: {events.length}</h5>
          </div>
          <div className='eventsGrid'>
            {events.map((event) => (
              <EventCard
                key={event._id}
                src={event.eventImg}
                eventName={event.eventName}
                eventCity={event.locationCity}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default EventsList
