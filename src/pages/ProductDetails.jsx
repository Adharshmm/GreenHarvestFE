import React from 'react'
import ProductCard from '../components/ProductCard'
import { Col, Row } from 'react-bootstrap'
import Header from '../components/Header'

function ProductDetails() {
  return (
    <>
    <Header/>
      <div className='row ' style={{ marginTop: "5rem" }}>
        <div className="col-md-4"></div>
        <div className="col-md-4 d-flex align-items-center">
          <input className='form-control' type="text" placeholder='Search By Technology' onChange={(e) => { setSearchKey(e.target.value) }} />
          <i className='fa-solid fa-search fa-lg text-secondary' style={{ marginLeft: '-32px' }}></i>
        </div>
        <div className="col-md-4"></div>
      </div>

      <div className='ps-3' style={{ paddingTop: "3rem" }}>
        <ProductCard />
      </div>

    </>
  )
}

export default ProductDetails