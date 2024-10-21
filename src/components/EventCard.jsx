import React from 'react'

import Card from 'react-bootstrap/Card';
import { Row,Col } from 'react-bootstrap';
function EventCard() {
  const eventArray = [
    {
      title: 'Organic Farming Workshop',
      date: '2024-11-05',
      description: 'Learn sustainable farming practices in this hands-on workshop.',
      imageUrl: 'https://example.com/workshop-image.jpg',
    },
    {
      title: 'Farm-to-Table Event',
      date: '2024-11-12',
      description: 'Experience fresh, local produce with an exclusive farm-to-table dinner.',
      imageUrl: 'https://example.com/farm-to-table.jpg',
    },
    {
      title: 'Community Gardening Meetup',
      date: '2024-11-20',
      description: 'Join fellow gardeners to exchange tips and ideas for community gardening.',
      imageUrl: 'https://example.com/gardening-meetup.jpg',
    },
    {
      title: 'Harvest Festival',
      date: '2024-12-01',
      description: 'Celebrate the harvest with food, music, and community activities.',
      imageUrl: 'https://example.com/harvest-festival.jpg',
    },
    {
      title: 'Farmers Market',
      date: '2024-12-10',
      description: 'Explore a wide selection of fresh produce from local farmers.',
      imageUrl: 'https://example.com/farmers-market.jpg',
    },
  ];

  return (
    <>
      <Row className="pe-3">
        {eventArray && eventArray.length > 0 ? (
          eventArray.map((event, index) => (
            <Col sm={4} md={3} xl={2} key={index} className="mb-4">
              <Card style={{ width: '14rem' }} className="h-95">
                <Card.Img variant="top" style={{ objectFit: "cover" }} src={event.imageUrl} height={200} />
                <Card.Body>
                  <Card.Title>{event.title}</Card.Title>
                  <p>Date: {event.date}</p>
                  <p>{event.description}</p>
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