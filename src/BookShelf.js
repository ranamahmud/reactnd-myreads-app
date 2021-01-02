import React, { Component } from 'react';
import Book from './Book';

class BookShelf extends Component {

    render() {
        const { books, title, shelf, changeShelf } = this.props;
        const selectedBooks = books.filter(book => book.shelf === shelf)
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {
                            selectedBooks.map(book =>
                                <li key={book.id}>
                                    <Book book={book} changeShelf={changeShelf} />
                                </li>
                            )
                        }

                    </ol>
                </div>
            </div>
        );
    }
}

export default BookShelf;