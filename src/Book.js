import React from 'react';

const Book = (props) => {
    const { book, changeShelf } = props;
    const { title, shelf, authors } = book;
    const currentShelf = shelf === undefined ? "none" : shelf
    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks && book.imageLinks.thumbnail})` }}></div>
                <div className="book-shelf-changer">
                    <select value={currentShelf} onChange={(e, book) => changeShelf(e, props.book)}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{title}</div>
            <div className="book-authors">
                {authors && authors.join(",")}
            </div>
        </div>
    );
};

export default Book;