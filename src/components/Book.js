import React, { Component } from 'react';
import ShelfChanger from './ShelfChanger'

class Book extends Component {
    //This component holds each single book 

    
    render() {
        //case when the book has a thumbnail
        if (this.props.book.imageLinks){
        return (
            <div className="book">
                <div className="book-top">
                    {
                        //Get book image
                    }

                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${this.props.book.imageLinks.thumbnail}")`}}></div>
                    
                    {
                        //Send the book to "ShelfChanger", with passing parent props
                    }
                    <ShelfChanger book={this.props.book} updateShelf={this.props.updateShelf}/>
                    
                </div>
                    {
                        //Get book title
                    }
                <div className="book-title">{ this.props.book.title }</div>
                <div className="book-authors">
                    { 
                        //Get book authors 

                        this.props.book.authors
                       
                    }
                </div>

            </div>
        );
    }

    //case when the book doesn't have a thumbnail
    else{
       return(
        <div className="book">
        <div className="book-top">
            {
                //set blank image
            }

            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("")`}}></div>
            
            {
                //Send the book to "ShelfChanger", with passing parent function 'updateShelf'
            }
            <ShelfChanger book={this.props.book} updateShelf={this.props.updateShelf}/>
            
        </div>

            {
                //Get book title
            }
        <div className="book-title">{ this.props.book.title }</div>
        <div className="book-authors">
            { 
                //Get book authors 

                this.props.book.authors
               
            }
        </div>

    </div>
       )
    }
    }
}

export default Book