import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../src/pages/Login'
import Header from './components/Header';

export default function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Header/>
          <Routes>
              <Route path='/' element={<Login />}></Route>    
          </Routes>
        </div>
        
      </Router>
    </>
    
  )
}
