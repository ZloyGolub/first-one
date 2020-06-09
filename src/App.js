import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import { Route } from 'react-router-dom';
import UsersAPIContainer from './components/Users/UsersAPIContainer';

function App() {
  return (
    <div className="app-wrapper">
      <div className="Header round-borders">
        <Header />
      </div>
      <div className="navigation round-borders">
        <Navbar />
      </div>
      <div className="main_content round-borders">
        <Route path="/profile" render={() => <Profile />} />
        <Route path="/messages" render={() => <DialogsContainer />} />
        <Route path="/users" render={() => <UsersAPIContainer/>}/>
        <Route path="/music" render={() => <Music />} />
        <Route path="/news" render={() => <News />} />
        <Route path="/settings" render={() => <Settings />} />
      </div>
      <div className="footer round-borders">
        <Footer />
      </div>
    </div>
  );
}

export default App;
