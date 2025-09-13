

// import React, { useState } from 'react';
// import axios from 'axios';
// import { useHistory } from 'react-router-dom';
// import './Style.css';
// import BillsPage from './ManageBills';
// import UpdatePassword from './UpdatePassword';
// // import './Style.css';

// const Dashboard = ({ loggedIn, customerId, bills }) => {
//   const history = useHistory();
//   const [showBills, setShowBills] = useState(false);
//   const [paymentSuccess, setPaymentSuccess] = useState(false);
//   const [showPasswordForm, setShowPasswordForm] = useState(false);

//   const handleManageBills = () => {
//     setShowBills(true);
//     history.push('/bills');
//   };

//   const handleUpdateProfile = () => {
//     history.push('/edit-profile');
//   };

//   const handleUpdatePassword = () => {
//     history.push('/update-password');
//   };

//   const handlePayment = async (billId) => {
//     try {
//       // Perform the payment logic
//       // You can use axios or any other method to send a request to the server for payment
//       await axios.post(
//         `http://localhost:8080/bills/users/${customerId}/bills/${billId}/pay`
//       );

//       // Payment successful
//       setPaymentSuccess(true);
//       history.push('/payment-success'); // Navigate to the payment success page
//     } catch (error) {
//       // Handle error
//       console.error('Error occurred during payment:', error);
//     }
//   };

//   return (
//     <div className="container">
//       <h2 className="page-content">Dashboard</h2>
//       <ul className="navbar">
//         <li>
//           <button className="navbar-button" onClick={handleManageBills}>Manage Bills</button>
//         </li>
//         <li>
//           <button className="navbar-button" onClick={handleUpdateProfile}>Update Profile</button>
//         </li>
//         <li>
//           <button className="navbar-button" onClick={handleUpdatePassword}>Update Password</button>
//         </li>
//       </ul>
//       {showPasswordForm && <UpdatePassword customerId={customerId} />}
//       {showBills && (
//         <div className="page-content">
//           {paymentSuccess && <p className="success-message">Payment successful!</p>}
//           <BillsPage
//             bills={bills}
//             loggedInCustomerId={customerId}
//             handlePayment={handlePayment}
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dashboard;

import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import './Style.css';
import BillsPage from './ManageBills';
import UpdatePassword from './UpdatePassword';

const Dashboard = ({ loggedIn, customerId, bills }) => {
  const history = useHistory();
  const [showBills, setShowBills] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [showPasswordForm, setShowPasswordForm] = useState(false);

  const handleManageBills = () => {
    setShowBills(true);
    history.push('/bills');
  };

  const handleUpdateProfile = () => {
    history.push('/edit-profile');
  };

  const handleUpdatePassword = () => {
    history.push('/update-password');
  };

  const handlePayment = async (billId) => {
    try {
      // Perform the payment logic
      // You can use axios or any other method to send a request to the server for payment
      await axios.post(
        `http://localhost:8081/bills/users/${customerId}/bills/${billId}/pay`
      );

      // Payment successful
      setPaymentSuccess(true);
      history.push('/payment-success'); // Navigate to the payment success page
    } catch (error) {
      // Handle error
      console.error('Error occurred during payment:', error);
    }
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <ul className="navbar-items">
            <li>
              <button className="navbar-button" onClick={handleManageBills}>
                Manage Bills
              </button>
            </li>
            <li>
              <button className="navbar-button" onClick={handleUpdateProfile}>
                Update Profile
              </button>
            </li>
            <li>
              <button className="navbar-button" onClick={handleUpdatePassword}>
                Update Password
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container">
        <h2 className="page-content">Dashboard</h2>
        {showPasswordForm && <UpdatePassword customerId={customerId} />}
        {showBills && (
          <div className="page-content">
            {paymentSuccess && <p className="success-message">Payment successful!</p>}
            <BillsPage
              bills={bills}
              loggedInCustomerId={customerId}
              handlePayment={handlePayment}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
