import React from 'react'
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
function Auth({ register }) {
    return (
        <>
            <div style={{ height: "80vh", paddingTop: "6rem", marginBottom: "6rem" }} className='d-flex align-items-center justify-content-center'>
                <Row>
                    <Col md={1}></Col>
                    <Col md={10}>

                        <MDBContainer fluid >

                            <MDBRow className='d-flex justify-content-center align-items-center h-100' >
                                <MDBCol col='12'>

                                    <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', minWidth: '500px' }} >
                                        <MDBCardBody className='p-5 w-100 d-flex flex-column rounded-6' style={{ backgroundColor: "black" }}>

                                            {register ? (<>
                                                <h2 className="fw-bold mb-2 text-center text-light">Register</h2>
                                                

                                                <MDBInput wrapperClass='mb-4 w-100' label='Name' id='formControlLg' type='text' size="lg" labelClass='custom-label' />
                                                <MDBInput wrapperClass='mb-4 w-100' label='Email address' id='formControlLg' type='email' size="lg" labelClass='custom-label' />
                                                <MDBInput wrapperClass='mb-4 w-100' label='Password' id='formControlLg' type='password' size="lg" labelClass='custom-label' />

                                                <MDBBtn size='md' style={{ backgroundColor: "#348017" }}>
                                                    Register
                                                </MDBBtn>

                                                <hr className="my-4 text-white" />
                                                <p className='ms-5 text-light'>Already  have an account? <a href="/login" class="link-info">Login here</a></p>
                                            </>) : (<>
                                                <h2 className="fw-bold mb-2 text-center text-light">Sign in</h2>
                                                <p className="text-white mb-3">Please enter your login and password!</p>

                                                <MDBInput wrapperClass='mb-4 w-100' label='Email address' id='formControlLg' type='email' size="lg" labelClass='custom-label' />
                                                <MDBInput wrapperClass='mb-4 w-100' label='Password' id='formControlLg' type='password' size="lg" labelClass='custom-label' />

                                                <MDBBtn size='lg' style={{ backgroundColor: "#348017" }}>
                                                    Login
                                                </MDBBtn>

                                                <hr className="my-4 text-white" />
                                                <p className='ms-5 text-light'>Don't have an account? <a href="/register" class="link-info">Register here</a></p>
                                            </>)}

                                        </MDBCardBody>
                                    </MDBCard>

                                </MDBCol>
                            </MDBRow>

                        </MDBContainer>


                    </Col>
                    <Col md={1}></Col>
                </Row>
            </div>
        </>
    )
}

export default Auth