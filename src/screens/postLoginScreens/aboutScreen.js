import NavBar from "../../components/navBar/navBar";

const AboutScreen = () => {
  return (
    <>
      <NavBar />
      <h2>You're at About screen</h2>
      <form action="/action_page.php">
        <div className="mb-3 mt-3">
          <label className="form-label">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            name="email"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password:</label>
          <input
            type="password"
            className="form-control"
            id="pwd"
            placeholder="Enter password"
            name="pwd1"
          />
        </div>
        <div className="form-check mb-3">
          <label for="comment">Comments:</label>
          <textarea
            class="form-control"
            rows="5"
            id="comment"
            name="text"
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default AboutScreen;
