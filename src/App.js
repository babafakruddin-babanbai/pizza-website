import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import HomePage from './app/pages/Home';
import Navbar from './app/components/Header';
import Fetch from './app/Fetch';
import Cart from './app/pages/popup';
import Header from './app/components/Header';
import Footer from './app/components/Footer';

function App() {
  return (
    <div>
    
    <Header></Header>
    <Fetch></Fetch>
    <Footer></Footer>
    </div>
  );
}

export default App;
