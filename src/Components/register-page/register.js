import { useState } from "react";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("male");

  const userNameHandler = (event) => {
    setUserName(event.target.value);
    if (event.target.value.length > 10) {
      setUserNameError("User name should be below 10 characters");
    } else {
      setUserNameError("");
    }
  };

  const passwordHandler = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    const errorMessage = validatePassword(newPassword);
    setPasswordError(errorMessage);
  };

  const emailHandler = (event) => {
    setEmail(event.target.value);
    const isValid = validateEmail(event.target.value);
    setEmailError(isValid ? "" : "Invalid Email format");
  };

  const firstNameHandler = (event) => {
    setFirstName(event.target.value);
  };

  const lastNameHandler = (event) => {
    setLastName(event.target.value);
  };

  const genderHandler = (event) => {
    setGender(event.target.value);
  };

  const username = userName;

  function validatePassword(psw) {
    if (psw.length < 8 || psw.length > 13) {
      return "Password length must be between 8 and 13 characters";
    }
    if (!/[0-9]/.test(psw)) {
      return "Password must contain a number";
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(psw)) {
      return "password must contain a special character";
    }
    if (psw === psw.toLowerCase() || psw === psw.toUpperCase()) {
      return "Password should contain both uppercase and lowercase letters";
    }
    if (psw.includes(username)) {
      return "Password should not contain the username";
    }
    return "";
  }
  const confirmPasswordHandler = (event) => {
    setConfirmPassword(event.target.value);
    if (password !== event.target.value) {
      setConfirmPasswordError("Passwords do not match");
    } else {
      setConfirmPasswordError("");
    }
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const existingUsers = JSON.parse(localStorage.getItem("data")) || [];
    const userExists = existingUsers.some(
      (user) => user.username === userName || user.email === email
    );

    if (userExists) {
      alert("User already registered");
      return;
    }
    const userInfo = { userName, password, email, firstName, lastName };
    existingUsers.push(userInfo);
    localStorage.setItem("data", JSON.stringify(existingUsers));
    console.log("User Details", userInfo);
  };

  const isFormValid = () => {
    return (
      userName.length > 0 &&
      password.length > 0 &&
      userNameError === "" &&
      passwordError === "" &&
      emailError === "" &&
      confirmPasswordError === "" &&
      firstName.length > 0 &&
      lastName.length > 0
    );
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label className="form-label">First Name:</label>
          <input
            type="text"
            className="form-control"
            id="f-name"
            placeholder="First Name"
            name="f-name"
            value={firstName}
            onChange={firstNameHandler}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Last Name:</label>
          <input
            type="text"
            className="form-control"
            id="l-name"
            placeholder="Last Name"
            name="l-name"
            value={lastName}
            onChange={lastNameHandler}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Gender:</label>
          <select
            id="gender"
            name="gender"
            value={gender}
            onChange={genderHandler}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
          </select>
        </div>

        <div className="mb-3 mt-3">
          <label className="form-label">User Name:</label>
          <input
            type="text"
            className="form-control"
            id="user-name"
            placeholder="Enter user name"
            name="username"
            value={userName}
            onChange={userNameHandler}
            style={userNameError ? { border: "3px solid red" } : null}
          />
          {userNameError ? (
            <h3 style={{ color: "Red" }}>{userNameError}</h3>
          ) : null}
        </div>

        <div className="mb-3 mt-3">
          <label className="form-label">Email:</label>
          <input
            type="email"
            className="form-control"
            id="e-mail"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={emailHandler}
            style={emailError ? { border: "3px solid red" } : null}
          />
          {emailError ? <h3 style={{ color: "red" }}>{emailError}</h3> : null}
        </div>
        <div className="mb-3">
          <label className="form-label">Password:</label>
          <input
            type="password"
            className="form-control"
            id="pwd1"
            placeholder="Enter password"
            name="pwd"
            value={password}
            onChange={passwordHandler}
            style={passwordError ? { border: "3px solid red" } : null}
          />
          {passwordError ? (
            <h3 style={{ color: "red" }}>{passwordError}</h3>
          ) : null}
        </div>
        <div className="mb-3">
          <label className="form-label">Confirm the Password:</label>
          <input
            type="password"
            className="form-control"
            id="Confirm-pwd"
            placeholder="Re-enter the password"
            name="confirm-pwd"
            value={confirmPassword}
            onChange={confirmPasswordHandler}
            style={confirmPasswordError ? { border: "2px solid red" } : null}
          />
          {confirmPasswordError ? (
            <h3 style={{ color: "Red" }}>{confirmPasswordError}</h3>
          ) : null}
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          disabled={!isFormValid()}
        >
          Submit
        </button>
      </form>
    </>
  );
};
export default Register;
