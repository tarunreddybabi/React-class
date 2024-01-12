function ApiCall2() {
  const fetchData = () => {
    try {
      fetch("https://fakestoreapi.com/users")
        .then((response) => response.json())
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
      alert("something went wrong");
    } finally {
      console.log("stop loader");
      alert("data loaded");
    }
  };

  return (
    <>
      <h2>Api Call 2 </h2>
      <button className="button" onClick={fetchData}>
        Click
      </button>
    </>
  );
}

export default ApiCall2;
