import { useState } from "react";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const[email,setEmail]=useState("")
  const[emailError,setEmailError]=useState("")
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

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

  const emailHandler=(event)=>{
    setEmail(event.target.value)
    validateEmail(event.target.value)
    
  }

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
    const isValid = String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    setEmailError(isValid ? "" : "Invalid email format");
  };


  const submitHandler = (event) => {
    event.preventDefault();

    const userInfo = {
      userName,
      password,
    };
    console.log("userDetails", userInfo);
  };

  const isFormValid = () => {
    return (
      userName.length > 0 &&
      password.length > 0 &&
      userNameError === "" &&
      passwordError === "" &&
      emailError === "" &&
      confirmPasswordError === ""
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
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Gender:</label>
          <select id="gender" name="gender">
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
            style={
              userNameError
                ? { border: "2px solid red" }
                : { border: "4px solid green" }
            }
          />
          {userNameError?
          <h3 style={{color:"Red"}}>{userNameError}</h3>:null}
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
            style={
              emailError
                ? { border: "2px solid red" }
                : { border: "4px solid green" }
            }
          />
          {emailError?<h3 style={{color:"red"}}>{emailError}</h3>:null}

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
            style={
              passwordError
                ? { border: "2px solid red" }
                : { border: "4px solid green" }
            }
          />
          {passwordError?
          <h3 style={{color:"red"}}>{passwordError}</h3>:
          null}
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
            style={confirmPasswordError? { border: "2px solid red" }
            : { border: "4px solid green" }}
          />
          {confirmPasswordError?
          <h3 style={{color:"Red"}}>{confirmPasswordError}</h3>:null
          }

        </div>

        <button
          type="submit"
          className="btn btn-primary"
          disabled={!isFormValid}
        >
          Submit
        </button>
      </form>
    </>
  );
};
export default Register;
