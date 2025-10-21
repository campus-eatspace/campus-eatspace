import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextField from "../components/InputField";
import Button from "../components/CustomButton";
import Footer from "../components/Footer";
import logo from "../assets/logo.png";
import google from "../assets/google.png";
import "../style/auth.css";

// Main Login Component
const RegisterAs: React.FC = () => {
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberDevice, setRememberDevice] = useState(false);

  const handleSignUp = () => {
    console.log("Sign up clicked", { email, password, rememberDevice });
  };

  const handleSignUpGoogle = () => {
    console.log("Sign up with Google clicked");
  };

  const handleLoginRedirect = () => {
    console.log("Login redirect clicked");
  };

  return (
    <div
      className="position-relative "
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Background overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
      ></div>

      {/* Main content */}
      <div className="container-fluid box h-100 position-relative">
        <div className="row justify-content-center align-items-center min-vh-100">
          <div className="col-md-8 col-lg-6">
            <div
              className="card border-0 shadow-lg"
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(15px)",
                borderRadius: "15px",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                marginBottom: "100px",
                marginTop: "40px",
              }}
            >
              <div className="card-body p-4">
                {/* Logo */}
                <div className="text-center mb-4">
                  <div
                    className="d-inline-flex align-items-center justify-content-center mb-3"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "12px",
                    }}
                  >
                    <span style={{ fontSize: "24px" }}>
                      <img
                        src={logo}
                        alt="Logo"
                        style={{ width: "60px", height: "60px" }}
                      />
                    </span>
                  </div>
                  <h4 className="text-white fw-bold mb-1">
                    Create your account
                  </h4>
                  <p className="text-white-50 small">
                    Welcome! Please enter your details to register
                  </p>
                </div>

                {/* Form */}
                <div>
                  <TextField
                    label="Vendor Name"
                    type="text"
                    placeholder="Enter your name"
                    value={text}
                    onChange={setText}
                    required
                  />

                  <TextField
                    label="Email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={setEmail}
                    required
                  />

                  <TextField
                    label="Password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={setPassword}
                    required
                  />

                  {/* Remember Device Checkbox */}
                  <div className="form-check mb-4">
                    <input
                      className="form-check-input bg-transparent border-secondary"
                      type="checkbox"
                      id="rememberDevice"
                      checked={rememberDevice}
                      onChange={(e) => setRememberDevice(e.target.checked)}
                    />
                    <label
                      className="form-check-label text-white small"
                      htmlFor="rememberDevice"
                    >
                      Remember this Device
                    </label>
                  </div>

                  {/* Sign Up Button */}
                  <div className="sign">
                    <Button
                      text="Sign Up"
                      onClick={handleSignUp}
                      className="mb-3 signup"
                    />
                    <Button
                      text={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-chevron-down"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                          />
                        </svg>
                      }
                      onClick={handleSignUp}
                      className="mb-3 as"
                    />
                  </div>
                </div>

                {/* Divider */}
                <div className="divider-with-text">
                  <div className="line"></div>
                  <span>or sign up with</span>
                  <div className="line"></div>
                </div>

                {/* Google Sign Up Button */}
                <div className="text-center mb-4">
                  <button
                    className="btn p-2"
                    onClick={handleSignUpGoogle}
                    style={{ width: "40px", height: "40px" }}
                  >
                    <img
                      src={google}
                      alt="Google"
                      style={{ width: "40px", height: "40px" }}
                    />
                  </button>
                </div>

                {/* Login Link */}
                <div className="text-center">
                  <span className="text-white-50 small">Have an account? </span>
                  <Link to="/vendor/login">
                    <button
                      className="btn login btn-link p-0 text-warning text-decoration-none small"
                      onClick={handleLoginRedirect}
                    >
                      Log in
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
      <br />
    </div>
  );
};

export default RegisterAs;
