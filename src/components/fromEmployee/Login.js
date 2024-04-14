import React, { useState } from "react";
import { getAllSignUp } from "../Services/SignUpServices";
import {Link,useNavigate} from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setMessage("Please enter both email and password.");
      return;
    }
    setLoading(true);
    try {
      const response = await getAllSignUp();
      const signUpDetails = response.data;
      const matchedSignUp = signUpDetails.find(
        (signUp) => signUp.email === email && signUp.password === password
      );

      if (matchedSignUp) {
        setMessage();
        navigate("/home");
      } else {
        setMessage("Incorrect email or password.");
      }
    } catch (error) {
      console.error("Error fetching sign-up details:", error);
      setMessage("An error occurred while logging in. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setEmail("");
    setPassword("");
    setMessage("");
  };

  return (
    <div className="text-center" style={{ marginBottom: "20px" }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: "10px" }}>
          <label style={{display: "inline-block",width: "100px",fontWeight: "bold",textAlign: "left",}}>Email</label>
          <input type="email" value={email} onChange={(e) => {setEmail(e.target.value);setMessage("");}}required style={{width: "300px",marginLeft: "30px",boxSizing: "border-box",}}/>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label style={{ display: "inline-block",width: "100px",fontWeight: "bold",textAlign: "left",}}>Password</label>
          <input type="password" value={password} onChange={(e) => { setPassword(e.target.value);setMessage("");}} required style={{width: "300px",marginLeft: "30px",boxSizing: "border-box",}}/>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button style={{backgroundColor: "blue",color: "white",marginRight: "5px",padding: "5px 10px",border: "none",fontSize: "14px",}}type="submit"disabled={loading}>
          {loading ? "Logging in..." : "Login"}
          </button>
          <button type="button" style={{backgroundColor: "red",color: "white",marginRight: "5px",padding: "5px 10px",border: "none",fontSize: "14px",}}onClick={handleClear}>Clear</button>
        </div>
      </form>
      {message && <p>{message}</p>}
      <p>New member? <Link to="/signup">Signup</Link></p>
    </div>
  );
};


export default Login;
