import React from 'react';
import { Routes, Route } from 'react-router-dom'
import ListTest from './components/listTest';
import AddTest from './components/addTest';
import Header from './components/header';
import Modal from './components/modal';
import "./App.css";
const App = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <Routes>
          <Route path='/' element={<AddTest />} />
          <Route path='/pass-test' element={<ListTest />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;