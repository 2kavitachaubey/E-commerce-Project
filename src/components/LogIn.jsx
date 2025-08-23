import React from "react";
import "../global.css";
import Link from "next/link";

const LogIn = () => {
  return (
    <div>
      <h1>Log In</h1>
      
      <Link href="/registerForm">
        <button className="square-btn">Register</button>
      </Link>
    </div>
  );
};

export default LogIn;
