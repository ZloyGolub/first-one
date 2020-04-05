import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';

import { Route } from 'react-router-dom';

function App(props) {
  return (
    <div className="app-wrapper">
      <div className="Header round-borders">
        <Header />
      </div>
      <div className="navigation round-borders">
        <Navbar />
      </div>
      <div className="main_content round-borders">
        <Route path="/profile"  component={Profile}/>
        <Route path="/messages" component={Dialogs}/>
        <Route path="/music" component={Music}/>
        <Route path="/news" component={News}/>
        <Route path="/settings" component={Settings}/>
      </div>
      <div className="footer round-borders">
        <Footer />
      </div>
    </div>
  );
}

export default App;
