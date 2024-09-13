// import React, { useState } from 'react';
// import '../css/LoginPage.css'; 
// import google from '../images/google.png'

// const LoginPage = () => {
//   const [usernameOrEmail, setUsernameOrEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // Add login logic here
//     console.log('Login:', { usernameOrEmail, password });
//   };

//   return (
//     <div className="loginContainer">
//       <h2 className="loginHeading">Log In</h2>

//       <button className="googleButton">
//         <img
//           src={google}
//           alt="Google logo"
//           className="googleIcon"
//         />
//         Log in with Google
//       </button>

//       <p className="orText">or</p>

//       <form onSubmit={handleLogin} className="loginForm">
//         <div className="inputContainer">
//           <img
//             src="https://img.icons8.com/material-rounded/24/000000/user.png"
//             alt="user icon"
//             className="inputIcon"
//           />
//           <input
//             type="text"
//             placeholder="Username or Email"
//             value={usernameOrEmail}
//             onChange={(e) => setUsernameOrEmail(e.target.value)}
//             className="inputField"
//           />
//         </div>

//         <div className="inputContainer">
//           <img
//             src="https://img.icons8.com/material-rounded/24/000000/lock-2.png"
//             alt="lock icon"
//             className="inputIcon"
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="inputField"
//           />
//         </div>

//         <p className="forgotPassword">Forget/Reset password?</p>

//         <button type="submit" className="loginButton">
//           Log In
//         </button>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;

import React, { useState } from 'react';
import '../css/LoginPage.css'; 
import google from '../images/google.png'

const LoginPage = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add login logic here
    console.log('Login:', { usernameOrEmail, password });
  };

  return (
    <div className="loginContainer">
      <h2 className="loginHeading">Log In</h2>

      <button className="googleButton">
        <img
          src={google}
          alt="Google logo"
          className="googleIcon"
        />
        Log in with Google
      </button>

      <p className="orText">or</p>

      <form onSubmit={handleLogin} className="loginForm">
        <div className="inputContainer">
          <img
            src="https://img.icons8.com/material-rounded/24/000000/user.png"
            alt="user icon"
            className="inputIcon"
          />
          <input
            type="text"
            placeholder="Username or Email"
            value={usernameOrEmail}
            onChange={(e) => setUsernameOrEmail(e.target.value)}
            className="inputField"
          />
        </div>

        <div className="inputContainer">
          <img
            src="https://img.icons8.com/material-rounded/24/000000/lock-2.png"
            alt="lock icon"
            className="inputIcon"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="inputField"
          />
        </div>

        <p className="forgotPassword">Forget/Reset password?</p>

        <button type="submit" className="loginButton">
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
