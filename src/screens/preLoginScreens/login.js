import NavBar from "../../components/navBar/navBar";

const LoginScreen = () => {
  return (
    <>
      <NavBar />
      <form action="/action_page.php">
        <div className="mb-3 mt-3">
          <label className="form-label">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email1"
            placeholder="Enter email"
            name="email1"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password:</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            name="pwd1"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};
export default LoginScreen;
