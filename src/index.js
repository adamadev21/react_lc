import React from 'react'
import ReactDOM from 'react-dom';
import {Route} from 'react-router-dom'
import {BrowserRouter} from 'react-router-dom'
import Head from './Head';
import App from './App';

ReactDOM.render(
<BrowserRouter>
<App />
</BrowserRouter>,
document.getElementById('root'));