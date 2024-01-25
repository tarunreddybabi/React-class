import { useState } from "react";

const InputCircles = () => {
  const [numberOfCircles, setNumberOfCircles] = useState(0);

  const submitHandler = (event) => {
    event.preventDefault();
    const result = parseInt(event.target.elements["add-circle"].value);
    if (!isNaN(result) && result >= 1 && result <= 50) {
      setNumberOfCircles(result);
    } else {
      alert("Enter values between 1 to 50");
    }
  };

  const renderCircles = () => {
    return [...Array(numberOfCircles)].map((_, index) => (
      <h2
        key={index}
        style={{
          height: "100px",
          width: "100px",
          border: "4px solid darkblue",
          borderRadius: "50%",
        }}
      >
        {" "}
      </h2>
    ));
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label className="form-label">Enter a number</label>
          <input
            type="text"
            className="form-control"
            id="add-circle"
            placeholder="Enter values between 1 to 50"
            name="add-circle"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          click to add circles
        </button>
      </form>
      <div style={{ display: "flex", flexWrap: "wrap" }}>{renderCircles()}</div>
    </>
  );
};
export default InputCircles;
