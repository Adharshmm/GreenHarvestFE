import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/cartSlice';
import { getItemsApi } from '../services/allApi';

function ProductCard() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  const getAllProjectapi = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      const reqHeader = {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`
      };

      try {
        const response = await getItemsApi(reqHeader);
        if (response.status === 200) {
          setProducts(response.data.allItems); // Set products from API response
        } else {
          console.error("Failed to fetch items:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    }
  };

  useEffect(() => {
    getAllProjectapi();
  }, []);

  useEffect(() => {
    console.log(products)
  }, [products])

  return (
    <div className='d-flex justify-content-evenly'>
      <Row className='pe-3'>
        {products && products.length > 0 ? (
          products.map((item, index) => (
            <Col xs={6} sm={6} md={6} lg={4} xl={3} key={index} className="mb-4">
              <Card style={{ width: '14rem' }} className="h-100">
                <Card.Img variant="top" style={{ objectFit: "cover" }} src={item.imageUrl} height={200} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <p>Price: {item.price}/-</p>
                  <p>{item.description}</p>
                  <Button style={{ backgroundColor: "#348017" }} onClick={() => {
                    const reqBody = {
                      productId: item._id,
                      Pname: item.name,
                      price: item.price,
                      imageUrl: item.imageUrl,
                      quantity:1
                    }
                    const token = localStorage.getItem("token")
                    const reqHeader = {
                      "Content-Type": "application/json",
                      'Authorization': `Bearer ${token}`
                    }
                    dispatch(addToCart(reqBody))

                  }}>
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p>No items to display</p>
        )}
      </Row>
    </div>
  );
}

export default ProductCard;
