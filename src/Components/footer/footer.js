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

            <h5>Column 1</h5>

            <p>Content for the first column.</p>

          </Col>

          <Col md={4}>

            <h5>Column 2</h5>

            <p>Content for the second column.</p>

          </Col>

          <Col md={4}>

            <h5>Column 3</h5>

            <p>Content for the third column.</p>

          </Col>

          {/* Four columns */}

          <Col md={3}>

            <h5>Column 1</h5>

            <p>Content for the first column.</p>

          </Col>

          <Col md={3}>

            <h5>Column 2</h5>

            <p>Content for the second column.</p>

          </Col>

          <Col md={3}>

            <h5>Column 3</h5>

            <p>Content for the third column.</p>

          </Col>

          <Col md={3}>

            <h5>Column 4</h5>

            <p>Content for the fourth column.</p>

          </Col>

        </Row>

      </Container>
      © 2023 My Website. All rights reserved.

    </footer>

  );

};

export default Footer;