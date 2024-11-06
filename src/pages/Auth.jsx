import React, { useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput } from 'mdb-react-ui-kit';
import { Col, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { loginApi, registerApi } from '../services/allApi';

function Auth({ register }) {
    const [role, setRole] = useState('user');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        address: ''
    });
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const validateForm = () => {
        if (register && !formData.name.trim()) {
            return "Name is required.";
        }
        if (!formData.email.trim()) {
            return "Email is required.";
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            return "Enter a valid email address.";
        }
        if (!formData.password) {
            return "Password is required.";
        }
        if (formData.password.length < 6) {
            return "Password must be at least 6 characters long.";
        }
        if (register && !formData.address.trim()) {
            return "Address is required.";
        }
        return null;
    };

    const handleSubmit = async () => {
        setError(null);
        const validationError = validateForm();
        if (validationError) {
            setError(validationError);
            return;
        }

        const formPayload = { ...formData, role };

        try {
            if (register) {
                const response = await registerApi(formPayload);
                if (response.status === 201) {
                    alert("Registration successful");
                    navigate('/login');
                } else {
                    setError(response.data);
                }
            } else {
                const loginPayload = {
                    email: formData.email,
                    password: formData.password
                };
                const response = await loginApi(loginPayload);
                if (response.status === 200) {
                    const { token, role, id } = response.data;
                    localStorage.setItem("token", token);
                    localStorage.setItem("role", role);
                    localStorage.setItem("id", id);
                    alert("Login successful");
                    navigate('/');
                } else {
                    setError(response.data.message);
                }
            }
        } catch (error) {
            console.error("Error during form submission:", error);
            setError("An error occurred. Please try again.");
        }
    };

    return (
        <div style={{ height: "80vh", paddingTop: "6rem", marginBottom: "8rem", marginTop: "2rem" }} className='d-flex align-items-center justify-content-center'>
            <Row>
                <Link className='text-dark rounded p-2' style={{ cursor: "pointer", textDecoration: "none", border: "1px solid black", width: "18%" }} to={'/'}> <i className='fa-solid fa-arrow-left'></i> Back Home</Link>
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

                                                <div className="d-flex justify-content-around mb-4">
                                                    <button className={`btn ${role === 'user' ? 'btn-success' : 'btn-outline-success'}`} onClick={() => setRole("user")}>
                                                        User
                                                    </button>
                                                    <button className={`btn ${role === 'farmer' ? 'btn-success' : 'btn-outline-success'}`} onClick={() => setRole("farmer")}>
                                                        Farmer
                                                    </button>
                                                </div>

                                                {role === 'farmer' ? <MDBInput
                                                    wrapperClass='mb-4 w-100'
                                                    label='FarmerName'
                                                    name='name'
                                                    id='nameInput'
                                                    type='text'
                                                    size="lg"
                                                    labelClass='custom-label'
                                                    onChange={handleChange}
                                                    style={{ color: "white" }}
                                                /> : <MDBInput
                                                    wrapperClass='mb-4 w-100'
                                                    label='Name'
                                                    name='name'
                                                    id='nameInput'
                                                    type='text'
                                                    size="lg"
                                                    labelClass='custom-label'
                                                    onChange={handleChange}
                                                    style={{ color: "white" }}
                                                />}
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
                                                <MDBInput
                                                    wrapperClass='mb-4 w-100'
                                                    label='Location'
                                                    name='address'
                                                    id='addressInput'
                                                    type='text'
                                                    size="lg"
                                                    labelClass='custom-label'
                                                    onChange={handleChange}
                                                    style={{ color: "white" }}
                                                />


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

                                        {error && <p className="text-danger text-center mt-3">{error}</p>}
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
}

export default Auth;
