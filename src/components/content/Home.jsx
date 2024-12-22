import React from 'react';
import { Container, Col, Row } from "react-bootstrap";

import "../App.css"

function Home() {
  const margin_amount = 14

  return (
    <Container fluid>
      <Row>
        <Col>
          <p className="title">Juan Jose Sandoval</p>
          <p className="subtitle"> Studies @ UW-Madison</p>
          <p>3.5 GPA</p>
          <ul>
            <li>Computer Science, BS</li>
            <li>Data Science, BS</li>
            <li>History, CERT</li>
          </ul>
          
        </Col>

        <Col>
          <img 
            style={{ 
              marginTop: margin_amount,
              width: "100%", 
              height: "100%",  
            }}
            src="../../figures/personal_image.png" 
            alt="Image of Juan Jose Sandoval" />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;

