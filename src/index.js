import React from 'react';
import './index.css';
import App from './App';
import ReactDOM from 'react-dom';
import state, { subscribe } from './redux/state';
import * as serviceWorker from './serviceWorker';
import {addPost,  updateNewPost } from './redux/state';
import { BrowserRouter } from 'react-router-dom';

let renderPage = (state) => ReactDOM.render(  
    
    <BrowserRouter>
        <App state={state} addPost={addPost} updateNewPost={updateNewPost}/>
    </BrowserRouter>,
    document.getElementById('root')
    
);

renderPage(state);

subscribe(renderPage);

// ReactDOM.render(<Header />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
