import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';


const AddBookModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add a Book</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formISBN" className="mb-3">
            <Form.Label>ISBN</Form.Label>
            <Form.Control required type="text" placeholder="Enter ISBN" />
          </Form.Group>
          <Form.Group controlId="formTitle" className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control required type="text" placeholder="Enter title" />
          </Form.Group>
          <Form.Group controlId="formAuthor" className="mb-3">
            <Form.Label>Author</Form.Label>
            <Form.Control required type="text" placeholder="Enter author" />
          </Form.Group>
          <Form.Group controlId="formDescription" className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Enter description" />
          </Form.Group>
          <Form.Group controlId="formQuantity" className="mb-3">
            <Form.Label>Quantity</Form.Label>
            <Form.Control required type="number" placeholder="Enter quantity" />
          </Form.Group>
          <Button variant="secondary" onClick={handleClose}>Cancel&nbsp;</Button>
          <Button variant="primary" type="submit">Submit</Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>

      </Modal.Footer>
    </Modal>
  );
};

export default AddBookModal;
