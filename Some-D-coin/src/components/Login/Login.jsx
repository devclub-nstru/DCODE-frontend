import React, { useState } from 'react';
import { Mail, Lock, User } from 'lucide-react';

const styles = {
  authContainer: {
    minHeight: '85vh',
    background: 'linear-gradient(135deg, #004e92 0%, #000428 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  authForm: {
    background: 'white',
    padding: '2rem',
    borderRadius: '1rem',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
    width: '100%',
    maxWidth: '35rem',
    position: 'relative',
    minHeight: '35rem',
  },
  formTitle: {
    textAlign: 'center',
    marginBottom: '2rem',
    color: '#333',
    fontSize: '2rem',
    fontWeight: 600,
  },
  formGroup: {
    marginBottom: '1.5rem',
  },
  formInput: {
    width: '100%',
    minHeight: '4rem',
    padding: '0.75rem',
    paddingLeft: '2.5rem',
    border: '1px solid #ddd',
    borderRadius: '0.5rem',
    fontSize: '1rem',
    transition: 'border-color 0.2s',
    outline: 'none',
  },
  formButton: {
    width: '100%',
    padding: '0.75rem',
    background: '#0056b3',
    color: 'white',
    border: 'none',
    borderRadius: '0.5rem',
    fontSize: '1.5rem',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  },
  formLink: {
    color: '#0056b3',
    textDecoration: 'none',
    fontSize: '0.875rem',
    cursor: 'pointer',
  },
  authTabs: {
    display: 'flex',
    marginBottom: '2rem',
    borderBottom: '1px solid #ddd',
    fontSize: '1.25rem',
  },
  authTab: (isActive) => ({
    flex: 1,
    padding: '1rem',
    textAlign: 'center',
    cursor: 'pointer',
    color: isActive ? '#0056b3' : '#666',
    borderBottom: isActive ? '2px solid #0056b3' : 'none',
    transition: 'all 0.2s',
  }),
  formFooter: {
    textAlign: 'center',
    marginTop: '1.5rem',
    fontSize: '0.875rem',
    color: '#666',
  },
  iconContainer: {
    position: 'absolute',
    left: '0.75rem',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#666',
  },
  inputContainer: {
    position: 'relative',
  },
  forgotPassword: {
    textAlign: 'right',
    marginBottom: '1rem',
  },
};

function App() {
  const [isLogin, setIsLogin] = useState(true);

  const LoginForm = () => (
    <form onSubmit={(e) => e.preventDefault()}>
      <div style={styles.formGroup}>
        <div style={styles.inputContainer}>
          <input
            type="email"
            style={styles.formInput}
            placeholder="Email Address"
            required
          />
          <div style={styles.iconContainer}>
            <Mail size={20} />
          </div>
        </div>
      </div>
      <div style={styles.formGroup}>
        <div style={styles.inputContainer}>
          <input
            type="password"
            style={styles.formInput}
            placeholder="Password"
            required
          />
          <div style={styles.iconContainer}>
            <Lock size={20} />
          </div>
        </div>
      </div>
      <div style={styles.forgotPassword}>
        <a href="#" style={styles.formLink}>Forgot password?</a>
      </div>
      <button type="submit" style={styles.formButton}>
        Login
      </button>
    </form>
  );

  const SignupForm = () => (
    <form onSubmit={(e) => e.preventDefault()}>
      <div style={styles.formGroup}>
        <div style={styles.inputContainer}>
          <input
            type="text"
            style={styles.formInput}
            placeholder="Full Name"
            required
          />
          <div style={styles.iconContainer}>
            <User size={20} />
          </div>
        </div>
      </div>
      <div style={styles.formGroup}>
        <div style={styles.inputContainer}>
          <input
            type="email"
            style={styles.formInput}
            placeholder="Email Address"
            required
          />
          <div style={styles.iconContainer}>
            <Mail size={20} />
          </div>
        </div>
      </div>
      <div style={styles.formGroup}>
        <div style={styles.inputContainer}>
          <input
            type="password"
            style={styles.formInput}
            placeholder="Password"
            required
          />
          <div style={styles.iconContainer}>
            <Lock size={20} />
          </div>
        </div>
      </div>
      <button type="submit" style={styles.formButton}>
        Sign Up
      </button>
    </form>
  );

  return (
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
          {isLogin ? 'Welcome Back' : 'Create Account'}
        </h1>
        
        {isLogin ? <LoginForm /> : <SignupForm />}
        
        <div style={styles.formFooter}>
          {isLogin ? (
            <p>
              Don't have an account?{' '}
              <span style={styles.formLink} onClick={() => setIsLogin(false)}>
                Sign up now
              </span>
            </p>
          ) : (
            <p>
              Already have an account?{' '}
              <span style={styles.formLink} onClick={() => setIsLogin(true)}>
                Login here
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;