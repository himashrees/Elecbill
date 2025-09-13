

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './Style.css';

// const EditProfilePage = ({ customerId }) => {
//   const [userDetails, setUserDetails] = useState(null);
//   const [updatedUserDetails, setUpdatedUserDetails] = useState({
//     name: '',
//     phone: '',
//     address: '',
//     email: '',
//   });
//   const [updateSuccess, setUpdateSuccess] = useState(false);

//   useEffect(() => {
//     const fetchUserDetails = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8080/electricity/id/${customerId}`);
//         setUserDetails(response.data);
//         setUpdatedUserDetails(response.data); // Set the initial form values to the fetched user details
//       } catch (error) {
//         console.error('Error occurred while fetching user details:', error);
//       }
//     };

//     fetchUserDetails();
//   }, [customerId]);

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setUpdatedUserDetails((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await axios.put(
//         `http://localhost:8080/electricity/change/${customerId}`,
//         updatedUserDetails
//       );

//       if (response.data) {
//         setUpdateSuccess(true); // Set updateSuccess to true if the profile update is successful
//       }
//     } catch (error) {
//       console.error('Error occurred during profile update:', error);
//     }
//   };

//   return (
//     <div className="edit-profile-page">
//       <h2>Edit Profile</h2>
//       {updateSuccess && <p className="success-message">Profile updated successfully!</p>}
//       {userDetails ? (
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label>Name:</label>
//             <input
//               type="text"
//               name="name"
//               value={updatedUserDetails.name}
//               onChange={handleInputChange}
//               className="input-field"
//             />
//             <p className="old-value">Old Name: {userDetails.name}</p>
//           </div>
//           <div className="form-group">
//             <label>Phone:</label>
//             <input
//               type="text"
//               name="phone"
//               value={updatedUserDetails.phone}
//               onChange={handleInputChange}
//               className="input-field"
//             />
//             <p className="old-value">Old Phone: {userDetails.phone}</p>
//           </div>
//           <div className="form-group">
//             <label>Address:</label>
//             <input
//               type="text"
//               name="address"
//               value={updatedUserDetails.address}
//               onChange={handleInputChange}
//               className="input-field"
//             />
//             <p className="old-value">Old Address: {userDetails.address}</p>
//           </div>
//           <div className="form-group">
//             <label>Email:</label>
//             <input
//               type="text"
//               name="email"
//               value={updatedUserDetails.email}
//               onChange={handleInputChange}
//               className="input-field"
//             />
//             <p className="old-value">Old Email: {userDetails.email}</p>
//           </div>
//           <button type="submit" className="button">Save</button>
//         </form>
//       ) : (
//         <p>Loading user details...</p>
//       )}
//     </div>
//   );
// };

// export default EditProfilePage;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Style.css';

const EditProfilePage = ({ customerId }) => {
  const [userDetails, setUserDetails] = useState(null);
  const [updatedUserDetails, setUpdatedUserDetails] = useState({
    name: '',
    phone: '',
    address: '',
    email: '',
  });
  const [updateSuccess, setUpdateSuccess] = useState(false);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/electricity/id/${customerId}`);
        setUserDetails(response.data);
        setUpdatedUserDetails(response.data); // Set the initial form values to the fetched user details
      } catch (error) {
        console.error('Error occurred while fetching user details:', error);
      }
    };

    fetchUserDetails();
  }, [customerId]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedUserDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.put(
        `http://localhost:8081/electricity/change/${customerId}`,
        updatedUserDetails
      );

      if (response.data) {
        setUpdateSuccess(true); // Set updateSuccess to true if the profile update is successful
      }
    } catch (error) {
      console.error('Error occurred during profile update:', error);
    }
  };

  return (
    <div className="login-container">
      <div className="background-image"></div>
      <div className="form-container">
        <h2 className="form-title">Edit Profile</h2>
        {updateSuccess && <p className="success-message">Profile updated successfully!</p>}
        {userDetails ? (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={updatedUserDetails.name}
                onChange={handleInputChange}
                className="input-field"
              />
             
            </div><br></br>
            <div className="form-group">
              <label>Phone:</label>
              <input
                type="text"
                name="phone"
                value={updatedUserDetails.phone}
                onChange={handleInputChange}
                className="input-field"
              />
              
            </div><br></br>
            <div className="form-group">
              <label>Address:</label>
              <input
                type="text"
                name="address"
                value={updatedUserDetails.address}
                onChange={handleInputChange}
                className="input-field"
              />
           
            </div><br></br>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="text"
                name="email"
                value={updatedUserDetails.email}
                onChange={handleInputChange}
                className="input-field"
              />
              
            </div><br></br>
            <button type="submit" className="button">Save</button>
          </form>
        ) : (
          <p>Loading user details...</p>
        )}
      </div>
    </div>
  );
};

export default EditProfilePage;
