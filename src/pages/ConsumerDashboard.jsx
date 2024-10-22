import React, { useState, useEffect } from 'react';
import { Button, Form, Row, Col, Table } from 'react-bootstrap';

function ConsumerDashboard() {
  // Sample order data, you can replace this with data fetched from an API
  const [orders, setOrders] = useState([
    { id: 1, product: 'Organic Apples', quantity: 5, price: '$10', status: 'Delivered' },
    { id: 2, product: 'Fresh Tomatoes', quantity: 10, price: '$15', status: 'Pending' },
    { id: 3, product: 'Dairy Milk', quantity: 2, price: '$8', status: 'Delivered' }
  ]);

  // Profile state
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    address: ''
  });

  // Fetch profile data when the component mounts (replace with API call)
  useEffect(() => {
    // Mock API response
    const userProfile = {
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      address: '123 Main St, Springfield'
    };
    setProfile(userProfile);
  }, []);

  // Handle profile form change
  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile(prevProfile => ({
      ...prevProfile,
      [name]: value
    }));
  };

  // Handle profile form submit
  const handleProfileSubmit = (e) => {
    e.preventDefault();
    // Send updated profile to the backend
    console.log('Updated Profile:', profile);
    alert('Profile updated successfully!');
  };

  return (
    <div className="p-4">
      <h2 className="mb-4">Consumer Dashboard</h2>

      {/* Orders Section */}
      <Row className="mb-5">
        <Col>
          <h4>Your Orders</h4>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Status</th>
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
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>

      {/* Edit Profile Section */}
      <Row>
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
    </div>
  );
}

export default ConsumerDashboard;
