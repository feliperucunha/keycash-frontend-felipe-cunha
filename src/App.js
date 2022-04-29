import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
import { Homepage } from './pages';
import './App.css';
import Header from './components/Header';

const App = () => {
  return (
    <div className='app'>
      <div className='max-w-7xl mx-auto'>
        <Navbar />
        <Header />
      </div>
      <div className='main'>
        <div className='routes'>
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/houses/:houseId" element={<></>} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App