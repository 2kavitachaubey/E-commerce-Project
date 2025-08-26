import React from "react";
import "../sign.css";
import Link from "next/link";

const LogIn = () => {
  return (
    <div className="login-container">
      <h1 className="login-title">Login to Your Account</h1>
      <div className="login-inputs">
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => e.target.value}
          className="login-input"
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => e.target.value}
          className="login-input"
        />
      </div>
      <div className="login-actions">
        <button className="login-btn">Log In</button>
        <Link href="/registerForm">
          <button className="register-btn">Register</button>
        </Link>
      </div>
    </div>
  );
};

export default LogIn;
