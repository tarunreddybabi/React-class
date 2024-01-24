import { useState } from "react";

const Circle = () => {
  const [circles, setCircles] = useState([]);

  const addCircle = () => {
    setCircles([...circles, false]);
  };

  const circleClick = (index) => {
    const updateCircles = circles.map((value, idx) =>
      idx === index ? !value : value
    );
    setCircles(updateCircles);
  };

  const clickedCirclesCount=circles.filter(value=>value).length


  return (
    <>
      <button onClick={addCircle}>Click to add Circle</button>
      <h2> Total Circle :  {circles.length} </h2>
      <h2>Circles clicked : {clickedCirclesCount}</h2>
      <h2>Circles not clicked : {circles.length-clickedCirclesCount}</h2>
      <div style={{display: "flex", flexWrap: "wrap", gap: "10px"}}>
      {circles.map((value, index) => (
        <div
          key={index}
          style={{
            height: "100px",
            width: "100px",
            border: "4px solid black",
            borderRadius: "50%",
            backgroundColor: value ? "red" : "black",
          }}
          onClick={() => circleClick(index)}
        ></div>
      ))}
      </div>
    </>
  );
};
export default Circle;
