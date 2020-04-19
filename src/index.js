import React from 'react';
import './index.css';
import App from './App';
import ReactDOM from 'react-dom';
import store from './redux/state';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

let renderPage = (state) => ReactDOM.render(  
    
    <BrowserRouter>
        <App state={state} dispatch={store.dispatch.bind(store)}/>
    </BrowserRouter>,
    document.getElementById('root')
    
);

renderPage(store.getState());

store.subscribe(renderPage);

// ReactDOM.render(<Header />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
