//import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import SignUpPage from './components/SignUpPage';
import LoginPage from './components/LoginPage';

function App() {
  return (
    // <div className='App'>
    //   <SignUpPage />
    //   </div>
    
      <Routes>
        <Route  path="/" element={<SignUpPage />} />
        <Route  path="/login" element={<LoginPage />} />
      </Routes>
    
  );
}

export default App;
