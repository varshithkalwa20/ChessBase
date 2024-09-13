//import logo from './logo.svg';
// import React from 'react';
// import './App.css';
// import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import SignUpPage from './components/SignUpPage';
// import LoginPage from './components/LoginPage';

// function App() {
//   return (
//     // <div className='App'>
//     //   <SignUpPage />
//     //   </div>
    
//       <Routes>
//         <Route  path="/" element={<SignUpPage />} />
//         <Route  path="/login" element={<LoginPage />} />
//       </Routes>
    
//   );
// }

// export default App;
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import SignUpPage from './components/SignUpPage';
import LoginPage from './components/LoginPage';
import Home from './components/Home';
import About from './components/About';
import BookAClass from './components/BookAClass';
import Settings from './components/Settings';
import Friends from './components/Friends';
function App() {
  return (
    // <div className='App'>
    //   <SignUpPage />
    //   </div>
    
      <Routes>
        <Route  path="/" element={<SignUpPage />} />
        <Route  path="/login" element={<LoginPage />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/BookAClass" element={<BookAClass/>} />
        <Route path="/settings" element={<Settings/>} />
        <Route path="/friends" element={<Friends/>} />
      </Routes>
    
  );
}

export default App;