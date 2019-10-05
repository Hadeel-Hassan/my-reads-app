import React, { Component } from 'react';
import Book from './Book';

class CommandList extends Component {

    //This component holds the button on each book that shows current shelf and can change to a new shelf

    render() {

        
        const book = this.props.book
      
        return (
           
            <div className="book-shelf-changer">

                {/* make a select element with current shelf value, or 'none' if the book wasn't on 'BookList'.
                    whenever the option changes, send the current book along with desired shelf to the parent
                    function 'updateShelf' */}
                <select value={book.shelf === null ? 'none' : book.shelf} onChange={ (e) => {this.props.updateShelf(book,e.target.value)}  }>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        );
    }
}

export default CommandList