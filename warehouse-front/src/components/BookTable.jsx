import React, { useEffect, useState } from 'react';

const BookTable = ({ warehouseId }) => {
    const [books, setBooks] = useState([]);

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
            <h2>Books in Warehouse {warehouseId}</h2>
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
                            <td>{book.isbn}</td>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.description}</td>
                            <td>{book.quantity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BookTable;