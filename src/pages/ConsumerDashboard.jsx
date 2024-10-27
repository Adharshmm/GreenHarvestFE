import React, { useState, useEffect } from 'react';
import { Button, Form, Row, Col, Table } from 'react-bootstrap';
import EditProfile from '../components/EditProfile';

function ConsumerDashboard() {
  // Sample order data, you can replace this with data fetched from an API
  const [orders, setOrders] = useState([
    { id: 1, product: 'Organic Apples', quantity: 5, price: '$10', status: 'Delivered' },
    { id: 2, product: 'Fresh Tomatoes', quantity: 10, price: '$15', status: 'Pending' },
    { id: 3, product: 'Dairy Milk', quantity: 2, price: '$8', status: 'Delivered' }
  ]);
  return (
    <div className="p-4">
      <h2 className="mb-4">Consumer Dashboard</h2>

      {/* Edit Profile Section */}
      <EditProfile />
      {/* Orders Section */}
      <Row className="mb-5 mt-2">
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

    </div>
  );
}

export default ConsumerDashboard;
