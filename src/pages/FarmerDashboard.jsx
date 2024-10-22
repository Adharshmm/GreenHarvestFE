import React, { useState, useEffect } from 'react';
import { Button, Form, Row, Col, Table, Modal } from 'react-bootstrap';

function FarmerDashboard() {
  // Sample orders, items, and events data (replace with API data)
  const [orders, setOrders] = useState([
    { id: 1, product: 'Organic Apples', quantity: 10, price: '$20', status: 'Pending' },
    { id: 2, product: 'Dairy Milk', quantity: 5, price: '$15', status: 'Delivered' }
  ]);

  const [items, setItems] = useState([
    { id: 1, name: 'Organic Apples', price: '$2 per kg' },
    { id: 2, name: 'Dairy Milk', price: '$4 per liter' }
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

  // Fetch farmer profile when the component mounts (replace with API call)
  useEffect(() => {
    const farmerProfile = {
      name: 'Farmer John',
      email: 'farmerjohn@gmail.com',
      address: '456 Farm Road, Countryside'
    };
    setProfile(farmerProfile);
  }, []);

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile(prevProfile => ({
      ...prevProfile,
      [name]: value
    }));
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    console.log('Updated Profile:', profile);
    alert('Profile updated successfully!');
  };

  const updateOrderStatus = (id, newStatus) => {
    const updatedOrders = orders.map(order => order.id === id ? { ...order, status: newStatus } : order);
    setOrders(updatedOrders);
  };

  const deleteOrder = (id) => {
    const updatedOrders = orders.filter(order => order.id !== id);
    setOrders(updatedOrders);
  };

  // Add, Update, and Delete items and events
  const addItem = () => {
    setItems([...items, { ...newItem, id: items.length + 1 }]);
    setNewItem({ name: '', price: '' });
    setShowAddItemModal(false);
  };

  const addEvent = () => {
    setEvents([...events, { ...newEvent, id: events.length + 1 }]);
    setNewEvent({ name: '', date: '' });
    setShowAddEventModal(false);
  };

  return (
    <div className="p-4">
      <h2 className="mb-4">Farmer Dashboard</h2>

      {/* Edit Profile Section */}
      <Row className="mb-5">
        <Col md={6}>
          <h4>Edit Profile</h4>
          <Form onSubmit={handleProfileSubmit}>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={profile.name}
                onChange={handleProfileChange}
                placeholder="Enter your name"
              />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={profile.email}
                onChange={handleProfileChange}
                placeholder="Enter your email"
              />
            </Form.Group>

            <Form.Group controlId="formAddress" className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                name="address"
                value={profile.address}
                onChange={handleProfileChange}
                placeholder="Enter your address"
              />
            </Form.Group>

            <Button variant="success" type="submit">
              Update Profile
            </Button>
          </Form>
        </Col>
      </Row>
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


      {/* Items Management Section */}
      <Row className="mb-5">
        <Col>
          <h4>Manage Items</h4>
          <Button variant="primary" onClick={() => setShowAddItemModal(true)}>
            Add Item
          </Button>
          <Table striped bordered hover className="mt-3">
            <thead>
              <tr>
                <th>Item ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>
                    <Button variant="info" className="me-2">
                      Update
                    </Button>
                    <Button variant="danger">
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>

      {/* Events Management Section */}
      <Row className="mb-5">
        <Col>
          <h4>Manage Events</h4>
          <Button variant="primary" onClick={() => setShowAddEventModal(true)}>
            Add Event
          </Button>
          <Table striped bordered hover className="mt-3">
            <thead>
              <tr>
                <th>Event ID</th>
                <th>Name</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {events.map(event => (
                <tr key={event.id}>
                  <td>{event.id}</td>
                  <td>{event.name}</td>
                  <td>{event.date}</td>
                  <td>
                    <Button variant="info" className="me-2">
                      Update
                    </Button>
                    <Button variant="danger">
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>

      {/* Add Item Modal */}
      <Modal show={showAddItemModal} onHide={() => setShowAddItemModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="itemName" className="mb-3">
              <Form.Label>Item Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter item name"
                value={newItem.name}
                onChange={e => setNewItem({ ...newItem, name: e.target.value })}
              />
            </Form.Group>

            <Form.Group controlId="itemPrice" className="mb-3">
              <Form.Label>Item Price</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter item price"
                value={newItem.price}
                onChange={e => setNewItem({ ...newItem, price: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowAddItemModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={addItem}>
            Add Item
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Add Event Modal */}
      <Modal show={showAddEventModal} onHide={() => setShowAddEventModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="eventName" className="mb-3">
              <Form.Label>Event Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter event name"
                value={newEvent.name}
                onChange={e => setNewEvent({ ...newEvent, name: e.target.value })}
              />
            </Form.Group>

            <Form.Group controlId="eventDate" className="mb-3">
              <Form.Label>Event Date</Form.Label>
              <Form.Control
                type="date"
                value={newEvent.date}
                onChange={e => setNewEvent({ ...newEvent, date: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowAddEventModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={addEvent}>
            Add Event
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default FarmerDashboard;
