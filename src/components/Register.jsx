import React, { useEffect } from "react";
import { useState } from "react";
import { Country, State, City } from "country-state-city";
import "../sign.css";
import { useInfo } from "@/lib/formContext";

const Register = () => {
  const { registerDetail, setFormValues } = useInfo();
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");

  const [fillValue, setFillValue] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const savedData = localStorage.getItem("userDetails");
    if (savedData) {
      console.log("Previously saved data:", JSON.parse(savedData));
    }
  }, []);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    setCountries(Country.getAllCountries());
  }, []);

  useEffect(() => {
    if (selectedCountry) {
      setStates(State.getStatesOfCountry(selectedCountry));
    }
  }, [selectedCountry]);

  useEffect(() => {
    if (selectedState) {
      setCities(City.getCitiesOfState(selectedCountry, selectedState));
    }
  }, [selectedCountry, selectedState]);

  const handleRegisteredDetail = (e) => {
    e.preventDefault();
    const { firstname, lastname, email, phoneNumber, dob, password } =
      registerDetail; //name : registerDetail.name - kavita
    if (!firstname || !lastname || !email || !phoneNumber || !password) {
      setFillValue(true);
      return;
    }
    localStorage.setItem("userDetails", JSON.stringify(registerDetail));
    console.log(registerDetail);
    // setIsAuthenticated(true);
    // setSelectedCountry("");
    // setSelectedState("");
    // setCities([]);
    // setStates([]);
    setFillValue(false);
  };

  return (
    <div className="register-container">
      <h1 className="form-title">Sign Up</h1>
      <form className="register-form" onSubmit={handleRegisteredDetail}>
        <div className="form-group">
          <input
            className={`form-input ${fillValue ? "not-filled" : ""}`}
            type="text"
            name="firstname"
            placeholder="First Name *"
            value={registerDetail.firstname}
            onChange={(e) => setFormValues(e)}
          />
        </div>

        <div className="form-group">
          <input
            className={`form-input ${fillValue ? "not-filled" : ""}`}
            type="text"
            name="lastname"
            placeholder="Last Name *"
            value={registerDetail.lastname}
            onChange={(e) => setFormValues(e)}
          />
        </div>

        <div className="form-group password-wrap">
          <input
            className={`form-input ${
              fillValue ? "not-filled" : ""
            } password-input`}
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password *"
            pattern="^(?=.*\d)(?=.*[@$!%*?&#])[a-z\d@$!%*?&#]{8,}$"
            title="Password must be at least 8 characters,include a number, and a special character"
            value={registerDetail.password}
            onChange={(e) => setFormValues(e)}
          />
          <span className="password-toggle" onClick={handleShowPassword}>
            👁
          </span>
        </div>

        <div className="form-group">
          <input
            className={`form-input ${fillValue ? "not-filled" : ""}`}
            type="email"
            name="email"
            placeholder="Email *"
            value={registerDetail.email}
            onChange={(e) => setFormValues(e)}
          />
        </div>

        <div className="form-group">
          <input
            className={`form-input ${fillValue ? "not-filled" : ""}`}
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number *"
            pattern="[0-9]{10}"
            value={registerDetail.phoneNumber}
            onChange={(e) => setFormValues(e)}
          />
        </div>

        <div className="form-group">
          <p>Gender:</p>
          <div className="gender-group">
            <label className="radio-label">
              <input
                className="radio-input"
                type="radio"
                name="gender"
                value="Male"
                checked={registerDetail.gender === "Male"}
                onChange={(e) => setFormValues(e)}
              />
              Male
            </label>
            <label className="radio-label">
              <input
                className="radio-input"
                type="radio"
                name="gender"
                value="Female"
                checked={registerDetail.gender === "Female"}
                onChange={(e) => setFormValues(e)}
              />
              Female
            </label>
            <label className="radio-label">
              <input
                className="radio-input"
                type="radio"
                name="gender"
                value="Other"
                checked={registerDetail.gender === "Other"}
                onChange={(e) => setFormValues(e)}
              />
              Other
            </label>
          </div>
        </div>

        <div className="form-group">
          <p>Date of Birth:</p>
          <input
            className="form-input"
            type="date"
            name="dob"
            placeholder="Date of Birth"
            value={registerDetail.dob}
            onChange={(e) => setFormValues(e)}
          />
        </div>

        <div className="form-group">
          <div>
            <p>Country:</p>
            <select
              className="form-select"
              name="country"
              onChange={(e) => {
                setFormValues(e);
                setSelectedCountry(e.target.value);
              }}
              value={registerDetail.country}
            >
              <option value=""></option>
              {countries.map((country, index) => (
                <option key={index} value={country.isoCode}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <p>State:</p>
            <select
              className="form-select"
              name="state"
              onChange={(e) => {
                setFormValues(e);
                setSelectedState(e.target.value);
              }}
              value={registerDetail.state}
            >
              <option value=""></option>
              {states.map((state, index) => (
                <option key={index} value={state.isoCode}>
                  {state.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <p>City:</p>
            <select
              className="form-select"
              name="city"
              onChange={(e) => setFormValues(e)}
              value={registerDetail.city}
            >
              <option value=""></option>
              {cities.map((city, index) => (
                <option key={index} value={city.name}>
                  {city.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-group">
          <textarea
            className="form-textarea"
            name="address"
            placeholder="Address"
            value={registerDetail.address}
            onChange={(e) => setFormValues(e)}
            rows="2"
            cols="50"
          />
        </div>

        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
