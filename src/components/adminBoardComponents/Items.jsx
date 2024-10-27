import React, { useState } from 'react';
import { Table, Button } from 'react-bootstrap';

const Items = () => {
    // Sample items data - replace this with actual data from your backend
    const [items, setItems] = useState([
        { id: 1, name: 'Item 1', description: 'Description for Item 1', status: 'Pending' },
        { id: 2, name: 'Item 2', description: 'Description for Item 2', status: 'Pending' },
    ]);

    const handleApprove = (itemId) => {
        // Logic to approve the item
        console.log(`Approved item with ID: ${itemId}`);
        setItems(items.map(item => 
            item.id === itemId ? { ...item, status: 'Approved' } : item
        ));
    };

    const handleDeny = (itemId) => {
        // Logic to deny the item
        console.log(`Denied item with ID: ${itemId}`);
        setItems(items.map(item => 
            item.id === itemId ? { ...item, status: 'Denied' } : item
        ));
    };

    return (
        <div>
            <h2 className="mb-4">Manage Items</h2>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Item Name</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td>{item.status}</td>
                            <td>
                                <Button 
                                    variant="success" 
                                    onClick={() => handleApprove(item.id)} 
                                    disabled={item.status !== 'Pending'}
                                >
                                    Approve
                                </Button>
                                <Button 
                                    variant="danger" 
                                    onClick={() => handleDeny(item.id)} 
                                    disabled={item.status !== 'Pending'} 
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

export default Items;
