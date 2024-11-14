import React, { useEffect, useState } from 'react';
import { Table, Button, Alert } from 'react-bootstrap';
import { farmerDetailsApi } from '../../services/allApi';

const Farmers = () => {
    // Sample farmers data - replace this with actual data from your backend
    const [farmers, setFarmers] = useState([]);
    const [notification, setNotification] = useState('');

    const handleDelete = (farmerId) => {
        // Logic to delete the farmer
        setFarmers(farmers.filter(farmer => farmer.id !== farmerId));
        setNotification(`Farmer with ID: ${farmerId} has been deleted successfully.`);
    };
    useEffect(()=>{
        getFarmerDetailsFun()
    },[])
    const reqHeader = {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${localStorage.getItem("token")}`
    }
    const getFarmerDetailsFun = async()=>{
        const response = await farmerDetailsApi(reqHeader)
        console.log(response)
        setFarmers(response.data)
    }

    return (
        <div>
            <h2 className="mb-4">Manage Farmers</h2>
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
                    {farmers.length === 0 ? (
                        <tr>
                            <td colSpan="3" className="text-center">No farmers available</td>
                        </tr>
                    ) : (
                        farmers.map(farmer => (
                            <tr key={farmer._id}>
                                <td>{farmer.name}</td>
                                <td>{farmer.email}</td>
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
