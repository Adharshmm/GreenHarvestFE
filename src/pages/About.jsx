import { Container, Row, Col } from 'react-bootstrap';

import React from 'react'

function About() {
    return (
        <>
            <Container className="about-page " style={{ paddingTop: "4rem" }}>
                <Row>
                    <Col>
                        <h1>About Us</h1>
                        <p>
                            Welcome to <strong>Green Harvest</strong>, your trusted platform for connecting farmers and consumers. Our mission is to create a direct link that benefits both communities, ensuring that consumers receive fresh, locally grown products while empowering farmers to expand their reach and grow their business.
                        </p>

                        <h3>Our Mission</h3>
                        <p>
                            Our goal is to foster a sustainable, transparent, and efficient agricultural ecosystem. Through our platform, farmers can easily showcase their produce, manage orders, and connect directly with local consumers—eliminating middlemen and encouraging a community-driven economy.
                        </p>

                        <h3>What We Offer</h3>
                        <ul>
                            <li>Access to a diverse range of fresh, locally sourced products</li>
                            <li>A platform for farmers to promote their products and events</li>
                            <li>Options for consumers to stay updated with the latest agricultural events</li>
                            <li>Event registration for farmers to host workshops and community events</li>
                        </ul>

                        <h3>Why Choose Us?</h3>
                        <p>
                            We believe in the power of community and sustainability. Supporting local farmers through <strong>Green Harvest</strong> means not only getting the freshest produce but also making a meaningful impact on the environment and the local economy.
                        </p>

                        <p>
                            Whether you're a farmer seeking new customers or a consumer looking for fresh, healthy produce, <strong>Green Harvest</strong> is here to make that connection seamless.
                        </p>
                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default About
