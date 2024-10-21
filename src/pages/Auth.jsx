import React, { useState } from 'react'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'; // MDB styles
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Auth({ register }) {

    const [role, setRole] = useState('user'); // Toggle between 'user' and 'farmer'
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        farmName: '',
        farmLocation: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = () => {
        const formPayload = {
            ...formData,
            role
        };
        // API call to handle registration or login
        console.log(formPayload);
    };

    return (
        <div style={{ height: "80vh", paddingTop: "6rem", marginBottom: "8rem", marginTop: "2rem" }} className='d-flex align-items-center justify-content-center'>
            <Row>
                <Link className='text-dark rounded p-2' style={{cursor:"pointer",textDecoration:"none",border:"1px solid black",width:"18%"}} to={'/'}> <i className='fa-solid fa-arrow-left'></i> Back Home</Link>
                <Col md={1}></Col>
                <Col md={10}>
                    <MDBContainer fluid>
                        <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                            <MDBCol col='12'>
                                <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', minWidth: '500px' }}>
                                    <MDBCardBody className='p-5 w-100 d-flex flex-column rounded-6' style={{ backgroundColor: "black" }}>
                                        {register ? (
                                            <>
                                                <h2 className="fw-bold mb-2 text-center text-light">Register as {role === 'user' ? 'User' : 'Farmer'}</h2>

                                                {/* Switch between User and Farmer */}
                                                <div className="d-flex justify-content-around mb-4">
                                                    <button className={`btn ${role === 'user' ? 'btn-success' : 'btn-outline-success'}`} onClick={() => setRole('user')}>
                                                        User
                                                    </button>
                                                    <button className={`btn ${role === 'farmer' ? 'btn-success' : 'btn-outline-success'}`} onClick={() => setRole('farmer')}>
                                                        Farmer
                                                    </button>
                                                </div>

                                                <MDBInput
                                                    wrapperClass='mb-4 w-100'
                                                    label='Name'
                                                    name='name'
                                                    id='nameInput'
                                                    type='text'
                                                    size="lg"
                                                    labelClass='custom-label'
                                                    onChange={handleChange}
                                                    style={{ color: "white" }}
                                                />
                                                <MDBInput
                                                    wrapperClass='mb-4 w-100'
                                                    label='Email address'
                                                    name='email'
                                                    id='emailInput'
                                                    type='email'
                                                    size="lg"
                                                    labelClass='custom-label'
                                                    onChange={handleChange}
                                                    style={{ color: "white" }}
                                                />
                                                <MDBInput
                                                    wrapperClass='mb-4 w-100'
                                                    label='Password'
                                                    name='password'
                                                    id='passwordInput'
                                                    type='password'
                                                    size="lg"
                                                    labelClass='custom-label'
                                                    onChange={handleChange}
                                                    style={{ color: "white" }}
                                                />

                                                {/* Additional fields for Farmer */}
                                                {role === 'farmer' && (
                                                    <>
                                                        <MDBInput
                                                            wrapperClass='mb-4 w-100'
                                                            label='Farm Name'
                                                            name='farmName'
                                                            id='farmNameInput'
                                                            type='text'
                                                            size="lg"
                                                            labelClass='custom-label'
                                                            onChange={handleChange}
                                                            style={{ color: "white" }}
                                                        />
                                                        <MDBInput
                                                            wrapperClass='mb-4 w-100'
                                                            label='Farm Location'
                                                            name='farmLocation'
                                                            id='farmLocationInput'
                                                            type='text'
                                                            size="lg"
                                                            labelClass='custom-label'
                                                            onChange={handleChange}
                                                            style={{ color: "white" }}
                                                        />
                                                    </>
                                                )}

                                                <MDBBtn size='lg' style={{ backgroundColor: "#348017" }} onClick={handleSubmit}>
                                                    Register
                                                </MDBBtn>

                                                <hr className="my-4 text-white" />
                                                <p className='ms-5 text-light'>Already have an account? <Link to={'/login'}>Login here</Link> </p>
                                            </>
                                        ) : (
                                            <>
                                                <h2 className="fw-bold mb-2 text-center text-light">Sign in</h2>


                                                <MDBInput
                                                    wrapperClass='mb-4 w-100'
                                                    label='Email address'
                                                    name='email'
                                                    id='loginEmailInput'
                                                    type='email'
                                                    size="lg"
                                                    labelClass='custom-label'
                                                    onChange={handleChange}
                                                    style={{ color: "white" }}
                                                />
                                                <MDBInput
                                                    wrapperClass='mb-4 w-100'
                                                    label='Password'
                                                    name='password'
                                                    id='loginPasswordInput'
                                                    type='password'
                                                    size="lg"
                                                    labelClass='custom-label'
                                                    onChange={handleChange}
                                                    style={{ color: "white" }}
                                                />

                                                <MDBBtn size='lg' style={{ backgroundColor: "#348017" }} onClick={handleSubmit}>
                                                    Login
                                                </MDBBtn>

                                                <hr className="my-4 text-white" />
                                                <p className='ms-5 text-light'>Don't have an account? <Link to={'/register'}>Register here</Link></p>
                                            </>
                                        )}
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </Col>
                <Col md={1}></Col>
            </Row>
        </div>
    );
};


export default Auth