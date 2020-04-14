import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

let renderPage = (state, addPost, updateNewPost) => ReactDOM.render(
    <BrowserRouter>
        <App state={state} addPost={addPost} updateNewPost={updateNewPost}/>
    </BrowserRouter>,
    document.getElementById('root')
);

export default renderPage;