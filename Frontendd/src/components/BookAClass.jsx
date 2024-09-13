import React, { useState } from 'react';
import '../css/BookAClass.css';
 

const BookAClass = () => {
  const [nameFocus, setNameFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [preferreddateFocus, setPreferreddateFocus] = useState(false);
  const [classtypeFocus, setClasstypeFocus] = useState(false);


  const [formSubmitted, setFormSubmitted] = useState(false);
 
  const handleSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
 
    // Simulate a delay for form submission
    setTimeout(() => {
      setFormSubmitted(false);
      alert("Class booked successfully!");
    }, 200);
  };
 
  return (
    <div className="book-class-container">
      <h1 className="book-class-heading">Book a Class</h1>
 
      <form className={`book-class-form ${formSubmitted ? 'submitted' : ''}`} onSubmit={handleSubmit}>
        {/* Name Input Field */}
        <div className={`form-group ${nameFocus ? 'focused' : ''}`}>
        
        <input
          type="text"
          id="name"
          onFocus={() => setNameFocus(true)}
          onBlur={(e) => setNameFocus(e.target.value !== '')}
          placeholder="Enter your name"
        />
        <label
          htmlFor="name"
          className={nameFocus ? 'label-active' : 'label-hidden'}
        >
          Name
        </label>
      </div>
      
      {/* Email Input Field */}
      <div className={`form-group ${emailFocus ? 'focused' : ''}`}>
        
        <input
          type="email"
          id="email"
          onFocus={() => setEmailFocus(true)}
          onBlur={(e) => setEmailFocus(e.target.value !== '')}
          placeholder="Enter your email"
        />
        <label
          htmlFor="email"
          className={emailFocus ? 'label-active' : 'label-hidden'}
        >
          Email
        </label>
      </div>

      {/* Preferred Date Input Field */}
      <div className={`form-group ${preferreddateFocus ? 'focused' : ''}`}>
        
        <input
          type="date"
          id="date"
          onFocus={() => setPreferreddateFocus(true)}
          onBlur={(e) => setPreferreddateFocus(e.target.value !== '')}
          placeholder="dd-mm-yyyy"
        />
        <label
          htmlFor="date"
          className={preferreddateFocus ? 'label-active' : 'label-hidden'}
        >
          Preferred Date:
        </label>
      </div>


      {/* Preferred Class Type Input Field */}
      <div className={`form-group ${classtypeFocus ? 'focused' : ''}`}>
        
        <select
          id="classtype"
          onFocus={() => setClasstypeFocus(true)}
          onBlur={(e) => setClasstypeFocus(e.target.value !== '')}
          placeholder="Select Level"
        >
          <option value="" disabled selected>Select Level</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
        <label
          htmlFor="classtype"
          className={classtypeFocus ? 'label-active' : 'label-hidden'}
        >
          Class Type:
        </label>
        
      </div>
        
 
        
 
        
 
        <button type="submit" className="submit-btn">
          {formSubmitted ? 'Booking...' : 'Book Now'}
        </button>
      </form>
    </div>
  );
};
 
export default BookAClass;