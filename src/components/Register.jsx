import React from "react";
import { useState } from "react";

const Register = () => {
  const [ registerDetail, setRegisterDetail ] = useState({
    name : "",
    email : "",
    phoneNumber: ""
  });
  const [registeredData, setRegisteredData] = useState([]);

  const handleRegisteredData = (e) =>{
    e.preventDefault;
    setRegisteredData((data) => [...data,registerDetail])
  }
  console.log(registeredData)
  return (
    <div>
      <form onSubmit={handleRegisteredData}>
        <input
          type="text"
          placeholder="Full Name"
          onChange={(e) =>
            setRegisterDetail((prev) => ({...prev,  name: e.target.value }))
          }
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) =>
            setRegisterDetail((prev) => ({...prev,  email: e.target.value }))
          }
        />
        <input
          type="tel"
          placeholder="Phone Number"
          pattern="[0-9]{10}"
          onChange={(e) =>
            setRegisterDetail((prev) => ({...prev,  phoneNumber: e.target.value }))
          }
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;
