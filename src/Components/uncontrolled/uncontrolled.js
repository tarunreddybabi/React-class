import { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Uncontrolled = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const [error,setError]=useState("")

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(usernameRef.current.value);
    console.log(passwordRef.current.value);
    if (passwordRef.current.value.length < 5) {
      alert("Password should be minimum 6 characters");
    } else {

        const userInfo={
            username:usernameRef.current.value,
            password:passwordRef.current.value
        }
        hitServer(userInfo)
    }
  };

  const hitServer = (data) => {
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(res=>
        {if(res.message){
          
          setError(res.message)
        }else{
          alert("successfully login")
          setError("")
        }
        console.log(res)})
      .catch(err=>console.log(err))
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Username"
            ref={usernameRef}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            ref={passwordRef}
          />
        </Form.Group>

        {
          error?
          <h2 style={{color:"red"}}>{error}</h2>:
          null
        }
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default Uncontrolled;
