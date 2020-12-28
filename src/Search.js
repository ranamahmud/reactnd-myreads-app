import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import * as BooksAPI from './utils/BooksAPI';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resultBooks: []
        };
    }
    searchBook = e => {
        const query = e.currentTarget.value;
        console.log(query);
        BooksAPI.search(query)
            .then(res => {
                if (res.length > 0) {
                    console.log(res);
                    this.setState({ resultBooks: res })
                }
            })
    }
    render() {
        const { resultBooks } = this.state;
        const { changeShelf } = this.props;
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search" >Close</Link>
                    <div className="search-books-input-wrapper">
                        {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                        <input type="text" placeholder="Search by title or author" onChange={this.searchBook} />

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">

                        {
                            (resultBooks.length > 0) && resultBooks.map(book =>
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

export default Search;