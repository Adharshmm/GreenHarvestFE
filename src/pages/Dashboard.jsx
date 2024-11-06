import React, { useEffect, useState } from 'react'
import FarmerDashboard from './FarmerDashboard'
import ConsumerDashboard from './ConsumerDashboard'
import Header from '../components/Header';
import AdminDashboard from '../components/AdminDashboard';
import { Link } from 'react-router-dom';

function Dashboard() {
    const [role, setRole] = useState('');

    useEffect(() => {
        const storedRole = localStorage.getItem("role");
        setRole(storedRole); // Update the role state
    }, []);
    return (
        <>
            <div>
                <Header />
            </div>
            <div >
                {
                    role === "admin" ? (
                        <AdminDashboard />
                    ) : role === "user" ? (
                        <ConsumerDashboard />
                    ) : role === "farmer"? (
                        <FarmerDashboard />
                    ):<div className='h-60' style={{height:"600px"}}>Please <Link to={'/login'}>Login</Link></div>
                }
            </div>
        </>
    )
}

export default Dashboard