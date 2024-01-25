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
    setPassword(event.target.value);
    const result = validatePassword(event.target.value);
    if (result) {
      console.log("password valid");
      console.log(event.target.value);
      setPasswordError("");
    } else {
      setPasswordError("password invalid");
      console.log(event.target.value);

    }
  };

  const username = "john1";

  function validatePassword(psw) {
    let msg = true;

    switch (true) {
      case psw.length < 8 || psw.length > 13:
        msg = false;
        break;
      case !/[0-9]/.test(psw):
        msg = false;
        break;
      case psw === psw.toLowerCase() || psw === psw.toUpperCase():
        msg = false;
        break;
      case psw.includes(username):
        msg = false;
        break;
      default:
        msg = true;
    }
    return msg;
  }

  return (
    <>
      <form>
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
            style={userNameError ? { border: "2px solid red" } : {border:"2px solid green"}}
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
            style={passwordError ?{border:"2px solid red"}:{border:"2px solid green"} }
          />
          {passwordError ? <h4 style={{color:"red"}}>{passwordError}</h4> : null}
        </div>
        {userNameError || passwordError ? null : (
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        )}
      </form>
    </>
  );
};

export default Controlled;
