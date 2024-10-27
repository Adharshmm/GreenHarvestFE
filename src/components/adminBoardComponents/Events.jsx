import React, { useState } from 'react';
import { Table, Button } from 'react-bootstrap';

const Events = () => {
    // Sample events data - replace this with actual data from your backend
    const [events, setEvents] = useState([
        { id: 1, name: 'Event 1', date: '2024-10-30', status: 'Pending' },
        { id: 2, name: 'Event 2', date: '2024-11-05', status: 'Pending' },
    ]);

    const handleApprove = (eventId) => {
        // Logic to approve the event
        console.log(`Approved event with ID: ${eventId}`);
        setEvents(events.map(event => 
            event.id === eventId ? { ...event, status: 'Approved' } : event
        ));
    };

    const handleDeny = (eventId) => {
        // Logic to deny the event
        console.log(`Denied event with ID: ${eventId}`);
        setEvents(events.map(event => 
            event.id === eventId ? { ...event, status: 'Denied' } : event
        ));
    };

    return (
        <div>
            <h2 className="mb-4">Manage Events</h2>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Event Name</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {events.map(event => (
                        <tr key={event.id}>
                            <td>{event.name}</td>
                            <td>{event.date}</td>
                            <td>{event.status}</td>
                            <td>
                                <Button 
                                    variant="success" 
                                    onClick={() => handleApprove(event.id)} 
                                    disabled={event.status !== 'Pending'}
                                >
                                    Approve
                                </Button>
                                <Button 
                                    variant="danger" 
                                    onClick={() => handleDeny(event.id)} 
                                    disabled={event.status !== 'Pending'} 
                                    className="ms-2"
                                >
                                    Deny
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default Events;
