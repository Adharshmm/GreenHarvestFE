
import React, { useState } from 'react';

import Events from './adminBoardComponents/Events';
import Items from './adminBoardComponents/Items';
import Users from './adminBoardComponents/Users';
import Farmers from './adminBoardComponents/Farmers';
import Sidebar from './adminBoardComponents/Sidebar';



const AdminDashboard = () => {
    const [activeSection, setActiveSection] = useState('events');

    const renderContent = () => {
        switch (activeSection) {
            case 'events':
                return <Events />;
            case 'items':
                return <Items />;
            case 'users':
                return <Users />;
            case 'farmers':
                return <Farmers />;
            default:
                return <Events/>;
        }
    };
    return (
        <>


            <div style={{ display: 'flex',height:"100vh" }}>
                <Sidebar setActiveSection={setActiveSection} />
                <div style={{ marginLeft: '20px', flex: 1 }}>
                    {renderContent()}
                </div>
            </div>
        </>
    )
};

export default AdminDashboard