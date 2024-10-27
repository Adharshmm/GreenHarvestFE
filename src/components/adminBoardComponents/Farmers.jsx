import React, { useState } from 'react';
import { Table, Button, Alert } from 'react-bootstrap';

const Farmers = () => {
    // Sample farmers data - replace this with actual data from your backend
    const [farmers, setFarmers] = useState([
        { id: 1, name: 'Farmer 1', farmName: 'Green Acres' },
        { id: 2, name: 'Farmer 2', farmName: 'Sunny Fields' },
        { id: 3, name: 'Farmer 3', farmName: 'Fresh Produce Co.' },
    ]);
    const [notification, setNotification] = useState('');

    const handleDelete = (farmerId) => {
        // Logic to delete the farmer
        setFarmers(farmers.filter(farmer => farmer.id !== farmerId));
        setNotification(`Farmer with ID: ${farmerId} has been deleted successfully.`);
    };

    return (
        <div>
            <h2 className="mb-4">Manage Farmers</h2>
            {notification && <Alert variant="success">{notification}</Alert>}
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Farm Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {farmers.length === 0 ? (
                        <tr>
                            <td colSpan="3" className="text-center">No farmers available</td>
                        </tr>
                    ) : (
                        farmers.map(farmer => (
                            <tr key={farmer.id}>
                                <td>{farmer.name}</td>
                                <td>{farmer.farmName}</td>
                                <td>
                                    <Button 
                                        variant="danger" 
                                        onClick={() => handleDelete(farmer.id)}
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

export default Farmers;
