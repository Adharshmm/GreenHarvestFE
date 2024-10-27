import React, { useEffect, useState } from 'react'
import FarmerDashboard from './FarmerDashboard'
import ConsumerDashboard from './ConsumerDashboard'
import Header from '../components/Header';
import AdminDashboard from '../components/AdminDashboard';

function Dashboard() {
    const [role, setRole] = useState('');

    useEffect(() => {
        const storedRole = sessionStorage.getItem("role");
        setRole(storedRole); // Update the role state
    }, []);
    return (
        <>
            <div>
                <Header />
            </div>
            <div style={{ marginTop: "60px" }}>
                {
                    role === "farmer" ? (
                        <FarmerDashboard />
                    ) : role === "user" ? (
                        <ConsumerDashboard />
                    ) : (
                        <AdminDashboard />
                    )
                }
            </div>
        </>
    )
}

export default Dashboard