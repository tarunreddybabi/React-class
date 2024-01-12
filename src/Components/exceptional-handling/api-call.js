function ApiCall() {
  const fetchData = () => {
    try {
      fetch("https://fakestoreapi.com/products")
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
      <h2>Api Call 1</h2>
      <button className="button" onClick={fetchData}>
        Click Me to Fetch Data
      </button>
    </>
  );
}
export default ApiCall;
