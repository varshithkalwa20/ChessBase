import React, { useEffect, useRef, useState } from 'react';
import '../css/Profile.css';
 
const Profile = () => {
  const user = {
    firstName: 'John',
    lastName: 'Doe',
    country: 'USA',
    location: 'New York',
    username: 'johndoe',
    rating: 5,
    friends: ['Alice', 'Bob', 'Charlie']
  };
 
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    country: user.country,
    location: user.location
  });
  const profileHeaderRef = useRef(null);
  const profileDetailsRef = useRef(null);
  const friendsListRef = useRef(null);
 
  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };
  const handleInputChange = (e) => {
    setEditedUser({
      ...editedUser,
[e.target.name]: e.target.value
    });
  };
 
  const handleSaveClick = () => {
    // Update the user object with the edited values
    setUser({
      ...user,
      ...editedUser
    });
    setIsEditing(false);
  };
 
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
      });
    }, { threshold: 0.5 });
 
    observer.observe(profileHeaderRef.current);
    observer.observe(profileDetailsRef.current);
    observer.observe(friendsListRef.current);
  }, []);
 
  return (
    <div className="profile-container">
      <div className="profile-header" ref={profileHeaderRef}>
        <div className="profile-photo">
          {/* Replace with your actual profile photo URL */}
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5pLSOZ0qRFfWwe98-IU9BbZPZYnYpTbnwt00pyq_MNQ&s" alt="Profile Photo" />
          </div>
<div className="profile-info">
    <h2>{isEditing ? (
        <input type="text" name="firstName" defaultValue={editedUser.firstName} onChange={handleInputChange} />
               ) : (
                `${editedUser.firstName} ${editedUser.lastName}`
               )}</h2>
               <p>{isEditing ? (
                <input type="text" name="lastName" defaultValue={editedUser.lastName} onChange={handleInputChange} />
               ) : (
                user.username
               )}</p>
               <p>{isEditing ? (
                <input type="text" name="country" defaultValue={editedUser.country} onChange={handleInputChange} />
               ) : (
               
            user.country
          )}</p>
          <p>{isEditing ? (
                <input type="text" name="location" defaultValue={editedUser.location} onChange={handleInputChange}/>
               ) : (
               `${editedUser.location
               }`
          )}</p>
        </div>
        <button className="edit-button" onClick={handleEditClick}>
          {isEditing ? 'Save' : 'Edit'}
        </button>
      </div>
      <div className="profile-details" ref={profileDetailsRef}>
        <p>Rating: {user.rating}</p>
        <div className="friends-heading">
          <h3>Friends</h3>
          <p>{user.friends.length}</p>
        </div>
      </div>
      <div className="friends-list" ref={friendsListRef}>
        <ul>
          {user.friends.map((friend, index) => (
            <li key={index}>
                <div className="friend-item">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5pLSOZ0qRFfWwe98-IU9BbZPZYnYpTbnwt00pyq_MNQ&s"  alt="Friend Photo" />
              <p>{friend}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
 
export default Profile;
 