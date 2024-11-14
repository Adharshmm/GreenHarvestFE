import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { getAllEventsApi, updateEventStatusApi } from '../../services/allApi';

const Events = () => {
    // Sample events data - replace this with actual data from your backend
    const[events,setEvents] = useState([])
    const [refresh, setRefresh] = useState(false);
    let reqHeader
    if (localStorage.getItem("token")) {
        reqHeader = {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        }
    }

    const handleApprove = async (e, status, eventId) => {
        e.preventDefault();
        const reqBody = { status, _id: eventId };
        try {
            const response = await updateEventStatusApi(reqBody, reqHeader);
            if(response.status==201){
                alert(response)
                setRefresh(true)
            }
        } catch (error) {
            console.error("Error updating event status:", error);
        }
    };

    useEffect(() => {
        getAllEvents()
        setRefresh(false)
    }, [refresh])

    const getAllEvents = async () => {
        const response = await getAllEventsApi(reqHeader)
        console.log('================Resposne==============')
        console.log(response)
        setEvents(response.data)
    }
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
                        <tr key={event._id}>
                            <td>{event.title}</td>
                            <td>{event.date.split("T")[0]}</td>
                            <td>{event.status}</td>
                            <td>
                                <Button
                                    value={"approved"}
                                    variant="success"
                                    onClick={(e) => handleApprove(e, e.target.value, event._id)}

                                >
                                    Approve
                                </Button>
                                <Button
                                    value={"rejected"}
                                    variant="danger"
                                    onClick={(e) => handleApprove(e, e.target.value, event._id)}
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
