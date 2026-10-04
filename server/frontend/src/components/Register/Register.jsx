import React, { useState } from "react";
import "./Register.css";
import user_icon from "../assets/person.png";
import email_icon from "../assets/email.png";
import password_icon from "../assets/password.png";
import close_icon from "../assets/close.png";

const Register = () => {
  // State variables for form inputs
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");

  // Redirect to home
  const gohome = () => {
    window.location.href = window.location.origin;
  };

  // Handle form submission
  const register = async (e) => {
    e.preventDefault();

    let register_url = window.location.origin + "/djangoapp/register";

    // Send POST request to register endpoint
    const res = await fetch(register_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "userName": userName,
        "password": password,
        "firstName": firstName,
        "lastName": lastName,
        "email": email
      }),
    });

    const json = await res.json();

    if (json.status) {
      // Save username in session and reload home
      sessionStorage.setItem("username", json.userName);
      window.location.href = window.location.origin;
    }
    else if (json.error === "Already Registered") {
      alert("The user with same username is already registered");
      window.location.href = window.location.origin;
    }
  };

  return (
    <div className="register_page">
      <div className="register_container">

        <div className="register_header">
          <div>
            <span className="register_label">DEALERSHIPS</span>
            <h1>Create an account</h1>
            <p>Register to explore dealerships, vehicles and reviews.</p>
          </div>

          <a href="/" onClick={gohome} className="close_button">
            <img src={close_icon} alt="Close" />
          </a>
        </div>

        <form onSubmit={register}>
          <div className="register_form">

            <div className="form_field">
              <label htmlFor="username">Username</label>
              <div className="input_box">
                <img src={user_icon} alt="" />
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Username"
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
            </div>

            <div className="form_row">

              <div className="form_field">
                <label htmlFor="first_name">First Name</label>
                <div className="input_box">
                  <img src={user_icon} alt="" />
                  <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    placeholder="First name"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
              </div>

              <div className="form_field">
                <label htmlFor="last_name">Last Name</label>
                <div className="input_box">
                  <img src={user_icon} alt="" />
                  <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    placeholder="Last name"
                    onChange={(e) => setlastName(e.target.value)}
                  />
                </div>
              </div>

            </div>

            <div className="form_field">
              <label htmlFor="email">Email Address</label>
              <div className="input_box">
                <img src={email_icon} alt="" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="name@example.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="form_field">
              <label htmlFor="password">Password</label>
              <div className="input_box">
                <img src={password_icon} alt="" />
                <input
                  type="password"
                  id="password"
                  name="psw"
                  placeholder="Create a password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

          </div>

          <button className="register_button" type="submit">
            Create Account
          </button>
        </form>

        <p className="register_note">
          Your account gives you access to the Dealerships platform and its services.
        </p>

      </div>
    </div>
  );
};

export default Register;