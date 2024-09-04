import React from 'react';
import logo from '../images/logo.jpg';
import chess from '../images/chess.jpg';
import '../css/Home.css';

const Home = () => {
  return (
    <div className="container">
      <header className="header">
        <div className="title">
          <img className="logo" src={logo} alt="logo" />
          <h1>Welcome to ChessBase</h1>
        </div>
        <nav className="navbar">
          <ul className="navbar-links">
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Play a Game</a></li>
            <li><a href="/">Book a Class</a></li>
            <li><a href="/">Solve Puzzles</a></li>
            <li className="more-option">
              <span className="dots">⋮</span>
              <span>More</span>
              <ul className="more-menu">
                <li><a href="/">Profile</a></li>
                <li><a href="/">Articles</a></li>
                <li><a href="/">Friends</a></li>
                <li><a href="/">Settings</a></li>
                <li><a href="/">Leaderboard</a></li>
                <li><a href="/">Logout</a></li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
      <main className="content">
        <p>
          Discover the world of chess with our comprehensive resources. Whether you're a beginner or an experienced player, we offer everything you need to enhance your skills and enjoy the game.
        </p>
        <p>
          Explore our extensive library of tutorials and strategies designed to elevate your gameplay. Engage with interactive puzzles and challenges that test and improve your tactics. Join our community of chess enthusiasts and participate in live classes and tournaments to put your skills to the test.
        </p>
      </main>
      <img className="images" src={chess} alt="chess" />
    </div>
  );
};

export default Home;
