import React from 'react'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <>
      <Navbar className=" navbar ">
        <Container>
          <Navbar.Brand href="#home" className='text-light' >
            <Link style={{ textDecoration: "none" ,color:"white"}} to={"/"}>
              <img
                alt=""
                src="/logo.png"
                width="30"
                height="30"
                style={{ borderRadius: '6px' }}
                className="d-inline-block align-top"
              />{' '}
              Green Harvest
            </Link>
          </Navbar.Brand>
          <button className='btn btn-md mt-2 text-light ' style={{ backgroundColor: "#348017" }}>Signup</button>
        </Container>
      </Navbar>
    </>
  )
}

export default Header