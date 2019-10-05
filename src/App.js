import React, {Component} from 'react'
import { BrowserRouter , Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookList from './components/BooksList'
import BookSearch from './components/BookSearch'
import './App.css'

class BooksApp extends Component {

  //Set list of books as state
  state = {
    books: []
  }


  //function 'updateShelf' takes the desired book and shelf, then send them to function 'ubdate' from 'BookAPI'
  updateShelf(book,shelf){
    BooksAPI.update(book,shelf)
    
  }

  //whenever the App mounted to the DOM, get all the books from 'BookAPI'
  componentDidMount() {
    BooksAPI.getAll().then((data) => {
      this.setState({
        books: data
      });
    });
  }

  //whenever the App is updated, re-fetch all the books from 'BookAPI'
  componentDidUpdate(){
    BooksAPI.getAll().then((data) => {
      this.setState({
        books: data
      });
    });
  }

  render() {
    return (
      /*Using 'React Fregment' instead of div as a wrapper tag to the app to return multiple elements. 
      so I can group a list of children without adding extra nodes to the DOM.*/
      <React.Fragment>

      {/*whenever the URL is '/', render 'BookList' */ }
        <Route exact path="/" render={() =>
          (
            <div className="app">
              {/* send books from state and function 'updateShelf' to 'BookList' */}
              <BookList books={this.state.books} updateShelf={this.updateShelf}/>
            </div>
          )
        } />
        
        {/*whenever the URL is '/search', render 'BookSearch' */ }
        <Route path="/search" render={() =>
          (
            <div className="app">
              {/* send function 'updateShelf' to 'BookSearch' */}
              <BookSearch updateShelf={this.updateShelf} />
            </div>
          )
        } />
      </React.Fragment>
    )
  }
}

export default BooksApp
