import React , { useEffect, useState }from 'react';
import { Modal, Button, Form } from 'react-bootstrap';


const AddBookModal = ({show, handleClose , warehouseId}) => {
  const [warehouseloc, setWarehouse] = useState([]);
  const [formData, setFormData] = useState({
    isbn: '',
    title: '',
    author: '',
    description: '',
    quantity: '' ,
    
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    
    fetch(`http://localhost:8080/warehouse/${warehouseId}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log("I am editing data");
          setWarehouse(data);
        });
        formData.warehouse = warehouseloc;
    const response = await fetch('localhost:8080/book', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      console.log('Book added successfully');
      // Optionally clear the form or provide user feedback
    } else {
      console.error('Failed to add book');
      // Handle server errors or response issues
    }
  } catch (error) {
    console.error('Error:', error);
    // Handle network errors
  }
};


  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add a Book</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}> 
          <Form.Group controlId="formISBN" className="mb-3">
            <Form.Label>ISBN</Form.Label>
            <Form.Control required type="text" placeholder="Enter ISBN"onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="formTitle" className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control required type="text" placeholder="Enter title" onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="formAuthor" className="mb-3">
            <Form.Label>Author</Form.Label>
            <Form.Control required type="text" placeholder="Enter author" onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="formDescription" className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Enter description" onChange={handleChange}/>
          </Form.Group>
          <Form.Group controlId="formQuantity" className="mb-3">
            <Form.Label>Quantity</Form.Label>
            <Form.Control required type="number" placeholder="Enter quantity"onChange={handleChange} />
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
