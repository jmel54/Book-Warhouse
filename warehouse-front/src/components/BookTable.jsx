import React, { useEffect, useState } from 'react';
import EditBookModal from './EditBookModal'
const BookTable = ({ warehouseId, warehousename }) => {

    const [showModal, setShowModal] = useState(false);
    const [Books, setBooks] = useState([]);
    const [editBook, setEditBook] = useState();

    //modal states
    const handleShow = (book) => {
        setEditBook(book);
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
        setEditBook(null);
    };

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
                    {Books.map(book => (
                        <tr key={book.isbn}>
                            <td>
                                <a href="#" onClick={() => handleShow(book.isbn)}>{book.isbn}</a>

                            </td>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.description}</td>
                            <td>{book.quantity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
            <EditBookModal show={showModal} handleClose={handleClose} isbn={editBook} />
            </div>
            
        </div>
    );
};

export default BookTable;