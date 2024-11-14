import React, { useEffect, useState } from 'react';
import { Table, Button, Alert } from 'react-bootstrap';
import { userDetailsApi } from '../../services/allApi';

const Users = () => {
    // Sample users data - replace this with actual data from your backend
    const [users, setUsers] = useState([
        { id: 1, name: 'User 1', email: 'user1@example.com' },
        { id: 2, name: 'User 2', email: 'user2@example.com' },
        { id: 3, name: 'User 3', email: 'user3@example.com' },
    ]);
    const [notification, setNotification] = useState('');

    const handleDelete = (userId) => {
        // Logic to delete the user
        setUsers(users.filter(user => user.id !== userId));
        setNotification(`User with ID: ${userId} has been deleted successfully.`);
    };
    useEffect(()=>{
        getUserDetailsFun()
    },[])
    const reqHeader = {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${localStorage.getItem("token")}`
    }
    const getUserDetailsFun = async()=>{
        const response = await userDetailsApi(reqHeader)
        console.log(response)
        setUsers(response.data)
    }
    return (
        <div>
            <h2 className="mb-4">Manage Users</h2>
            {notification && <Alert variant="success">{notification}</Alert>}
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.length === 0 ? (
                        <tr>
                            <td colSpan="3" className="text-center">No users available</td>
                        </tr>
                    ) : (
                        users.map(user => (
                            <tr key={user._id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Button 
                                        variant="danger" 
                                        onClick={() => handleDelete(user.id)}
                                    >
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </Table>
        </div>
    );
};

export default Users;
