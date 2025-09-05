import React from "react";
import "../sign.css";
import Link from "next/link";
import { useState } from "react";

const LogIn = () => {
  const [viewPassword, setViewPassword] = useState(false);
  const handleViewPassword = () => {
    setViewPassword(!viewPassword);
  };
  return (
    <div className="login-page">
      <div className="login-container">
        <h1 className="login-title">Login to Your Account</h1>
        <div className="login-inputs">
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => e.target.value}
            className="login-input"
          />
          <div className="password-wrap">
            <input
              type={viewPassword ? "text" : "password"}
              placeholder="Password"
              onChange={(e) => e.target.value}
              className="login-input"
            />
            <span className="password-toggle" onClick={handleViewPassword}>
              👁
            </span>
          </div>
        </div>
        <div className="login-actions">
          <button className="login-btn">Log In</button>
          <Link href="/registerForm">
            <button className="register-btn">Register</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
