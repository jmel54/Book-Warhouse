import React, { useState } from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import AddBookModal from './BookModal';

const MainPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <Container>
      <header className="d-flex justify-content-between align-items-center py-3">
        <button className="btn btn-outline-secondary">Sign out</button>
        <div>
          <h2>Company Name</h2>
          <p>Location</p>
        </div>
        <div>
          <p>Current user: <strong>Username</strong></p>
        </div>
      </header>

      <main className="text-center my-4">
        <h3>Current warehouse name</h3>
        <p>Current capacity</p>
        <ProgressBar now={60} label={`${60}%`} className="my-3" />

        <Row className="justify-content-center my-3">
          <Col xs="auto">
            <button className="btn btn-outline-primary mx-2">←</button>
          </Col>
          <Col xs="auto">
            <button className="btn btn-outline-primary mx-2">→</button>
          </Col>
        </Row>

        <button className="btn btn-success" onClick={handleShow}>Add</button>
      </main>

      <AddBookModal show={showModal} handleClose={handleClose} />
    </Container>
  );
};

export default MainPage;
