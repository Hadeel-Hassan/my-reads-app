import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import Shelf from './Shelf'


class BooksSearch extends Component {
    //This component holds the search page

    state = {
        books: [] , //holds the resulted books
        query: '', //the search query
        shelvedBooks: [] //holds the books that are currently on 'BookList'
    }

    //get all the books that are currently on 'BookList' and store them in the state 'shelvedBooks'
    showShelvedBooks = () => {
        BooksAPI.getAll().then((shelvedBooks) => {
            this.setState({shelvedBooks: shelvedBooks})
        })
    }
    //before mount, get shelved books
    componentWillMount() {
        this.showShelvedBooks();
    }

    updateQuery = (query) => {
        //clear the result page whenever the search bar is empty
        if (query === '') {
            this.setState({
                query: '',
                books: []
            })
        } else {
            this.setState({ query: query })

            BooksAPI.search(query.trim()).then((data) => {
                //if no results found set book to empty
                if (!data || data.error) {
                    this.setState({books: []})
                } else {
                    data.map((book) => {
                        //mark each resulted book as 'none'
                        book.shelf = 'none'
                        //unless the book is already in 'BookList', then show its current shelf
                        this.state.shelvedBooks.map((b) =>{
                            if(b.id === book.id){
                                book.shelf = b.shelf
                            }
                        })
                    })
                    this.setState({books: data})
                }
            }).catch((error) => {
                this.setState({books: []})
            })
        }
    }

    render() {
        const {query, books} = this.state

        return (
            <div className="search-books">
                <div className="search-books-bar">

                    {
                        //make the back button changes the URL to "/" usin 'Link'
                    }
                    <Link className='close-search' to='/'>
                        <button className='close-search' />
                    </Link>
                
                     
                     
                    <div className="search-books-input-wrapper">

                        <input type="text" 
                               placeholder="Search by title or author" 
                               value={query} 
                               //whenever the input changes, update the search query
                               onChange={(e) => this.updateQuery(e.target.value)}/>
                    </div>
                </div>
                {
                    //show resulted books
                }
                <div className="search-books-results">
                    <ol className="books-grid">
                        {
                            /*display resulted books on a shelf called 'Search Results',
                              also passing parent function 'updateShelf' to listen to changes to applay
                              on 'BookList'*/
                        }
                        <Shelf title="Search Results" shelfBooks={books} updateShelf={this.props.updateShelf}/>
                    </ol>
                </div>
            </div>
        );
    }
}

export default BooksSearch