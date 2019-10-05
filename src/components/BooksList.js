import React, { Component } from 'react'
import Shelf from './Shelf'
import SearchButton from './SearchButton';

class BookList extends Component {

  //Thin component holds the main page of "MyReads"

  render() {
    return (
      <div className="list-books">

        {
          //The page header
        }
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>


        <div className="list-books-content">
          <div>
            {
              /*Create three shelf objects and pass current books that's on each shelf with "filter" function,
                also passing parent function 'updateShelf' to listen to changes from child components*/
            }
            <Shelf title="Currently Reading" shelfBooks={this.props.books.filter((b) => (b.shelf === 'currentlyReading'))} updateShelf={this.props.updateShelf}/>
            <Shelf title="Want to Read" shelfBooks={this.props.books.filter((b) => (b.shelf === 'wantToRead'))} updateShelf={this.props.updateShelf}/>
            <Shelf title="Read" shelfBooks={this.props.books.filter((b) => (b.shelf === 'read'))} updateShelf={this.props.updateShelf}/>
          </div>
        </div>
        {
          //Display the search button in the main pge
        }
        <SearchButton />
      </div>
    );
  }
}

export default BookList