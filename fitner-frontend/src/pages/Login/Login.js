import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
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
    } finally {
    }
  };

  return (
    <div className="login-container">
      <h1>
        <title> Login </title>
      </h1>
      <div className="login-content">
        <div className="login-form">
          <h2 className="login-title">Login to your account</h2>

          <form onSubmit={handleSubmit}>
            <div className="login-input-group">
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
            <div className="login-input-group">
              <label>Password</label>
              <div className="login-input-icon">
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

            {errorMessage && <div className="login-error">{errorMessage}</div>}

            <button type="submit" className="login-button" disabled={loading}>
              {loading && <div className="login-loader"></div>}
              Login
            </button>
          </form>

          <div className="login-signup">
            <p>Don't have an account?</p>
            <Link to="/signup">
              <a href="">Sign up here</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
