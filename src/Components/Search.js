// src/components/Search.js

import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Carousel from "../Layout/carouselSlide";
import "../css/search.css";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your search logic here
    console.log("Searching for:", searchTerm);
  };

  return (
    <div className="search-container">
    <Carousel />
      <Container fluid className="search-overlay">
      <Row className="row-div">
  <Col xs={12} md={8} lg={6} className="mx-auto">
    <Form onSubmit={handleSubmit} className="search-form">
      <Form.Group className="mb-3 position-relative search-group">
        <Form.Control
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pr-5 search-input custom-placeholder"
        />
        <FontAwesomeIcon icon={faPaperPlane} className="search-icon" />
      </Form.Group>
    </Form>
  </Col>
</Row>

      </Container>
    </div>
  );
};

export default Search;