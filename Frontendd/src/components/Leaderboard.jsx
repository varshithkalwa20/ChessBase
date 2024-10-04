import React, { useState } from 'react';
import '../css/Leaderboard.css'; // Add styles for better visuals
 
const Leaderboard = () => {
  const [isGlobal, setIsGlobal] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
 
  const globalLeaderboard = [
    { rank: 1, name: 'Name1', rating: 'Rating1' },
    { rank: 2, name: '2nd Highest Name', rating: 'Rating2' },
    { rank: 3, name: 'Current Account Username', rating: 'Rating3' },
  ];
 
  const friendsLeaderboard = [
    { rank: 1, name: 'Friend1', rating: 'Rating1' },
    { rank: 2, name: 'Friend2', rating: 'Rating2' },
    { rank: 3, name: 'Current Account Username', rating: 'Rating3' },
  ];
 
  const handleToggle = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsGlobal(!isGlobal);
      setIsAnimating(false);
    }, 300); // Animation duration (300ms)
  };
 
  const leaderboard = isGlobal ? globalLeaderboard : friendsLeaderboard;
 
  return (
    <div className="leaderboard-container">
      <h2>Leaderboard</h2>
      <div className="leaderboard-toggle">
        <button onClick={handleToggle}>
          {isGlobal ? 'GLOBAL' : 'FRIENDS'}
        </button>
      </div>
 
      <div className={`leaderboard-list ${isAnimating ? 'fade-out' : 'fade-in'}`}>
        {leaderboard.map((player, index) => (
          <div className="leaderboard-item" key={index}>
            <div className="rank">#{player.rank}</div>
            <div className="rank">#{player.name}</div>
            <div className="rating">{player.rating}</div>
          </div>
        ))}
      </div>
 
      <div className="see-all">
        <a href="#">See all &gt;</a>
      </div>
    </div>
  );
};
 
export default Leaderboard;
 