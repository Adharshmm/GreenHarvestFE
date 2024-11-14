import React, { useEffect, useState } from 'react'

import Card from 'react-bootstrap/Card';
import { Row,Col } from 'react-bootstrap';
import { getAllEventsApi } from '../services/allApi';
function EventCard() {
  const [eventArray,setEventArray] = useState([]);
useEffect(()=>{
eventGetFun()
},[])
  const reqHeader = {
    "Content-Type": "application/json",
    'Authorization': `Bearer ${localStorage.getItem("token")}`
}
  const eventGetFun = async()=>{
    const events = await getAllEventsApi(reqHeader)
    console.log(events)
    setEventArray(events.data)
  }

  return (
    <>
      <Row className="pe-3">
        {eventArray && eventArray.length > 0 ? (
          eventArray.map((event, index) => (
            <Col xs={6} sm={6} md={4} lg={3} xl={2}  key={index} className="mb-4">
              <Card style={{ width: '14rem' }} className="h-95">
                <Card.Img variant="top" style={{ objectFit: "cover" }} src={event.imageUrl} height={200} />
                <Card.Body>
                  <Card.Title>{event.title}</Card.Title>
                  <p>Date: {event.date.split("T")[0]}</p>
                  <p>{event.description.split(14)}..</p>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p>No events to display</p>
        )}
      </Row>
    </>

  )
}

export default EventCard