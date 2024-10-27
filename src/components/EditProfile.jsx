
import React, { useState, useEffect } from 'react';
import { Button, Form, Row, Col, Table, Modal } from 'react-bootstrap';

function EditProfile() {
    const [role, setRole] = useState('');

    useEffect(() => {
        const storedRole = sessionStorage.getItem("role");
        setRole(storedRole); // Update the role state
    }, []);
    // Fetch farmer profile when the component mounts (replace with API call)
    const [profile, setProfile] = useState({
        name: '',
        email: '',
        address: ''
    });

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

    return (
        <>
            {role === "farmer" ? <>
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
            </> : <>
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
            </>}
        </>
    )
}

export default EditProfile