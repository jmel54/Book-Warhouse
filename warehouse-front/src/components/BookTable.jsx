import React, { useEffect, useState } from 'react';
import AddBookModal from './BookModal'
const BookTable = ({ warehouseId, warehousename }) => {
    const [books, setBooks] = useState([]);

    const [showModal, setShowModal] = useState(false);
  

    //modal states
      const handleShow = () => setShowModal(true);
      const handleClose = () => setShowModal(false);

    useEffect(() => {
        if (warehouseId) {
            fetch(`http://localhost:8080/warehouse/${warehouseId}/books`)
                .then(response => response.json())
                .then(data => setBooks(data))
                .catch(error => console.error('Error fetching books:', error));
        }
    }, [warehouseId]);

    return (
        <div>
            <h2>Books in {warehousename}</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>ISBN</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Description</th>
                        <th>Quantity</th>

                    </tr>
                </thead>
                <tbody>
                    {books.map(book => (
                        <tr key={book.isbn}>
                            <td>
                                <a href="#" onClick={() => handleShow(book)}>{book.isbn}</a>

                            </td>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.description}</td>
                            <td>{book.quantity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <AddBookModal show={showModal} handleClose={handleClose} />
        </div>
    );
};

export default BookTable;