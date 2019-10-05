import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class SearchButton extends Component {
    render() {
        return (
            <div className="open-search">
                {
                    //label the button
                }
                <h4 className="add-book">Add a book</h4>
               {
                   //make the button changes the URL to "/search" usin 'Link'
               }
                <Link className='open-search' to='/search'>
                    <button className='open-search' />
                </Link>
               
            </div>
        );
    }
}

export default SearchButton