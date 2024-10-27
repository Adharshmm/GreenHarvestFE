import React from 'react';
import { Nav } from 'react-bootstrap';

function Sidebar({ setActiveSection }) {
    return (
        <div className="bg-light" style={{ width: '250px', borderRight: '1px solid #ddd', padding: '20px', height: '60vh' }}>
            <h3 className="text-center">Admin Menu</h3>
            <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link 
                    onClick={() => setActiveSection('events')} 
                    style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', padding: '10px', borderRadius: '5px' }} 
                    className="my-2"
                >
                    <i className="fas fa-calendar-alt" style={{ marginRight: '10px' }}></i> Events
                </Nav.Link>
                <Nav.Link 
                    onClick={() => setActiveSection('items')} 
                    style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', padding: '10px', borderRadius: '5px' }} 
                    className="my-2"
                >
                    <i className="fas fa-shopping-cart" style={{ marginRight: '10px' }}></i> Items
                </Nav.Link>
                <Nav.Link 
                    onClick={() => setActiveSection('users')} 
                    style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', padding: '10px', borderRadius: '5px' }} 
                    className="my-2"
                >
                    <i className="fas fa-user-friends" style={{ marginRight: '10px' }}></i> Users
                </Nav.Link>
                <Nav.Link 
                    onClick={() => setActiveSection('farmers')} 
                    style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', padding: '10px', borderRadius: '5px' }} 
                    className="my-2"
                >
                    <i className="fas fa-users" style={{ marginRight: '10px' }}></i> Farmers
                </Nav.Link>
            </Nav>
        </div>
    );
}

export default Sidebar;
