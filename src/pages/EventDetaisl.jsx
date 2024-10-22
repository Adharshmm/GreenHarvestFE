import React from 'react'
import EventCard from '../components/EventCard'
import Header from '../components/Header'

function EventDetaisl() {
  return (
    <>

      <Header />
      <div className='ps-3' style={{ paddingTop: "5rem" }}>
        <EventCard />
      </div>
    </>
  )
}

export default EventDetaisl