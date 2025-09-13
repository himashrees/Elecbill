
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useHistory } from 'react-router-dom';
// import './Style.css';

// const Login = ({ loggedIn, handleLogin }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const history = useHistory();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       setError('Please enter both email and password.');
//       return;
//     }

//     try {
//       await handleLogin(email, password);
//       history.push('/dashboard');
//     } catch (error) {
//       setError('Invalid email or password. Please try again.');
//     }
//   };

//   if (loggedIn) {
//     return <p>You are already logged in.</p>;
//   }

//   return (
//     <div className="container">
//       <div className="form">
//         <h1>Login</h1>
//         {error && <p className="error-message">{error}</p>}
//         <form onSubmit={handleSubmit}>
//           <div className="input-group">
//             <label className="label">Email:</label>
//             <input
//               type="email"
//               className="input-field"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div className="input-group">
//             <label className="label">Password:</label>
//             <input
//               type="password"
//               className="input-field"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           <button type="submit" className="button">Login</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from 'react';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';
import './Style.css';

const Login = ({ loggedIn, handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    try {
      await handleLogin(email, password);
      history.push('/dashboard');
    } catch (error) {
      setError('Invalid email or password. Please try again.');
    }
  };

  if (loggedIn) {
    return <p>You are already logged in.</p>;
  }

  return (
    <div className="container">
      <div className="form">
        <h1>Login</h1>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label className="label">Email:</label>
            <input
              type="email"
              className="input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label className="label">Password:</label>
            <input
              type="password"
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="button">Login</button>
        </form>
        <p className="login-link">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
