import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';
import Dialogs from './components/Dialogs/Dialogs';

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div>
        {/* <Profile /> */}
        <Dialogs/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
