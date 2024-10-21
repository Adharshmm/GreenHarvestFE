import { MDBBtn } from 'mdb-react-ui-kit'
import React, { useEffect, useState } from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Home() {
    /* Number animaton counter */
    const [happyUsers, setHappyUsers] = useState(0);
    const [localVendors, setLocalVendors] = useState(0);
    const [communities, setCommunities] = useState(0);

    const targetUsers = 3000;
    const targetVendors = 500;
    const targetCommunities = 100;

    useEffect(() => {
        // Animation for happy users
        const userInterval = setInterval(() => {
            setHappyUsers(prev => {
                const nextCount = prev + Math.ceil(targetUsers / 100);
                return nextCount < targetUsers ? nextCount : targetUsers;
            });
        }, 40); // Adjust duration for speed

        // Animation for local vendors
        const vendorInterval = setInterval(() => {
            setLocalVendors(prev => {
                const nextCount = prev + Math.ceil(targetVendors / 100);
                return nextCount < targetVendors ? nextCount : targetVendors;
            });
        }, 40);

        // Animation for communities
        const communityInterval = setInterval(() => {
            setCommunities(prev => {
                const nextCount = prev + Math.ceil(targetCommunities / 100);
                return nextCount < targetCommunities ? nextCount : targetCommunities;
            });
        }, 40);

        // Cleanup intervals on unmount
        return () => {
            clearInterval(userInterval);
            clearInterval(vendorInterval);
            clearInterval(communityInterval);
        };
    }, []);
    return (
        <>
            <div
                style={{
                    position: 'relative',
                    height: '80vh',
                    overflow: 'hidden',
                    color: 'white',
                    paddingTop: "6rem",
                    marginBottom: "8px"
                }}
            >
                <video
                    autoPlay
                    loop
                    muted
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        minWidth: '100%',
                        minHeight: '100%',
                        width: 'auto',
                        height: 'auto',
                        transform: 'translate(-50%, -50%)',
                        zIndex: -1,
                    }}
                >
                    <source
                        src="public/background.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
                <div
                    style={{
                        position: 'relative',
                        zIndex: 0,
                    }}
                >
                    <Row>
                        <Col md={2} ></Col>
                        <Col md={8} >
                            <div className='d-flex flex-column align-items-center'>

                                <h1 className='text-dark text-center  mt-5 MainQuote ' style={{ fontSize: "4rem" }}>
                                    Connect Locally With Organic Producers In Your Community
                                </h1>
                                <Link to={"/login"} style={{ textDecoration: "none", color: "black" }}>
                                    <MDBBtn className='btn-lg' outline rounded color='black'>
                                        Login
                                    </MDBBtn>
                                </Link>
                            </div>
                        </Col>
                        <Col md={2} ></Col>
                    </Row>


                </div>
            </div>

            <div>
                <div className='pt-5 pb-5'>
                    <Row>
                        <Col md={2} >
                        </Col>
                        <Col md={8} >
                            <Row>
                                <Col md={6} className='learnmorebtn'>
                                    <h2>
                                        Connecting local farmers and shoppers seeking organic produce
                                    </h2>
                                </Col>
                                <Col className='learnmorebtn' md={6}>
                                    <p>The GreenHarvest app offers a marketplace connecting consumers directly with local organic farmers. Shop for fresh, seasonal produce while supporting sustainable agriculture in your community.</p>
                                    <Link to={'/about'}><button className='btn btn-lg mt-2 text-light ' style={{ backgroundColor: "#348017" }}>Learn more</button></Link>
                                </Col>
                            </Row>
                            <div style={{ backgroundColor: "#348017" }} className='rounded text-light p-4 mt-3'>
                                <div className=' text-center d-flex align-items-center justify-content-around'>
                                    <h4><p>{happyUsers}</p>Happy users</h4>
                                    <svg height={100} width={2}>
                                        <line x1="0" y1="0" x2="0" y2="100" style={{ stroke: "white", strokeWidth: '2' }} />
                                    </svg>
                                    <h4><p>{localVendors}</p>Local vendors</h4>
                                    <svg height={100} width={2}>
                                        <line x1="0" y1="0" x2="0" y2="100" style={{ stroke: "white", strokeWidth: '2' }} />
                                    </svg>
                                    <h4><p>{communities}</p>Communities</h4>
                                </div>
                            </div>
                        </Col>
                        <Col md={2} >
                        </Col>
                    </Row>


                </div>
            </div>
            <div className='pt-5 pb-5' style={{ backgroundColor: "#348017" }} height={40}>
                <Row>
                    <Col md={2}></Col>
                    <Col md={8}>
                        <div className='row'>
                            <div className='col-md-6'>
                                <h1 className='text-light'>Organic Marketplace</h1>
                            </div>
                            <div className='col-md-6'>
                                <p className='text-light'>GreenHarvest allows farmers to easily list their fresh organic produce for sale and manage orders.</p>

                               <Link to={'/register'}> <button className='btn btn-light fw-bold text-dark'>Sell Products</button></Link>
                            </div>
                        </div>

                        <hr className='text-light' />

                        <div className='row'>
                            <div className='col-md-6 learnmorebtn'>
                                <h1 className='text-light'>Browse Selection</h1>
                                <img src="https://cdn.britannica.com/32/137432-050-ECCD5B00/Muskmelons.jpg" alt="" style={{ height: "16rem", width: "22rem", borderRadius: "10px", objectFit: "cover" }} />

                            </div>

                            <div className='col-md-6 learnmorebtn'>
                                <p className='text-light'>Consumers can browse listings by product, farm location, and season to find the perfect local organic items.</p>
                                <Link to={'/products'}><button className='btn btn-light fw-bold text-dark'>Buy Produce</button></Link>
                            </div>
                        </div>

                        <hr className='text-light' />

                        <div className='row'>
                            <div className='col-md-6 learnmorebtn'>
                                <h1 className='text-light'>Events</h1>
                                <img src="https://www.leppfarmmarket.com/wp-content/uploads/2023/03/IMG_9349.jpg" alt="" style={{ height: "16rem", width: "22rem", borderRadius: "10px", objectFit: "cover" }} />

                            </div>

                            <div className='col-md-6 learnmorebtn'>
                                <p className='text-light'>Consumers can browse listings of events conducted by farmers or group of them in your locality </p>
                                <Link to={'/events'}>
                                    <button className='btn btn-light fw-bold text-dark'>See events</button>
                                </Link>
                            </div>
                        </div>

                    </Col>
                    <Col md={2}></Col>
                </Row>
            </div>
        </>
    )
}

export default Home