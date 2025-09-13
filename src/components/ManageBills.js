import React, { useState } from 'react';
import axios from 'axios';
import PaymentPage from './PaymentPage';
import './Style.css';

const BillsPage = ({ bills, loggedInCustomerId }) => {
  const [selectedBillId, setSelectedBillId] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handlePay = (billId) => {
    setSelectedBillId(billId);
  };

  const handlePaymentSuccess = () => {
    setPaymentSuccess(true);
  };

  const handlePayment = async (billId) => {
    handlePay(null);
    handlePaymentSuccess();
  };

  // Filter unpaid bills
  const unpaidBills = bills.filter((bill) => bill.status === 'N');

  return (
    <div>
      <h3>Bills</h3>
      {unpaidBills.length > 0 ? (
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>Bill ID</th>
                <th>Met No</th>
                <th>Date</th>
                {/* <th>Status</th> */}
                <th>Amount</th>
                <th>Click button to pay</th>
              </tr>
            </thead>
            <tbody>
              {unpaidBills.map((bill) => (
                <tr key={bill.id}>
                  <td>{bill.id}</td>
                  <td>{bill.metno}</td>
                  <td>{bill.date}</td>
                  {/* <td>{bill.status}</td> */}
                  <td>{bill.amount} /- Rs</td>
                  <td>
                    <button onClick={() => handlePay(bill.id)}>Pay Now</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {selectedBillId && (
            <PaymentPage
              loggedInCustomerId={loggedInCustomerId}
              billId={selectedBillId}
              handlePayment={handlePayment}
            />
          )}
          {paymentSuccess && (
            <div className="success-message">
              Payment successful! Refresh the page to see the updated bill status.
            </div>
          )}
        </div>
      ) : (
        <div>No unpaid bills found.</div>
      )}
    </div>
  );
};

export default BillsPage;