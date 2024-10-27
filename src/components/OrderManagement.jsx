import React from 'react'
import { useState } from 'react';
import { Button, Row, Col, Table} from 'react-bootstrap';
function OrderManagement() {
    // Sample orders, items, and events data (replace with API data)
    const [orders, setOrders] = useState([
        { id: 1, product: 'Organic Apples', quantity: 10, price: '$20', status: 'Pending' },
        { id: 2, product: 'Dairy Milk', quantity: 5, price: '$15', status: 'Delivered' }
    ]);


    const [events, setEvents] = useState([
        { id: 1, name: 'Local Farmers Workshop', date: '2024-11-05' },
        { id: 2, name: 'Organic Farming Seminar', date: '2024-12-12' }
    ]);

    const [profile, setProfile] = useState({
        name: '',
        email: '',
        address: ''
    });

    const [showAddItemModal, setShowAddItemModal] = useState(false);
    const [showAddEventModal, setShowAddEventModal] = useState(false);

    const [newItem, setNewItem] = useState({ name: '', price: '' });
    const [newEvent, setNewEvent] = useState({ name: '', date: '' });
    return (
        <>
            {/* Orders Section */}
            <Row className="mb-5">
                <Col>
                    <h4>Manage Orders</h4>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Product</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map(order => (
                                <tr key={order.id}>
                                    <td>{order.id}</td>
                                    <td>{order.product}</td>
                                    <td>{order.quantity}</td>
                                    <td>{order.price}</td>
                                    <td>{order.status}</td>
                                    <td>
                                        <Button
                                            variant="warning"
                                            onClick={() => updateOrderStatus(order.id, 'Pending')}
                                            className="me-2"
                                        >
                                            Set Pending
                                        </Button>
                                        <Button
                                            variant="success"
                                            onClick={() => updateOrderStatus(order.id, 'Delivered')}
                                            className="me-2"
                                        >
                                            Set Delivered
                                        </Button>
                                        <Button variant="danger" onClick={() => deleteOrder(order.id)}>
                                            Delete
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </>
    )
}

export default OrderManagement