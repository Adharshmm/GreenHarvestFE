import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { getAllItemsApi, updateItemStatusApi } from '../../services/allApi';

const Items = () => {
    // Sample items data - replace this with actual data from your backend
    const [items, setItems] = useState([]);
    const [refresh,setRefresh] = useState(false)
    const handleApprove = async (e, status, eventId) => {
        e.preventDefault();
        const reqBody = { status, _id: eventId };
        try {
            const response = await updateItemStatusApi(reqBody, reqHeader);
            if (response.status == 201) {
                alert(response)
                setRefresh(true)
            }
        } catch (error) {
            console.error("Error updating event status:", error);
        }
    };

    const handleDeny = (itemId) => {
        // Logic to deny the item
        console.log(`Denied item with ID: ${itemId}`);
        setItems(items.map(item =>
            item.id === itemId ? { ...item, status: 'Denied' } : item
        ));
    };
    let reqHeader
    if (localStorage.getItem("token")) {
        reqHeader = {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        }
    }
    const getAllItems = async () => {
        const response = await getAllItemsApi(reqHeader)
        console.log(response)
        setItems(response.data.allItems)
    }
    useEffect(() => {
        getAllItems()
        setRefresh(false)
    }, [refresh])
    return (
        <div>
            <h2 className="mb-4">Manage Items</h2>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Item Name</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                        <tr key={item._id}>
                            <td>{item.name}</td>
                            <td>₨{item.price}</td>
                            <td>{item.status}</td>
                            <td>
                                <Button
                                    value={"approved"}
                                    variant="success"
                                    onClick={(e) => handleApprove(e,e.target.value,item._id)}
                                >
                                    Approve
                                </Button>
                                <Button
                                    value={"rejected"}
                                    variant="danger"
                                    onClick={(e) => handleApprove(e,e.target.value,item._id)}
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
