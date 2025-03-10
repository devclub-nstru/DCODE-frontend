import React, { useState } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { Mail, Lock, User } from "lucide-react";

const API_URL = "http://localhost:3005/api/auth";

const styles = {
  authContainer: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  authForm: {
    background: "rgb(25, 25, 25)",
    padding: "2rem",
    borderRadius: "1rem",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
    width: "100%",
    maxWidth: "35rem",
    position: "relative",
    minHeight: "35rem",
  },
  formTitle: {
    textAlign: "center",
    marginBottom: "2rem",
    color: "#fff",
    fontSize: "2rem",
    fontWeight: 500,
  },
  formGroup: {
    marginBottom: "1.5rem",
  },
  formInput: {
    width: "100%",
    minHeight: "4rem",
    padding: "0.75rem",
    paddingLeft: "2.5rem",
    border: "1px solid #ddd",
    borderRadius: "0.5rem",
    fontSize: "1rem",
    transition: "border-color 0.2s",
    outline: "none",
  },
  formButton: {
    width: "100%",
    padding: "0.75rem",
    background: "#0056b3",
    color: "white",
    border: "none",
    borderRadius: "0.5rem",
    fontSize: "1.5rem",
    cursor: "pointer",
    transition: "background-color 0.2s",
    marginBottom: "1rem",
  },
  authTabs: {
    display: "flex",
    marginBottom: "2rem",
    borderBottom: "1px solid #ddd",
    fontSize: "1.25rem",
  },
  authTab: (isActive) => ({
    flex: 1,
    padding: "1rem",
    textAlign: "center",
    cursor: "pointer",
    fontWeight: "600",
    color: isActive ? "#0056b3" : "#999",
    borderBottom: isActive ? "4px solid #0056b3" : "none",
    transition: "all 0.2s",
  }),
  formFooter: {
    textAlign: "center",
    marginTop: "1.5rem",
    fontSize: "1rem",
    color: "#666",
  },
  inputContainer: {
    position: "relative",
  },
  errorMessage: {
    color: "#e74c3c",
    marginTop: "0.5rem",
    fontSize: "0.9rem",
  },
  successMessage: {
    color: "#2ecc71",
    marginTop: "0.5rem",
    fontSize: "0.9rem",
  },
};

function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState({ text: "", isError: false });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ text: "", isError: false });

    try {
      const endpoint = isLogin ? `${API_URL}/signin` : `${API_URL}/signup`;
      const dataToSend = isLogin
        ? { email: formData.email, password: formData.password }
        : formData;

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Authentication failed");
      }

      // Save token and redirect or update UI
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      
      setMessage({
        text: isLogin ? "Login successful!" : "Account created successfully!",
        isError: false,
      });
      
      // Redirect logic would go here
      console.log("Authentication successful:", data);
      
    } catch (error) {
      setMessage({
        text: error.message || "An error occurred",
        isError: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    setLoading(true);
    setMessage({ text: "", isError: false });

    try {
      const response = await fetch(`${API_URL}/google`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ tokenId: credentialResponse.credential }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Google authentication failed");
      }

      // Save token and redirect
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      
      setMessage({
        text: "Google login successful!",
        isError: false,
      });
      
      // Redirect logic would go here
      console.log("Google authentication successful:", data);
      
    } catch (error) {
      setMessage({
        text: error.message || "An error occurred",
        isError: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleFailure = (error) => {
    console.error("Google Sign-In Error:", error);
    setMessage({
      text: "Google sign-in failed. Please try again.",
      isError: true,
    });
  };

  const LoginForm = () => (
    <form onSubmit={handleSubmit}>
      <div style={styles.formGroup}>
        <div style={styles.inputContainer}>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            style={styles.formInput}
            placeholder="Email Address"
            required
          />
          <Mail size={20} style={{ position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)" }} />
        </div>
      </div>
      <div style={styles.formGroup}>
        <div style={styles.inputContainer}>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            style={styles.formInput}
            placeholder="Password"
            required
          />
          <Lock size={20} style={{ position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)" }} />
        </div>
      </div>
      <button type="submit" style={styles.formButton} disabled={loading}>
        {loading ? "Processing..." : "Login"}
      </button>
      
      <div style={{ width: "100%", display: "flex", justifyContent: "center", marginBottom: "1rem" }}>
        <div style={{ width: "100%" }}>
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={handleGoogleFailure}
            text={isLogin ? "signin_with" : "signup_with"}
            size="large"
            width="100%"
          />
        </div>
      </div>
      
      {message.text && (
        <div style={message.isError ? styles.errorMessage : styles.successMessage}>
          {message.text}
        </div>
      )}
    </form>
  );

  const SignupForm = () => (
    <form onSubmit={handleSubmit}>
      <div style={styles.formGroup}>
        <div style={styles.inputContainer}>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            style={styles.formInput}
            placeholder="Username"
            required
          />
          <User size={20} style={{ position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)" }} />
        </div>
      </div>
      <div style={styles.formGroup}>
        <div style={styles.inputContainer}>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            style={styles.formInput}
            placeholder="Email Address"
            required
          />
          <Mail size={20} style={{ position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)" }} />
        </div>
      </div>
      <div style={styles.formGroup}>
        <div style={styles.inputContainer}>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            style={styles.formInput}
            placeholder="Password"
            required
          />
          <Lock size={20} style={{ position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)" }} />
        </div>
      </div>
      <button type="submit" style={styles.formButton} disabled={loading}>
        {loading ? "Processing..." : "Sign Up"}
      </button>
      
      <div style={{ width: "100%", marginBottom: "1rem" }}>
      <GoogleLogin
        onSuccess={handleGoogleSuccess}
        onError={handleGoogleFailure}
        text={isLogin ? "signin_with" : "signup_with"}
        size="large"
        width="100%"
      />
    </div>

      
      {message.text && (
        <div style={message.isError ? styles.errorMessage : styles.successMessage}>
          {message.text}
        </div>
      )}
    </form>
  );

  return (
    <GoogleOAuthProvider clientId="853600226454-f3v5fo9iuhmf9d635gojskp6kufi3fjj.apps.googleusercontent.com">
      <div style={styles.authContainer}>
        <div style={styles.authForm}>
          <div style={styles.authTabs}>
            <div style={styles.authTab(isLogin)} onClick={() => setIsLogin(true)}>Login</div>
            <div style={styles.authTab(!isLogin)} onClick={() => setIsLogin(false)}>Sign Up</div>
          </div>

          <h1 style={styles.formTitle}>{isLogin ? "Welcome Back" : "Create Account"}</h1>

          {isLogin ? <LoginForm /> : <SignupForm />}

          <div style={styles.formFooter}>
            {isLogin ? (
              <p>
                Don't have an account?{" "}
                <span style={{ color: "#0056b3", cursor: "pointer" }} onClick={() => setIsLogin(false)}>Sign up now</span>
              </p>
            ) : (
              <p>
                Already have an account?{" "}
                <span style={{ color: "#0056b3", cursor: "pointer" }} onClick={() => setIsLogin(true)}>Login here</span>
              </p>
            )}
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}

export default Auth;
