import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

//Using 'Browser Router' as a wrapper to the whole app, to keep app in sync with the URL
ReactDOM.render(<BrowserRouter>
                    <App />
                </BrowserRouter>, document.getElementById('root'))

