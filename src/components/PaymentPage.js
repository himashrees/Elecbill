
// import React, { useState } from 'react';
// import axios from 'axios';
// import './Style.css';

// const PaymentPage = ({ loggedInCustomerId, billId, handlePayment }) => {
//   const [cardNumber, setCardNumber] = useState('');
//   const [expiryDate, setExpiryDate] = useState('');
//   const [cvv, setCvv] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const performPayment = async () => {
//     // Validate card details before submitting payment
//     if (!cardNumber || !expiryDate || !cvv) {
//       setErrorMessage('Please fill in all the card details.');
//       return;
//     }

//     // Perform payment if all fields are filled
//     try {
//       const response = await axios.post(
//         `http://localhost:8080/bills/users/${loggedInCustomerId}/bills/${billId}/pay`,
//         {
//           cardNumber,
//           expiryDate,
//           cvv,
//         }
//       );
//       console.log('Payment successful');
//       handlePayment(); // Notify parent component that payment was successful
//     } catch (error) {
//       console.error('Error occurred during payment:', error);
//       setErrorMessage('Payment failed. Please try again.');
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="background-image"></div>
//       <div className="form-container">
//         <h4 className="form-title">Payment Details:</h4>
//         {errorMessage && <p className="error-message">{errorMessage}</p>}
//         <form className="payment-form">
//           <div className="form-group">
//             <label>Card Number:</label>
//             <input
//               type="text"
//               value={cardNumber}
//               onChange={(e) => setCardNumber(e.target.value)}
//               className="input-field"
//             />
//           </div>
//           <div className="form-group">
//             <label>Expiry Date:</label>
//             <input
//               type="text"
//               value={expiryDate}
//               onChange={(e) => setExpiryDate(e.target.value)}
//               className="input-field"
//             />
//           </div>
//           <div className="form-group">
//             <label>CVV:</label>
//             <input
//               type="text"
//               value={cvv}
//               onChange={(e) => setCvv(e.target.value)}
//               className="input-field"
//             />
//           </div>
//           <button type="button" onClick={performPayment} className="button">
//             Pay
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default PaymentPage;
// import React, { useState } from 'react';
// import axios from 'axios';
// import './Style.css';

// const PaymentPage = ({ loggedInCustomerId, billId, handlePayment }) => {
//   const [cardNumber, setCardNumber] = useState('');
//   const [expiryDate, setExpiryDate] = useState('');
//   const [cvv, setCvv] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const performPayment = async () => {
//     // Validate card details before submitting payment
//     if (!cardNumber || !expiryDate || !cvv) {
//       setErrorMessage('Please fill in all the card details.');
//       return;
//     }

//     // Perform payment if all fields are filled
//     try {
//       const response = await axios.post(
//         `http://localhost:8080/bills/users/${loggedInCustomerId}/bills/${billId}/pay`,
//         {
//           cardNumber,
//           expiryDate,
//           cvv,
//         }
//       );
//       console.log('Payment successful');
//       handlePayment(); // Notify parent component that payment was successful
//     } catch (error) {
//       console.error('Error occurred during payment:', error);
//       setErrorMessage('Payment failed. Please try again.');
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="form">
//         <h4 className="form-title">Payment Details:</h4>
//         {errorMessage && <p className="error-message">{errorMessage}</p>}
//         <form>
//           <div className="input-group">
//             <label className="label">Card Number:</label>
//             <input
//               type="text"
//               value={cardNumber}
//               onChange={(e) => setCardNumber(e.target.value)}
//               className="input-field"
//             />
//           </div>
//           <div className="input-group">
//             <label className="label">Expiry Date:</label>
//             <input
//               type="text"
//               value={expiryDate}
//               onChange={(e) => setExpiryDate(e.target.value)}
//               className="input-field"
//             />
//           </div>
//           <div className="input-group">
//             <label className="label">CVV:</label>
//             <input
//               type="text"
//               value={cvv}
//               onChange={(e) => setCvv(e.target.value)}
//               className="input-field"
//             />
//           </div>
//           <button type="button" onClick={performPayment} className="button">
//             Pay
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default PaymentPage;
import React, { useState } from 'react';
import axios from 'axios';
import './Style.css';

const PaymentPage = ({ loggedInCustomerId, billId, handlePayment }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const performPayment = async () => {
    // Validate card details before submitting payment
    if (!validateCardNumber(cardNumber) || !validateExpiryDate(expiryDate) || !validateCvv(cvv)) {
      setErrorMessage('Please enter valid card details.');
      return;
    }

    // Perform payment if all fields are filled
    try {
      const response = await axios.post(
        `http://localhost:8081/bills/users/${loggedInCustomerId}/bills/${billId}/pay`,
        {
          cardNumber,
          expiryDate,
          cvv,
        }
      );
      console.log('Payment successful');
      handlePayment(); // Notify parent component that payment was successful
    } catch (error) {
      console.error('Error occurred during payment:', error);
      setErrorMessage('Payment failed. Please try again.');
    }
  };

  const validateCardNumber = (number) => {
    const cardNumberRegex = /^\d{16}$/;
    return cardNumberRegex.test(number);
  };

  const validateExpiryDate = (date) => {
    const expiryDateRegex = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
    return expiryDateRegex.test(date);
  };

  const validateCvv = (cvv) => {
    const cvvRegex = /^\d{3}$/;
    return cvvRegex.test(cvv);
  };

  const handleCardNumberChange = (e) => {
    const input = e.target.value.replace(/\D/g, '');
    setCardNumber(input);
  };

  const handleExpiryDateChange = (e) => {
    const input = e.target.value.replace(/\D/g, '');
    if (input.length <= 6) {
      const month = input.slice(0, 2);
      const year = input.slice(2);
      setExpiryDate(`${month}/${year}`);
    }
  };

  return (
    <div className="login-container">
      <div className="form">
        <h4 className="form-title">Payment Details:</h4>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <form>
          <div className="input-group">
            <label className="label">Card Number:</label>
            <input
              type="text"
              value={cardNumber}
              onChange={handleCardNumberChange}
              className="input-field"
              maxLength={16}
            />
          </div>
          <div className="input-group">
            <label className="label">Expiry Date:</label>
            <input
              type="text"
              value={expiryDate}
              onChange={handleExpiryDateChange}
              className="input-field"
              maxLength={7}
              placeholder="MM/YYYY"
            />
          </div>
          <div className="input-group">
            <label className="label">CVV:</label>
            <input
              type="password"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              className="input-field"
              maxLength={3}
            />
          </div>
          <button type="button" onClick={performPayment} className="button">
             Pay
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;