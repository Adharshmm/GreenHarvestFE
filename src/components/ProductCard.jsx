import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
function ProductCard() {
  const vegArray = [
    {
      name: 'Musk Melon',
      price: 200,
      description: 'Refreshing farm-harvested musk melons',
      imageUrl: 'https://cdn.britannica.com/32/137432-050-ECCD5B00/Muskmelons.jpg',
    },
    {
      name: 'Tomato',
      price: 50,
      description: 'Fresh organic tomatoes',
      imageUrl: 'https://media.post.rvohealth.io/wp-content/uploads/2020/09/AN313-Tomatoes-732x549-Thumb-732x549.jpg',
    },
    {
      name: 'Blueberry',
      price: 350,
      description: 'Sweet and juicy blueberries',
      imageUrl: 'https://images-prod.healthline.com/hlcmsresource/images/AN_images/blueberries-1296x728-feature.jpg',
    },
    {
      name: 'Apple',
      price: 150,
      description: 'Crisp, farm-fresh apples',
      imageUrl: 'https://3.bp.blogspot.com/-c0JerguseSM/T6S_65MmAsI/AAAAAAAADGc/GnBNEkHOLQg/s1600/HDHUT.Blogspot.com+%283%29.jpg',
    },
    {
      name: 'Orange',
      price: 120,
      description: 'Zesty and tangy oranges',
      imageUrl: 'https://cdn.britannica.com/24/174524-050-A851D3F2/Oranges.jpg',
    },
    {
      name: 'Grapes',
      price: 180,
      description: 'Juicy farm-picked grapes',
      imageUrl: 'https://media.post.rvohealth.io/wp-content/uploads/2022/05/black-grapes-732x549-thumbnail-732x549.jpg',
    },
  ];
  return (
    <>
      <div className='d-flex justify-content-evenly'>
        <Row className='pe-3'>
          {vegArray && vegArray.length > 0 ? (
            vegArray.map((item, index) => ( 
              <Col xs={6} sm={6} md={4} lg={3} xl={2} key={index} className="mb-4">
                <Card style={{ width: '14rem' }} className="h-100">
                  <Card.Img variant="top" style={{ objectFit: "cover" }} src={item.imageUrl} height={200} />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <p>Price: {item.price}/-</p>
                    <p>{item.description}</p>
                    <Button style={{ backgroundColor: "#348017" }}>Add to Cart</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <p>No items to display</p>
          )}
        </Row>
      </div>
    </>
  )
}

export default ProductCard