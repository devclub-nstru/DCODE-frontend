import React, { useState, useCallback, useEffect } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { Mail, Lock, User } from "lucide-react";
import { signInWithGoogle } from "../../tools/firebase";
const API_URL = "http://localhost:4000/api/auth";
import { FcGoogle } from "react-icons/fc";

const styles = {
  authContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  authForm: {
    background: "rgb(25, 25, 25)",
    padding: "2rem",
    borderRadius: "1rem",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
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
  },
  formLink: {
    color: "#0056b3",
    fontSize: "1rem",
    textDecoration: "none",
    // fontSize: '0.875rem',
    cursor: "pointer",
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

const LoginForm = ({
  formData,
  handleInputChange,
  handleSubmit,
  loading,
  message,
  isLogin,
  handleGoogleSuccess,
  handleGoogleFailure,
}) => (
  <form className="w-[25rem]" onSubmit={(f) => f.preventDefault()}>
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginBottom: "1rem",
      }}
    >
      <div className="w-full h-full">
        <button
          type="submit"
          onClick={() => signInWithGoogle(API_URL + "/google")}
          className="flex cursor-pointer items-center gap-[1rem] justify-center w-full h-[3rem] py-3 px-4 border-2 border-gray-300 rounded-lg shadow-sm bg-white hover:bg-gray-200 transition duration-200"
        >
          <FcGoogle className="text-2xl mr-2" />
          <span className="font-medium text-black">Sign in with Google</span>
        </button>
      </div>
    </div>
  </form>
);

const SignupForm = ({
  formData,
  handleInputChange,
  handleSubmit,
  loading,
  message,
  isLogin,
  handleGoogleSuccess,
  handleGoogleFailure,
}) => (
  <form onSubmit={(f) => f.preventDefault()} className="w-[25rem]">
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginBottom: "1rem",
      }}
    >
      <div className="w-full h-full">
        <button
          type="button"
          onClick={() => signInWithGoogle(API_URL + "/google")}
          className="flex cursor-pointer items-center gap-[1rem] justify-center w-full h-[3rem] py-3 px-4 border-2 border-gray-300 rounded-lg shadow-sm bg-white hover:bg-gray-200 transition duration-200"
        >
          <FcGoogle className="text-2xl mr-2" />
          <span className="font-medium text-black">Sign up with Google</span>
        </button>
      </div>
    </div>
  </form>
);

function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    setFormData({
      username: "",
      email: "",
      password: "",
    });
    setMessage({ text: "", isError: false });
  }, [isLogin]);

  const [message, setMessage] = useState({ text: "", isError: false });
  const [loading, setLoading] = useState(false);

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
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

        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        setMessage({
          text: isLogin ? "Login successful!" : "Account created successfully!",
          isError: false,
        });

        console.log("Authentication successful:", data);
      } catch (error) {
        setMessage({
          text: error.message || "An error occurred",
          isError: true,
        });
      } finally {
        setLoading(false);
      }
    },
    [isLogin, formData]
  );

  const handleGoogleSuccess = useCallback(async (credentialResponse) => {
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

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      setMessage({
        text: "Google login successful!",
        isError: false,
      });

      console.log("Google authentication successful:", data);
    } catch (error) {
      setMessage({
        text: error.message || "An error occurred",
        isError: true,
      });
    } finally {
      setLoading(false);
    }
  }, []);

  const handleGoogleFailure = useCallback((error) => {
    console.error("Google Sign-In Error:", error);
    setMessage({
      text: "Google sign-in failed. Please try again.",
      isError: true,
    });
  }, []);

  return (
    <GoogleOAuthProvider clientId="853600226454-f3v5fo9iuhmf9d635gojskp6kufi3fjj.apps.googleusercontent.com">
      <div style={styles.authContainer}>
        <div style={styles.authForm}>
          <div style={styles.authTabs}>
            <div
              style={styles.authTab(isLogin)}
              onClick={() => setIsLogin(true)}
            >
              Login
            </div>
            <div
              style={styles.authTab(!isLogin)}
              onClick={() => setIsLogin(false)}
            >
              Sign Up
            </div>
          </div>

          <h1 style={styles.formTitle}>
            {isLogin ? "Welcome Back" : "Create Account"}
          </h1>

          {isLogin ? (
            <LoginForm
              formData={formData}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
              loading={loading}
              message={message}
              isLogin={isLogin}
              handleGoogleSuccess={handleGoogleSuccess}
              handleGoogleFailure={handleGoogleFailure}
            />
          ) : (
            <SignupForm
              formData={formData}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
              loading={loading}
              message={message}
              isLogin={isLogin}
              handleGoogleSuccess={handleGoogleSuccess}
              handleGoogleFailure={handleGoogleFailure}
            />
          )}

          <div style={styles.formFooter}>
            {isLogin ? (
              <p>
                Don't have an account?{" "}
                <span
                  style={{ color: "#0056b3", cursor: "pointer" }}
                  onClick={() => setIsLogin(false)}
                >
                  Sign up now
                </span>
              </p>
            ) : (
              <p>
                Already have an account?{" "}
                <span
                  style={{ color: "#0056b3", cursor: "pointer" }}
                  onClick={() => setIsLogin(true)}
                >
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
