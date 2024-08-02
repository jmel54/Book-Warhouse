import React, { useEffect, useState } from 'react';

const BooksList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        // Fetch data when component mounts
        fetch('http://localhost:8080/api/books')  // Replace with your API endpoint
            .then(response => response.json())
            .then(data => setBooks(data))
            .catch(error => console.error('Error fetching books:', error));
    }, []);

    return (
        <div>
            <h1>Books List</h1>
            <ul>
                {books.map(book => (
                    <li key={book.isbn}>{book.title} by {book.author}</li>
                ))}
            </ul>
        </div>
    );
};

export default BooksList;