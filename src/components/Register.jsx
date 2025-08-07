import React, { useEffect } from "react";
import { useState } from "react";

const Register = () => {
  const [registerDetail, setRegisterDetail] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const handleRegisteredDetail = (e) => {
    e.preventDefault();
    const { name, email, phoneNumber } = registerDetail;    //name : registerDetail.name - kavita
    if (name && email && phoneNumber) {
      localStorage.setItem("userDetails", JSON.stringify(registerDetail));
      setRegisterDetail({
        name: "",
        email: "",
        phoneNumber: "",
      });
    } else {
      return <h2>Please fill all the details</h2>;
    }
  };

  useEffect(() => {
    const data = localStorage.getItem("userDetails");
    if (data) {
      // setRegisterDetail(JSON.parse(data));
    }
  }, []);

  return (
    <div>
      <form onSubmit={handleRegisteredDetail}>
        <input
          type="text"
          placeholder="Full Name"
          value={registerDetail.name}
          onChange={(e) =>
            setRegisterDetail((prev) => ({ ...prev, name: e.target.value }))
          }
        />
        <input
          type="email"
          placeholder="Email"
          value={registerDetail.email}
          onChange={(e) =>
            setRegisterDetail((prev) => ({ ...prev, email: e.target.value }))
          }
        />
        <input
          type="tel"
          placeholder="Phone Number"
          pattern="[0-9]{10}"
          value={registerDetail.phoneNumber}
          onChange={(e) =>
            setRegisterDetail((prev) => ({
              ...prev,
              phoneNumber: e.target.value,
            }))
          }
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;
