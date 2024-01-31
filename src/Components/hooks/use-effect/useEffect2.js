import { useEffect, useState } from "react";

const UseEffect2 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const updateCounterValue = () => {
      document.title = `Count ${count}`;
    };

    updateCounterValue();
  }, [count]);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>UseEffect-2 {count} </h1>
      <button onClick={handleIncrement}>Click to update</button>
    </>
  );
};
export default UseEffect2;
