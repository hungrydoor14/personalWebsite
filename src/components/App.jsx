import React, { useState, useEffect } from 'react';
import { Container, Col, Row, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';

import Home from './content/Home';
import About from './content/About';
import Projects from './content/Projects';
import Academics from './content/Academics';

import './App.css';

function App() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    // Set the active tab based on the current route
    if (location.pathname === '/about') {
      setActiveTab('about');
    } else if (location.pathname === '/projects') {
      setActiveTab('projects');
    } else if (location.pathname === '/academics') {
      setActiveTab('academics');
    } else {
      setActiveTab('home');
    }
  }, [location]);

  return (
    <div>
      <Row>

      </Row>
      <Row>
        <Col style = {{marginRight : 5}}>
          <Nav variant="tabs" activeKey={activeTab} onSelect={setActiveTab}>
            <Nav.Item>
              <Nav.Link as={Link} to="/" eventKey="home">
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/about" eventKey="about">
                About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/projects" eventKey="projects">
                Projects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/academics" eventKey="academics">
                Academics
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>

      <Row>
        <Col>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/academics" element={<Academics />} />
          </Routes>
        </Col>
      </Row>

      <footer className="footer">
        <Container fluid>
          <Row className="footer-row">

            {/* Left side of the footer */}
            <Col className="footer-left">
              <div className="footer-item">
                <a href="https://www.linkedin.com/in/juanjsandoval/" target="_blank" rel="noopener noreferrer">
                  <button className="footer-button">
                    <img src="./figures/linkedin_icon.png" alt="LinkedIn Icon" className="footer-icon" />
                    <p>LinkedIn</p>
                  </button>
                </a>
              </div>
              <div className="footer-item">
                <a href="https://github.com/hungrydoor14" target="_blank" rel="noopener noreferrer" >
                  <button className="footer-button">
                    <img src="./figures/github_icon.png" alt="GitHub Icon" className="footer-icon" />
                    <p>GitHub</p>
                  </button>
                </a>
              </div>
              <div className="footer-item">
                <a href="mailto:jsandoval6@wisc.edu">
                  <button className="footer-button">
                    <img src="./figures/outlook_icon.png" alt="Email Icon" className="footer-icon" />
                    <p>Email</p>
                  </button>
                </a>
              </div>
            </Col>

            {/* Right side of the footer */}
            <Col className="footer-right">
              <p>&copy; 2024 Juan Jose Sandoval. All Rights Reserved.</p>
            </Col>
          </Row>
        </Container>
      </footer>


    </div>
    
  );
}

export default App;
