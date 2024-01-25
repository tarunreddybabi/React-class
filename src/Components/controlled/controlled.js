import { useState } from "react";

const Controlled = () => {

    const[userName,setUserName]=useState("")
    const userNameHandler=(event)=>{
        console.log(event.target.value)
        setUserName(event.target.value)
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
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password:</label>
          <input
            type="password"
            className="form-control"
            id="pwd1"
            placeholder="Enter password"
          />
        </div>
      </form>
    </>
  );
};

export default Controlled;
