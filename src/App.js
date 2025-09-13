
// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Link, Switch, withRouter, useLocation } from 'react-router-dom';
// import axios from 'axios';
// import Login from './components/Login';
// import Dashboard from './components/Dashboard';
// import BillsPage from './components/ManageBills';
// import EditProfilePage from './components/EditProfile';
// import UpdatePasswordPage from './components/UpdatePassword';
// import PaymentPage from './components/PaymentPage';
// import './components/Style.css';
// import logoutIcon from './icons/3005766_account_door_exit_logout_icon (1).png';



// const BackButton = withRouter(({ history }) => {
//   const goBack = () => {
//     history.goBack();
//   };

//   return (
//     <button className="back-button" onClick={goBack}>
//       Back
//     </button>
//   );
// });

// const WelcomePage = () => {
//   const location = useLocation();
  
//   return (
//     <div>
//       {location.pathname === '/' && (
//         <div>
//           <h1 className="welcome-text">Electricity Bill<br />Management System</h1>
//           <h2 className="description">This website will act as a customer-oriented service 
//           <br></br>for users for easy payment of their respective <b>Electricity Bills</b> 
//           <br></br>as well as to update their profile.</h2>
//         </div>
//       )}
//     </div>
//   );
// };

// const App = () => {
//   const [loggedIn, setLoggedIn] = useState(false);
//   const [customerId, setCustomerId] = useState(null);
//   const [bills, setBills] = useState([]);

//   useEffect(() => {
//     // Check if user is already logged in
//     const isLoggedIn = localStorage.getItem('loggedIn');
//     const customerId = localStorage.getItem('customerId');

//     if (isLoggedIn && customerId) {
//       setLoggedIn(true);
//       setCustomerId(customerId);
//       fetchBills(customerId);
//     }
//   }, []);

//   const handleLogin = async (email, password) => {
//     try {
//       const response = await axios.post('http://localhost:8080/login/userlogin', { email, password });
//       const customerId = response.data;
//       setLoggedIn(true);
//       setCustomerId(customerId);
//       localStorage.setItem('loggedIn', true);
//       localStorage.setItem('customerId', customerId);
//       fetchBills(customerId);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleLogout = () => {
//     setLoggedIn(false);
//     setCustomerId(null);
//     localStorage.removeItem('loggedIn');
//     localStorage.removeItem('customerId');
//   };

//   const fetchBills = async (customerId) => {
//     try {
//       const response = await axios.get(`http://localhost:8080/bills/customers/${customerId}/bills`);
//       setBills(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <Router>
//       <div>
//         <nav>
//           <WelcomePage />
//           {loggedIn ? (
//             <ul>
             
//               <li>
//               <img src={logoutIcon} alt="Logout" />

//               </li>
//             </ul>
//           ) : (
//             <div>
//               <button className="link-login-button">
//                 <Link to="/login">Login</Link>
//               </button>
//             </div>
//           )}
//         </nav>

//         <Switch>
//           <Route
//             path="/login"
//             render={() => (
//               <div>
//                 <Login loggedIn={loggedIn} handleLogin={handleLogin} />
//                 <BackButton />
//               </div>
//             )}
//           />

//           <Route
//             path="/dashboard"
//             render={() => (
//               <div>
//                 <Dashboard loggedIn={loggedIn} customerId={customerId} bills={bills} />
//                 <BackButton />
//               </div>
//             )}
//           />

//           <Route
//             path="/bills"
//             render={() => (
//               <div>
//                 <BillsPage bills={bills} loggedInCustomerId={customerId} />
//                 <BackButton />
//               </div>
//             )}
//           />

//           <Route
//             path="/edit-profile"
//             render={() => (
//               <div>
//                 <EditProfilePage customerId={customerId} />
//                 <BackButton />
//               </div>
//             )}
//           />

//           <Route
//             path="/update-password"
//             render={() => (
//               <div>
//                 <UpdatePasswordPage customerId={customerId} />
//                 <BackButton />
//               </div>
//             )}
//           />

//           <Route path="/payment" component={PaymentPage} />
//         </Switch>
//       </div>
//     </Router>
//   );
// };

// export default App;




import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, withRouter, useLocation } from 'react-router-dom';
import axios from 'axios';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import BillsPage from './components/ManageBills';
import EditProfilePage from './components/EditProfile';
import UpdatePasswordPage from './components/UpdatePassword';
import PaymentPage from './components/PaymentPage';
import './components/Style.css';
import logoutIcon from './icons/3005766_account_door_exit_logout_icon (1).png';

const BackButton = withRouter(({ history }) => {
  const goBack = () => {
    history.goBack();
  };

  return (
    <button className="back-button" onClick={goBack}>
      Back
    </button>
  );
});

const WelcomePage = () => {
  const location = useLocation();

  return (
    <div>
      {location.pathname === '/' && (
        <div>
          <h1 className="welcome-text">Electricity Bill<br />Management System</h1>
          <h2 className="description">This website will act as a customer-oriented service 
          <br></br>for users for easy payment of their respective <b>Electricity Bills</b> 
          <br></br>as well as to update their profile.</h2>
        </div>
      )}
    </div>
  );
};

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [customerId, setCustomerId] = useState(null);
  const [bills, setBills] = useState([]);
  const [logoutClicked, setLogoutClicked] = useState(false);

  useEffect(() => {
    // Check if user is already logged in
    const isLoggedIn = localStorage.getItem('loggedIn');
    const customerId = localStorage.getItem('customerId');

    if (isLoggedIn && customerId) {
      setLoggedIn(true);
      setCustomerId(customerId);
      fetchBills(customerId);
    }
  }, []);

  const handleLogin = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:8081/login/userlogin', { email, password });
      const customerId = response.data;
      setLoggedIn(true);
      setCustomerId(customerId);
      localStorage.setItem('loggedIn', true);
      localStorage.setItem('customerId', customerId);
      fetchBills(customerId);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setCustomerId(null);
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('customerId');
    setLogoutClicked(true);
  };

  const fetchBills = async (customerId) => {
    try {
      const response = await axios.get(`http://localhost:8081/bills/customers/${customerId}/bills`);
      setBills(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Router>
      <div>
        <nav>
          <WelcomePage />
          {loggedIn ? (
  <ul className="logout-list">
    <li>
      <div className="logout-container" onClick={handleLogout}>
        <img src={logoutIcon} alt="Logout" className={logoutClicked ? 'small-logout-icon' : 'logout-icon'} />
      </div>
    </li>
  </ul>
) : (
  // Other code for non-logged-in state


 


            <div>
              <button className="link-login-button">
                <Link to="/login">Login</Link>
              </button>
            </div>
          )}
        </nav>

        <Switch>
          <Route
            path="/login"
            render={() => (
              <div>
                <Login loggedIn={loggedIn} handleLogin={handleLogin} />
                <BackButton />
              </div>
            )}
          />

          <Route
            path="/dashboard"
            render={() => (
              <div>
                <Dashboard loggedIn={loggedIn} customerId={customerId} bills={bills} />
                <BackButton />
              </div>
            )}
          />

          <Route
            path="/bills"
            render={() => (
              <div>
                <BillsPage bills={bills} loggedInCustomerId={customerId} />
                <BackButton />
              </div>
            )}
          />

          <Route
            path="/edit-profile"
            render={() => (
              <div>
                <EditProfilePage customerId={customerId} />
                <BackButton />
              </div>
            )}
          />

          <Route
            path="/update-password"
            render={() => (
              <div>
                <UpdatePasswordPage customerId={customerId} />
                <BackButton />
              </div>
            )}
          />

          <Route path="/payment" component={PaymentPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
