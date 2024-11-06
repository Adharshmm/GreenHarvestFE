import React, { useState, useEffect } from 'react';
import { Button, Form, Row, Col, Table, Modal } from 'react-bootstrap';
import OrderManagement from '../components/OrderManagement';
import EditProfile from '../components/EditProfile';
import { useDispatch, useSelector } from 'react-redux';
import { deleteEventApi, getFarmerItems } from '../services/allApi';
import { addItemsByFarmer, deleteItemByFramer, fetchItemsByFarmerId } from '../Redux/itemSlice';
import { addEventByFarmer, getEventsByFarmer } from '../Redux/eventSlice';

function FarmerDashboard() {

  const [refresh, setRefresh] = useState(false);


  // Sample orders, items, and events data (replace with API data)
  const [orders, setOrders] = useState([
    { id: 1, product: 'Organic Apples', quantity: 10, price: '$20', status: 'Pending' },
    { id: 2, product: 'Dairy Milk', quantity: 5, price: '$15', status: 'Delivered' }
  ]);

  const [showAddItemModal, setShowAddItemModal] = useState(false);
  const [showAddEventModal, setShowAddEventModal] = useState(false);


  // Fetch farmer profile when the component mounts (replace with API call)
  useEffect(() => {
    const farmerProfile = {
      name: 'Farmer John',
      email: 'farmerjohn@gmail.com',
      address: '456 Farm Road, Countryside'
    };

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

  const deleteOrder = (e, id) => {
    e.preventDefault();
    dispatch(deleteItemByFramer({ id, reqHeader }))
    setRefresh(true)
  };



  /* Add items functions */
  const [errors, setErrors] = useState({});
  const validate = () => {
    const newErrors = {};
    if (!newItem.name.trim()) newErrors.name = "Name is required.";
    if (!newItem.description.trim()) newErrors.description = "Description is required.";
    if (!newItem.price) newErrors.price = "Price is required.";
    else if (isNaN(newItem.price) || Number(newItem.price) <= 0) newErrors.price = "Enter a valid price.";
    if (!newItem.imageUrl.trim()) newErrors.imageUrl = "Image URL is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const [newItem, setNewItem] = useState({
    name: "",
    description: "",
    price: "",
    imageUrl: "",
  })
  const reqBody = newItem
  const addItem = async (e) => {

    e.preventDefault();
    if (!validate()) {
      return;
    }
    const response = dispatch(addItemsByFarmer({ reqBody, reqHeader }, {}))
    setRefresh(true)
    setNewItem({
      name: "",
      description: "",
      price: "",
      imageUrl: ""
    })
    setShowAddItemModal(false)

  };




  /* Items api redux thunk */
  const dispatch = useDispatch();
  const item = useSelector((state) => state.itemsReducer.items);
  const events = useSelector((state) => state.eventsReducer.events)
  console.log(item)
  console.log("events======", events)
  const token = localStorage.getItem("token")
  let reqHeader
  if (token) {
    reqHeader = {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${token}`
    }
  }
  useEffect(() => {
    fetchItems();
    fetchEvents();
    setRefresh(false)
  }, [refresh]);

  const fetchItems = async () => {
    try {
      dispatch(fetchItemsByFarmerId(reqHeader))
    } catch (error) {
      console.error('Failed to fetch items:', error);
    }
  };

  const handleClose = (e) => {
    e.preventDefault();
    setShowAddItemModal(false)
    setShowAddEventModal(false)
    setErrors({})
    setNewItem({
      name: "",
      description: "",
      price: "",
      imageUrl: ""
    })
    setNewEvent({
      title: "",
      description: "",
      date: "",
      location: ""
    })
  }


  // Add, Update, and Delete items and events
  const [newEvent, setNewEvent] = useState({
    title: "",
    description: "",
    date: "",
    location: ""
  });
  const addEvent = () => {
    const newErrors = {};
    if (!newEvent.title.trim()) newErrors.title = "Title is required";
    if (!newEvent.description.trim()) newErrors.description = "Description is required";
    if (!newEvent.date) newErrors.date = "Date is required";
    if (!newEvent.location.trim()) newErrors.location = "Location is required";

    // If there are errors, set the errors state and return early
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    } else {
      setErrors({});
    }
    const reqBody = newEvent
    const response = dispatch(addEventByFarmer({ reqBody, reqHeader }))
    setShowAddEventModal(false)
    setRefresh(true)
  };

  const fetchEvents = async () => {
    try {
      dispatch(getEventsByFarmer({ reqHeader }))
    } catch (error) {
      console.error('Failed to fetch items:', error);
    }
  }

  const deleteEvent = async (e, id) => {
    e.preventDefault()
    try {

      const response = await deleteEventApi(id, reqHeader)
      if (response.status === 200) {
        alert("Item deleted")
        setRefresh(true)
      }
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className="p-4">
      <h2 className="mb-4">Farmer Dashboard</h2>

      {/* Edit Profile Section */}
      <EditProfile />
      {/* Orders Section */}
      <OrderManagement />



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
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {item.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.status}</td>
                  <td>
                    <Button variant="danger" onClick={(e) => deleteOrder(e, item._id)}>
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
              />{errors.name && <span className='text-danger'>{errors.name}</span>}
            </Form.Group>

            <Form.Group controlId="itemPrice" className="mb-3">
              <Form.Label>Item Price</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter item price"
                value={newItem.price}
                onChange={e => setNewItem({ ...newItem, price: e.target.value })}
              />{errors.price && <span className='text-danger'>{errors.price}</span>}
            </Form.Group>
            <Form.Group controlId="ImageUrl" className="mb-3">
              <Form.Label>Image Url</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Image Url"
                value={newItem.imageUrl}
                onChange={e => setNewItem({ ...newItem, imageUrl: e.target.value })}
              />{errors.imageUrl && <span className='text-danger'>{errors.imageUrl}</span>}
            </Form.Group>
            <label htmlFor="text-area">Description</label>
            <textarea className='form-control' name="text-area" id="text-area" onChange={e => setNewItem({ ...newItem, description: e.target.value })}></textarea>
            {errors.description && <span className='text-danger'>{errors.description}</span>}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button cla variant="secondary" onClick={(e) => handleClose(e)}>
            Close
          </Button>
          <Button variant="primary" onClick={(e) => addItem(e)}>
            Add Item
          </Button>
        </Modal.Footer>
      </Modal>



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
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {events.length > 0 ? events.map((event, index) => (
                <tr key={event._id}>
                  <td>{index + 1}</td>
                  <td>{event.title}</td>
                  <td>{event.date}</td>
                  <td>{event.status}</td>
                  <td>
                    <Button variant="danger" onClick={(e) => deleteEvent(e, event._id)}>
                      Delete
                    </Button>
                  </td>
                </tr>
              )) : <tr><td>No events added</td></tr>}
            </tbody>
          </Table>
        </Col>
      </Row>
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
                onChange={e => setNewEvent({ ...newEvent, title: e.target.value })}
              />
              {errors.title && <small className="text-danger">{errors.title}</small>}
            </Form.Group>

            <Form.Group controlId="eventDate" className="mb-3">
              <Form.Label>Event Date</Form.Label>
              <Form.Control
                type="date"
                value={newEvent.date}
                onChange={e => setNewEvent({ ...newEvent, date: e.target.value })}
              />
              {errors.date && <small className="text-danger">{errors.date}</small>}
            </Form.Group>
            <Form.Group controlId="eventLocation" className="mb-3">
              <Form.Label>Event Location</Form.Label>
              <Form.Control
                type="text"
                value={newEvent.location}
                onChange={e => setNewEvent({ ...newEvent, location: e.target.value })}
              />
              {errors.location && <small className="text-danger">{errors.location}</small>}
            </Form.Group>
            <Form.Group controlId="eventDescription" className="mb-3">
              <label htmlFor="descrip">Description</label>
              <textarea className='form-control' name="descrip" id="descrip" onChange={e => setNewEvent({ ...newEvent, description: e.target.value })}></textarea>
              {errors.description && <small className="text-danger">{errors.description}</small>}
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={(e) => handleClose(e)}>
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
