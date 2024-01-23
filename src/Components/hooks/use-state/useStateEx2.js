import React, { useState } from "react";

const UseStateExample2 = () => {
  const [current, setCurrent] = useState([
    {
      id: 1,
      name: "James",
      salary: 50000,
    },
    {
      id: 2,
      name: "Nelson",
      salary: 55000,
    },
  ]);

  const incrementSalary = (id) => {
    setCurrent(
      current.map((current) =>
        current.id === id
          ? { ...current, salary: current.salary + 1000 }
          : current
      )
    );
  };

  const decrementSalary = (id) => {
    setCurrent(
      current.map((current) =>
        current.id === id
          ? { ...current, salary: current.salary - 1000 }
          : current
      )
    );
  };

  return (
    <>
      {current.map((value) => (
        <React.Fragment key={value.id}>
          <h3>{value.name}</h3>
          <h3>{value.salary}</h3>
          <button onClick={() => incrementSalary(value.id)}>
            Increment salary
          </button>
          <button onClick={() => decrementSalary(value.id)}>
            Decrement salary
          </button>
        </React.Fragment>
      ))}
    </>
  );
};
export default UseStateExample2;
