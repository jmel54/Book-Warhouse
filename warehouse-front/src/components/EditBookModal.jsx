import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const EditBookModal = ({ show, handleClose, isbn,title,author,description,quantity }) => {

  const [bookData, setBookData] = useState({
    isbn: isbn,
    title:title,
    author:author,
    description:description,
    quantity: quantity
  });
    
      // console.log("===DEBUG==\n======================");
      // console.log('show = ', show);
      // console.log('handleClose = ',handleClose);
      // console.log('isbn = ',isbn);

      const [formData, setFormData] = useState(bookData);

      useEffect(() => {
        setFormData(bookData);
      }, [bookData]);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    const Fetch = () => {
      const [warehouseloc, setWarehouse] = useState([]);
      useEffect(() => {
        fetch('https://localhost:8080/warehouse/1')
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log("I am editing data");
            setWarehouse(data);
          });
      }, []);}
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch(`localhost:8080/book/${formData.isbn}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
          if (response.ok) {
            console.log('Book updated successfully');
            handleClose(); // Close the modal on success
            // Handle successful response
          } else {
            console.error('Failed to update book');
            // Handle error response
          }
        } catch (error) {
          console.error('Error:', error);
          // Handle network error
        }
      };
    
      return (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update Book</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  disabled
                />
              </Form.Group>
              <Form.Group controlId="formAuthor">
                <Form.Label>Author</Form.Label>
                <Form.Control
                  type="text"
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                  disabled
                />
              </Form.Group>
              <Form.Group controlId="formISBN">
                <Form.Label>ISBN</Form.Label>
                <Form.Control
                  type="text"
                  name="isbn"
                  value={formData.isbn}
                  onChange={handleChange}
                  disabled
                />
              </Form.Group>
              <Form.Group controlId="formDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  name="descr"
                  value={formData.descr}
                  onChange={handleChange}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Update Book
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      );
    };
    
    
    export default EditBookModal;