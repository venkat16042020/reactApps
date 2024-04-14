import React, { useState } from "react";
import { createSignUp } from "../Services/SignUpServices";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [isSignedUp, setIsSignedUp] = useState(false); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
   
    setIsSignedUp(false);
    setError("");
  };

  const handleClear = () => {
    setFormData({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    setError("");
    setIsSignedUp(false); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Password and confirm password do not match");
      setIsSignedUp(false);
      return;
    }

    try {
      const signupData = {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
      };
      const response = await createSignUp(signupData);
      console.log(response.data);
      setIsSignedUp(true); 
      setError(""); 
    } catch (error) {
      console.error("Error creating signup:", error);
      setError("An error occurred during sign up."); 
      setIsSignedUp(false); 
    }
  };

  return (
    <div className="text-center" style={{ marginBottom: '20px' }}>
      <h5>Signup Here</h5>
      <form onSubmit={handleSubmit}>
        {/* Username input */}
        <div style={{ marginBottom: "10px" }}>
          <label style={{ display: 'inline-block', width: '100px', fontWeight: 'bold', textAlign: 'left' }}>Username:</label>
          <input type="text" id="username" name="username" value={formData.username} onChange={handleInputChange} required style={{ width: '300px', marginLeft: '10px' }}/>
        </div>
        {/* Email input */}
        <div style={{ marginBottom: "10px" }}>
          <label style={{ display: 'inline-block', width: '100px', fontWeight: 'bold', textAlign: 'left' }}>Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required style={{ width: '300px', marginLeft: '10px' }}/>
        </div>
        {/* Password input */}
        <div style={{ marginBottom: "10px" }}>
          <label style={{ display: 'inline-block', width: '100px', fontWeight: 'bold', textAlign: 'left' }}>Password:</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleInputChange} required style={{ width: '300px', marginLeft: '10px' }}/>
        </div>
        {/* Confirm Password input */}
        <div style={{ marginBottom: "10px" }}>
          <label style={{ display: 'inline-block', width: '100px', fontWeight: 'bold', textAlign: 'left' }}>Confirm Password:</label>
          <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} required style={{ width: '300px', marginLeft: '10px' }}/>
        </div>
        {/* Submit and Clear buttons */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button type="submit" style={{ backgroundColor: "blue", color: "white", marginRight: "5px", padding: "5px 10px", border: "none" }}>Submit</button>
          <button type="button" onClick={handleClear} style={{ backgroundColor: "red", color: "white", padding: "5px 10px", border: "none" }}>Clear</button>
        </div>
        {/* Error and Success Messages */}
        {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
        {isSignedUp && <p style={{ color: "green", marginTop: "10px" }}>You have signed up successfully!</p>}
      </form>
    </div>
  );
};

export default Signup;


