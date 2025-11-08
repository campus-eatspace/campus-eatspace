import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TextField from "../components/InputField";
import Button from "../components/CustomButton";
import Footer from "../components/Footer";
import logo from "../assets/logo.png";
import google from "../assets/google.png";
import "../style/auth.css";
import { useAuth } from "../context/AuthContext";

const RegisterAs: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberDevice, setRememberDevice] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const { signUp, signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleSignUp = async () => {
    setError("");
    setSuccess("");

    if (!name || !email || !password) {
      setError("Please fill in all fields");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    setIsLoading(true);

    try {
      await signUp(email, password, name, 'vendor');
      setSuccess("Account created successfully! Please check your email to verify your account.");
      
      // Redirect to login after 2 seconds
      setTimeout(() => {
        navigate("/vendor/login");
      }, 2000);
    } catch (err: any) {
      setError(err.message || "Failed to create account. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignUpGoogle = async () => {
    setError("");
    try {
      await signInWithGoogle('vendor');
      // Redirect will be handled by Supabase
    } catch (err: any) {
      setError(err.message || "Failed to sign up with Google.");
    }
  };

  return (
    <div
      className="position-relative"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
      ></div>

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

                {error && (
                  <div className="alert alert-danger" role="alert">
                    {error}
                  </div>
                )}

                {success && (
                  <div className="alert alert-success" role="alert">
                    {success}
                  </div>
                )}

                <div>
                  <TextField
                    label="Vendor Name"
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={setName}
                    required
                    disabled={isLoading}
                  />

                  <TextField
                    label="Email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={setEmail}
                    required
                    disabled={isLoading}
                  />

                  <TextField
                    label="Password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={setPassword}
                    required
                    disabled={isLoading}
                  />

                  <div className="form-check mb-4">
                    <input
                      className="form-check-input bg-transparent border-secondary"
                      type="checkbox"
                      id="rememberDevice"
                      checked={rememberDevice}
                      onChange={(e) => setRememberDevice(e.target.checked)}
                      disabled={isLoading}
                    />
                    <label
                      className="form-check-label text-white small"
                      htmlFor="rememberDevice"
                    >
                      Remember this Device
                    </label>
                  </div>

                  <div className="sign">
                    <Button
                      text={isLoading ? "Creating Account..." : "Sign Up"}
                      onClick={handleSignUp}
                      className="mb-3 signup"
                      disabled={isLoading}
                    />
                  </div>
                </div>

                <div className="divider-with-text">
                  <div className="line"></div>
                  <span>or sign up with</span>
                  <div className="line"></div>
                </div>

                <div className="text-center mb-4">
                  <button
                    className="btn p-2"
                    onClick={handleSignUpGoogle}
                    style={{ width: "40px", height: "40px" }}
                    disabled={isLoading}
                  >
                    <img
                      src={google}
                      alt="Google"
                      style={{ width: "40px", height: "40px" }}
                    />
                  </button>
                </div>

                <div className="text-center">
                  <span className="text-white-50 small">Have an account? </span>
                  <Link to="/vendor/login">
                    <button
                      className="btn login btn-link p-0 text-warning text-decoration-none small"
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

      <Footer />
      <br />
    </div>
  );
};

export default RegisterAs;