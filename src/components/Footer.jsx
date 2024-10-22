import React from 'react'
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap'

function Footer() {
  return (
    <>
      <div className='bg-black pt-3 pb-3'>
        <Row>
          <Col md={1}></Col>
          <Col md={11}>
            <div className='row text-white'>

              <div className='col-md-5'><h2 className='text-white fs-1' style={{ width: '460px' }}>Connecting local farms to families</h2>
                <div className='d-flex'>
                  <div className='me-3'>
                    <input type="email" className='form-control' placeholder='enter your email' />
                  </div>
                  <div>
                    
                    <Button variant="light" className='fw-bold'>Join our community</Button>{' '}
                  </div>
                </div>
              </div>
              <div className='col-md-1 '>
                <h4>Pages</h4>
                <p>Products</p>
                <p>Events</p>
                <p>Dashboard</p>
              </div>
              <div className='col-md-1 '>
                <h4>About</h4>
                <p>Learn More</p>
                <p>Our Team</p>
                <p>Careers</p>
              </div>
              <div className='col-md-1'>
                <h4>Legal</h4>
                <p>Terms</p>
                <p>Privacy</p>
                <p>Careers</p>
              </div>
              <div className='col-md-2'>
                <h4>Get in touch</h4>
                <div>
                  <p> <img
                    alt=""
                    src="../public/logo.png"
                    width="30"
                    height="30"
                    style={{ borderRadius: '6px' }}
                    className="d-inline-block align-top"
                  />{' '}greenharvest@gmail.com</p>
                  <div className='d-flex justify-content-between'>
                    <i className="fa-brands fa-instagram fa-2x"></i>
                    <i className="fa-brands fa-facebook fa-2x"></i>
                    <i className="fa-brands fa-square-x-twitter fa-2x"></i>
                    <i className="fa-brands fa-reddit fa-2x"></i>
                  </div>
                </div>
              </div>
              <hr className='text-light' />
            </div>

          </Col>
       
        </Row>
        <div className='text-center'>
          <p className='text-light'>©️2024 green harvest,inc.All rights reserved</p>
        </div>
      </div>
    </>
  )
}

export default Footer