
import React, { useState } from 'react';
import axios from 'axios';
import './Style.css';

const UpdatePassword = ({ customerId }) => {
  const [passwordDetails, setPasswordDetails] = useState({
    oldPassword: '',
    newPassword: '',
  });
  const [updateSuccess, setUpdateSuccess] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPasswordDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handlePasswordUpdate = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.put(
        `http://localhost:8081/electricity/change/${customerId}/password`,
        passwordDetails
      );

      if (response.data) {
        setUpdateSuccess(true); // Set updateSuccess to true if the password update is successful
      }
    } catch (error) {
      console.error('Error occurred during password update:', error);
    }
  };

  return (
    <div className="login-container">
      <div className="background-image"></div>
      <div className="form-container">
        <h3>Update Password</h3>
        {updateSuccess && <p className="success-message">Password updated successfully!</p>}
        <form onSubmit={handlePasswordUpdate}>
          <div className="form-group">
            <label>Old Password:</label>
            <input
              type="password"
              name="oldPassword"
              value={passwordDetails.oldPassword}
              onChange={handleInputChange}
              className="input-field"
            />
          </div><br></br>
          <div className="form-group">
            <label>New Password:</label>
            <input
              type="password"
              name="newPassword"
              value={passwordDetails.newPassword}
              onChange={handleInputChange}
              className="input-field"
            />
          </div><br></br>
          <button type="submit" className="button">Update Password</button><br></br>
        </form>
      </div>
    </div>
  );
};

export default UpdatePassword;
