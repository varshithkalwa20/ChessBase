// import React from 'react';
// import logo from '../images/logo.jpg';
// import chess from '../images/chess.jpg';
// import '../css/Home.css';

// const Home = () => {
//   return (
//     <div className="container">
//       <header className="header">
//         <div className="title">
//           <img className="logo" src={logo} alt="logo" />
//           <h1>Welcome to ChessBase</h1>
//         </div>
//         <nav className="navbar">
//           <ul className="navbar-links">
//             <li><a href="/">Home</a></li>
//             <li><a href="/">About</a></li>
//             <li><a href="/">Play a Game</a></li>
//             <li><a href="/">Book a Class</a></li>
//             <li><a href="/">Solve Puzzles</a></li>
//             <li className="more-option">
//               <span className="dots">⋮</span>
//               <span>More</span>
//               <ul className="more-menu">
//                 <li><a href="/">Profile</a></li>
//                 <li><a href="/">Articles</a></li>
//                 <li><a href="/">Friends</a></li>
//                 <li><a href="/">Settings</a></li>
//                 <li><a href="/">Leaderboard</a></li>
//                 <li><a href="/">Logout</a></li>
//               </ul>
//             </li>
//           </ul>
//         </nav>
//       </header>
//       <main className="content">
//         <p>
//           Discover the world of chess with our comprehensive resources. Whether you're a beginner or an experienced player, we offer everything you need to enhance your skills and enjoy the game.
//         </p>
//         <p>
//           Explore our extensive library of tutorials and strategies designed to elevate your gameplay. Engage with interactive puzzles and challenges that test and improve your tactics. Join our community of chess enthusiasts and participate in live classes and tournaments to put your skills to the test.
//         </p>
//       </main>
//       <img className="images" src={chess} alt="chess" />
//     </div>
//   );
// };

// export default Home;

import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../images/logo.jpg';
import chess from '../images/chess.jpg';
import '../css/Home.css';
import r1c1 from '../images/row-1-column-1.jpg';
import r1c2 from '../images/row-1-column-2.jpg';
import r1c3 from '../images/row-1-column-3.jpg';
import r1c4 from '../images/row-1-column-4.jpg';
import r2c1 from '../images/row-2-column-1.jpg';
import r2c2 from '../images/row-2-column-2.jpg';
import r2c3 from '../images/row-2-column-3.jpg';
import r2c4 from '../images/row-2-column-4.jpg';
import r3c1 from '../images/row-3-column-1.jpg';
import r3c2 from '../images/row-3-column-2.jpg';
import r3c3 from '../images/row-3-column-3.jpg';
import r3c4 from '../images/row-3-column-4.jpg';
import r4c1 from '../images/row-4-column-1.jpg';
import r4c2 from '../images/row-4-column-2.jpg';
import r4c3 from '../images/row-4-column-3.jpg';
import r4c4 from '../images/row-4-column-4.jpg';


const Home = () => {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate('/');
  };
 
  // Reference to the image container for the observer
  const imageContainerRef = useRef(null);
 
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          } else {
            entry.target.classList.remove('animate');
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the image container is visible
    );
 
    if (imageContainerRef.current) {
      observer.observe(imageContainerRef.current);
    }
 
    return () => {
      if (imageContainerRef.current) {
        observer.unobserve(imageContainerRef.current);
      }
    };
  }, []);
 
  return (
    <div className="container">
      <header className="header">
        <div className="title">
          <img className="logo" src={logo} alt="logo" />
          <h1>Welcome to ChessBase</h1>
        </div>
        <nav className="navbar">
          <ul className="navbar-links">
            <li><a href="/home">Home</a></li>
            <li><a href="/About">About</a></li>
            <li><a href="/">Play a Game</a></li>
            <li><a href="/BookAClass">Book a Class</a></li>
            <li><a href="/">Solve Puzzles</a></li>
            <li className="more-option">
              <a>⋮More
                <ul className="more-menu">
                  <li><a href="/">Profile</a></li>
                  <li><a href="https://en.chessbase.com/">Articles</a></li>
                  <li><a href="/friends">Friends</a></li>
                  <li><a href="/settings">Settings</a></li>
                  <li><a href="/">Leaderboard</a></li>
                  <li><a href="/">Logout</a></li>
                  <li><a href="/">LogIn/signup</a></li>
                </ul>
              </a>
            </li>
          </ul>
        </nav>
      </header>
 
      <main className="content">
        <p>
          Discover the world of chess with our comprehensive resources...
        </p>
      </main>
 
      {/* Image container for chess pieces */}
      <div ref={imageContainerRef} className="images-container">
      <img className="piece" id="piece1" src={chess} alt="Chess Piece 1" />
        <img className="piece" id="piece2" src={chess} alt="Chess Piece 2" />
        <img className="piece" id="piece3" src={chess} alt="Chess Piece 3" />
        {/* <img className="piece" id="piece1" src={r1c1} alt="Chess Piece 1" />
        <img className="piece" id="piece2" src={r1c2} alt="Chess Piece 2" />
        <img className="piece" id="piece3" src={r1c3} alt="Chess Piece 3" />
        <img className="piece" id="piece1" src={r1c4} alt="Chess Piece 1" />
        <img className="piece" id="piece2" src={r2c1} alt="Chess Piece 2" />
        <img className="piece" id="piece3" src={r2c2} alt="Chess Piece 3" />
        <img className="piece" id="piece1" src={r2c3} alt="Chess Piece 1" />
        <img className="piece" id="piece2" src={r2c4} alt="Chess Piece 2" />
        <img className="piece" id="piece3" src={r3c1} alt="Chess Piece 3" />
        <img className="piece" id="piece1" src={r3c2} alt="Chess Piece 1" />
        <img className="piece" id="piece2" src={r3c3} alt="Chess Piece 2" />
        <img className="piece" id="piece3" src={r3c4} alt="Chess Piece 3" />
        <img className="piece" id="piece1" src={r4c1} alt="Chess Piece 1" />
        <img className="piece" id="piece2" src={r4c2} alt="Chess Piece 2" />
        <img className="piece" id="piece3" src={r4c3} alt="Chess Piece 3" />
        <img className="piece" id="piece1" src={r4c4} alt="Chess Piece 1" /> */}
      </div>
    </div>
  );
};
 
export default Home;