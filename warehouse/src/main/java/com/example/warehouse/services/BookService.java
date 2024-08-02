package com.example.warehouse.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.warehouse.models.Book;
import com.example.warehouse.repositories.BookRepository;

//define business logic for book crud operations
//remember, we want to keep that layer of abstraction between the controller and the data
//controll just deals with the in/out of data, use service to do the logic
@Service
public class BookService {
    //implement repo interface

    @Autowired
    private BookRepository bookRepository;

    public BookService(BookRepository bookRepository){
        this.bookRepository = bookRepository;
    }

        public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    public Book createBook(Book book) {
        return bookRepository.save(book);
    }

    public Book getBookByIsbn(String isbn) {
        return bookRepository.findById(isbn).orElse(null);
    }
    public Book updateBook(String isbn, Book bookDetails) {
        
        Book book = bookRepository.findById(isbn).orElse(null);
        if (book != null) {
            System.out.println("===============================\n"+ bookDetails.getTitle());
            book.setTitle(bookDetails.getTitle());
            book.setAuthor(bookDetails.getAuthor());
            book.setDescription(bookDetails.getDescription());
            book.setPictureUrl(bookDetails.getPictureUrl());
            book.setWarehouse(bookDetails.getWarehouse());
            book.setQuantity(bookDetails.getQuantity());
            return bookRepository.save(book);
        }
        return null;
    }

    public void deleteBook(String isbn) {
        bookRepository.deleteById(isbn);
    }
}
