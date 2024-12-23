import React from 'react';
import { Container, Col, Row } from "react-bootstrap";

import "../App.css"

function Home() {

  return (
    <Container fluid>
      <Row>  
        <Col md={6}>
        <h2 className="title">Juan Jose Sandoval</h2>
          <p className="subtitle"> Studies @ UW-Madison</p>
          <p>3.5 GPA</p>
          <ul>
            <li>Computer Science, BS</li>
            <li>Data Science, BS</li>
            <li>History, CERT</li>
          </ul>

        <h2 className = "subtitle">Skills</h2>
          <p> to be defined</p>
          
        </Col>

        <Col md={6}>
          <img 
            style={{ 
              width: "100%", 
              marginTop : 14
            }}
            src="../../figures/personal_image.png" 
            alt="Image of Juan Jose Sandoval" />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;

