import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';
import * as BooksAPI from './utils/BooksAPI';
class ListBooks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: []
        };
    }
    componentDidMount() {
        BooksAPI.getAll()
            .then(books => this.setState({
                books
            }));
    }

    componentWillUpdate() {
        BooksAPI.getAll()
            .then(books => this.setState({
                books
            }));
    }
    changeShelf = (e, book) => {
        const shelf = e.target.value;
        BooksAPI.update(book, shelf)
            .then(res => {
                this.setState({ res })
            });

    }
    render() {
        const books = this.state.books;
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>

                <div className="list-books-content">
                    <div>
                        <BookShelf title={"Currently Reading"} books={books} shelf={"currentlyReading"} changeShelf={this.changeShelf} />
                        <BookShelf title={"Want to Read"} books={books} shelf={"wantToRead"} changeShelf={this.changeShelf} />
                        <BookShelf title={"Read"} books={books} shelf={"read"} changeShelf={this.changeShelf} />
                    </div>
                </div>
                <div className="open-search">

                    <Link to="/search">Add a book</Link>
                </div>
            </div >
        );
    }
}

export default ListBooks;