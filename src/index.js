import './index.css';
import state from './redux/state';
import {addPost,  updateNewPost } from './redux/state';
import * as serviceWorker from './serviceWorker';
import renderPage from "./render";

renderPage(state, addPost, updateNewPost);


// ReactDOM.render(<Header />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
