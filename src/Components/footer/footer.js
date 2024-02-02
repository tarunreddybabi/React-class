import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

// Footer component with three and four columns

const Footer = () => {

  return (

    <footer className="bg-dark text-light py-4">

      <Container>

        <Row>

          {/* Three columns */}

          <Col md={4}>

            <h5>Home</h5>

            <p>At Your Service</p>

          </Col>

          <Col md={4}>

            <h5>Shop</h5>

            <p>Enjoy Shopping</p>

          </Col>

          <Col md={4}>

            <h5>About US</h5>

            <p>+91 1234567890</p>

          </Col>
        

        </Row>

      </Container><br/>
     <p style={{textAlign:"center"}}>© 2024 My Website. All rights reserved.</p> 

    </footer>

  );

};

export default Footer;