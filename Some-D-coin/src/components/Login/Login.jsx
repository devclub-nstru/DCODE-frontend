import React, { useState, useCallback, useEffect } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { Mail, Lock, User } from "lucide-react";
import { signInWithGoogle } from "../../tools/firebase";
const API_URL = "http://localhost:4000/api/auth";
import { FcGoogle } from "react-icons/fc";
import "./Login.css"; // Import the CSS file

const LoginForm = ({ handleGoogleSignIn }) => (
  <form className="auth-form">
    <div className="google-signin">
      <button type="button" onClick={handleGoogleSignIn} className="google-btn">
        <FcGoogle className="google-icon" />
        <span className="google-text">Sign in with Google</span>
      </button>
    </div>
  </form>
);

const SignupForm = ({ handleGoogleSignIn }) => (
  <form className="auth-form">
    <div className="google-signin">
      <button type="button" onClick={handleGoogleSignIn} className="google-btn">
        <FcGoogle className="google-icon" />
        <span className="google-text">Sign up with Google</span>
      </button>
    </div>
  </form>
);

function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    setMessage({ text: "", isError: false });
  }, [isLogin]);

  const [message, setMessage] = useState({ text: "", isError: false });
  const [loading, setLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle(`${API_URL}/google`);
    } catch (error) {
      setMessage({
        text: "Google sign-in failed. Please try again.",
        isError: true,
      });
    }
  };

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <div className="auth-container">
        <div className="auth-box">
          <div className="auth-tabs">
            <div
              className={`auth-tab ${isLogin ? "active" : ""}`}
              onClick={() => setIsLogin(true)}
            >
              Login
            </div>
            <div
              className={`auth-tab ${!isLogin ? "active" : ""}`}
              onClick={() => setIsLogin(false)}
            >
              Sign Up
            </div>
          </div>

          <h1 className="auth-title">
            {isLogin ? "Welcome Back" : "Create Account"}
          </h1>

          {isLogin ? (
            <LoginForm handleGoogleSignIn={handleGoogleSignIn} />
          ) : (
            <SignupForm handleGoogleSignIn={handleGoogleSignIn} />
          )}

          <div className="auth-footer">
            {isLogin ? (
              <p>
                Don't have an account?{" "}
                <span className="auth-link" onClick={() => setIsLogin(false)}>
                  Sign up now
                </span>
              </p>
            ) : (
              <p>
                Already have an account?{" "}
                <span className="auth-link" onClick={() => setIsLogin(true)}>
                  Login here
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}

export default Auth;
