import React, { Component } from 'react';
import Book from './Book'

class Shelf extends Component {
    //this component holds each shelf on the app
    render() {
        return (
            <div className="bookshelf">
                {/* display shelf title */}
              <h2 className="bookshelf-title">{ this.props.title }</h2>
              <div className="bookshelf-books">
                  {/* show books on the shelf as an ordered list */}
                <ol className="books-grid">
                    {
                        //map each book on the shelf to 'Book' component, along with passing parent function 'updateShelf'
                        this.props.shelfBooks.map((book) => (
                            <li key={book.id}>
                                <Book book={book} updateShelf={this.props.updateShelf}/>
                            </li>
                        ))
                    }
                </ol>
              </div>
            </div>
        );
    }
}

export default Shelf