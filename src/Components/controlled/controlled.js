import { useState } from "react";

const Controlled = () => {
  const [userName, setUserName] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

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

  const username = userName;

  function validatePassword(psw) {
    if (psw.length < 8 || psw.length > 13) {
      return "Password length must be between 8 and 13 characters";
    }
    if (!/[0-9]/.test(psw)) {
      return "Password must contain a number";
    }
    if(!/[!@#$%^&*(),.?":{}|<>]/.test(psw)){
        return "password must contain a special character"
    }
    if (psw === psw.toLowerCase() || psw === psw.toUpperCase()) {
      return "Password should contain both uppercase and lowercase letters";
    }
    if (psw.includes(username)) {
      return "Password should not contain the username";
    }
    return "";
  }

  const submitHandler=(event)=>{
    event.preventDefault()

    const userInfo={
        userName,password
    }
    console.log("userDetails",userInfo)

  }

  const isFormValid=()=>{
    return(
        userName.length>0 &&
        password.length>0 &&
        userNameError === "" &&
        passwordError === ""
    )
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="mb-3 mt-3">
          <label className="form-label">User Name:</label>
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Enter username"
            name="username"
            value={userName}
            onChange={userNameHandler}
            style={
              userNameError
                ? { border: "2px solid red" }
                : { border: "4px solid green" }
            }
          />
          {userNameError ? (
            <h4 style={{ color: "red" }}>{userNameError}</h4>
          ) : null}
        </div>
        <div className="mb-3">
          <label className="form-label">Password:</label>
          <input
            type="password"
            className="form-control"
            id="pwd1"
            placeholder="Enter password"
            value={password}
            onChange={passwordHandler}
            style={
              passwordError
                ? { border: "2px solid red" }
                : { border: "4px solid green" }
            }
          />
          {passwordError ? (
            <h4 style={{ color: "red" }}>{passwordError}</h4>
          ) : null}
        </div>
       
          <button type="submit" className="btn btn-primary" disabled={!isFormValid()}>
            Submit
          </button>
        
      </form>
    </>
  );
};

export default Controlled;
