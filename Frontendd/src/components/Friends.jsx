import React, { useState } from "react";
import '../css/Friends.css';
import search from '../images/search.png';
 
const Friends = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [friends, setFriends] = useState([
    { username: "sai", country: "USA", rating: 5, avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5pLSOZ0qRFfWwe98-IU9BbZPZYnYpTbnwt00pyq_MNQ&s" },
    { username: "varshitha", country: "Canada", rating: 4, avatar: "data:image/png;base64,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" }
  ]);
 
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
 
  const filteredFriends = friends.filter(friend =>
    friend.username.toLowerCase().includes(searchTerm.toLowerCase())
  );
 
  return (
    <div className="friends-container">
      <h2>Friends</h2>
      <div className="search-bar">
        <img src={search} alt="Search Icon" className="search-icon" />
        <input 
          type="text" 
          placeholder="Search by name or username"
          value={searchTerm}
          onChange={handleSearch} 
        />
      </div>
      <div className="friends-list">
        {filteredFriends.length > 0 ? (
          <ul>
            {filteredFriends.map((friend, index) => (
              <li key={index} className="friend-item">
                <img src={friend.avatar} alt="Avatar" className="friend-avatar" />
                <div className="friend-details">
                  <p>Username: {friend.username}</p>
                  
<p>Country: {friend.country}</p>
                  <p>Rating: {friend.rating}</p>
                </div>
                <div className="friend-actions">
                  <button>Send Msg</button>
                  <button>Challenge</button>
                  <button>Remove</button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No friends found</p>
        )}
      </div>
    </div>
  );
};
 
export default Friends;
 