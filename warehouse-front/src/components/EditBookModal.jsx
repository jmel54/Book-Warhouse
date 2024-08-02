import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const UpdateBookForm = ({ show, handleClose, isbn }) => {

  const [bookData, setBookData] = useState({
    title: '',
    author: '',
    isbn: '',
    descr: '',
  });

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetch(`/book/${isbn}`);
        const data = await response.json();
        setBookData(data);
      } catch (error) {
        console.error('Error fetching book data:', error);
      }
    };
    fetchBook();
  }, [isbn]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData({
      ...bookData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/books/${isbn}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookData),
      });
      if (response.ok) {
        console.log('Book updated successfully');
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
    <Modal>
        
        <Modal.Header closeButton>
            <Modal.Title> Edit/Delete a Book</Modal.Title>
        </Modal.Header>
    
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          className="form-control"
          id="title"
          name="title"
          value={bookData.title}
          onChange={handleChange}
          disabled
        />
      </div>
      <div className="form-group">
        <label htmlFor="author">Author</label>
        <input
          type="text"
          className="form-control"
          id="author"
          name="author"
          value={bookData.author}
          onChange={handleChange}
          disabled
        />
      </div>
      <div className="form-group">
        <label htmlFor="isbn">ISBN</label>
        <input
          type="text"
          className="form-control"
          id="isbn"
          name="isbn"
          value={bookData.isbn}
          onChange={handleChange}
          disabled
        />
      </div>
      <div className="form-group">
        <label htmlFor="descr">Description</label>
        <textarea
          className="form-control"
          id="descr"
          name="descr"
          value={bookData.descr}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">Update Book</button>
    </form>
    </Modal>
  );
};

export default UpdateBookForm;
