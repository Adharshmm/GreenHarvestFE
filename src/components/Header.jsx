import React from 'react'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet } from 'react-router-dom';
function Header() {
  return (
    <>
      <Navbar className=" navbar ">
        <Container>
          <Navbar.Brand href="#home" className='text-light' >
            <Link style={{ textDecoration: "none", color: "white" }} to={"/"}>
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
          <Link to={'/cart'} style={{textDecoration:"none"}}>
            <button className='btn btn-outline-light mt-2'><i class="fa-solid fa-cart-shopping"></i> Cart</button>
          </Link>
        </Container>
        <Link to={'/dashboard'} style={{ textDecoration: "none" }}>
          <button className='btn  btn-outline-light mt-2  me-2'>Dashboard</button>
        </Link>
        <button className='btn btn-md mt-2 text-light me-2 ' style={{ backgroundColor: "#348017" }}>Logout</button>
      </Navbar>
      <div>
        <Outlet />
      </div>
    </>
  )
}

export default Header