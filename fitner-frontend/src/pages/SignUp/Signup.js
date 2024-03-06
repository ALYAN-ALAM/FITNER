import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faFont } from "@fortawesome/free-solid-svg-icons";
import "./Signup.css";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrorMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
    } catch (error) {
      setErrorMessage("Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <h1>
        <title> Signup </title>
      </h1>
      <div className="signup-content">
        <div className="signup-form">
          <h2 className="signup-title">Sign up for a new account</h2>

          <form onSubmit={handleSubmit}>
            <div className="signup-input-group">
              <label>Full Name</label>
              <div className="signup-input-icon">
                <FontAwesomeIcon icon={faFont} />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full Name"
                  required
                />
              </div>
            </div>
            <div className="signup-input-group">
              <label>Email Address</label>
              <div className="login-input-icon">
                <FontAwesomeIcon icon={faEnvelope} />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>
            <div className="signup-input-group">
              <label>Password</label>
              <div className="signup-input-icon">
                <FontAwesomeIcon icon={faLock} />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>

            {errorMessage && <div className="signup-error">{errorMessage}</div>}

            <button type="submit" className="signup-button" disabled={loading}>
              {loading && <div className="signup-loader"></div>}
              Sign up
            </button>
          </form>

          <div className="signup-login">
            <p>Already have an account?</p>
            <Link to="/login">
              <a href="">Login here</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
