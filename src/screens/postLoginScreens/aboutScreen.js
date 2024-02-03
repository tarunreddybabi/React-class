import { useContext } from "react";
import NavBar from "../../components/navBar/navBar";
import { DataShare } from "../../navigationStack/navigation";
import UseReducerExample from "../../components/hooks/useReducer/useReducer";

const AboutScreen = () => {
  const data = useContext(DataShare);
  const { name, darkTheme } = data;

  return (
    <>
      <NavBar />
      <UseReducerExample/>
      <div
        style={{
          backgroundColor: darkTheme ? "black" : "#8ec5fc",
          color: darkTheme ? "white" : "black",
          backgroundImage: darkTheme
            ? null
            : "linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%)",
        }}
      >
        <h2>You're at About screen</h2>
        <h3>I'm Globally managed by {name}</h3>
        <form action="/action_page.php">
          <div className="mb-3 mt-3">
            <label className="form-label">Name:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter name"
              name="name"
            />
          </div>
          <div className="form-check mb-3">
            <label htmlFor="comment">Comments:</label>
            <textarea
              className="form-control"
              rows="5"
              id="comment1"
              name="text1"
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default AboutScreen;
