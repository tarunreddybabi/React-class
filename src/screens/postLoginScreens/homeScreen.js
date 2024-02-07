import { useState, useEffect, useContext } from "react";
import Footer from "../../components/footer/footer";
import NavBar from "../../components/navBar/navBar";
import axios from "axios";
import Spinners from "../../components/loaders/spinners";
import { Link } from "react-router-dom";
import { DataShare } from "../../navigationStack/navigation";
// import useAxios from "../../components/hooks/custom-hooks/useAxios";

const HomeScreen = () => {
  const [productsListing, setProductsListing] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const { darkTheme, changeTheme } = useContext(DataShare);
  // const [productsListing]=useAxios()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        if (response.status === 200) {
          setProductsListing(response.data);
          const result = sumOfPrice(response.data);
          setTotalPrice(result);
        }
      } catch (error) {
        console.error("There was an error!", error);
      }
    };

    fetchData();
  }, []);

  const sumOfPrice = (arrayOfObjects) => {
    return arrayOfObjects.reduce(
      (initial, eachObject) => initial + eachObject.price,
      0
    );
  };

  const controlTheme = () => {
    changeTheme();
  };

  return (
    <>
    
       <NavBar />
      <div style={{ paddingLeft: "95%" }}>
        <button onClick={controlTheme}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/4489/4489231.png"
            alt="ThemeIcon"
            height="50px"
            width="50px"
          />
        </button>
      </div>

      <div
        style={{
          backgroundColor: darkTheme ? "black" : "#8ec5fc",
          color: darkTheme ? "white" : "black",
          backgroundImage: darkTheme
            ? null
            : "linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%)",
        }}
      >
        <h2>Total value of product : ₹ {totalPrice}</h2>
        {productsListing?.length > 0 ? (
          productsListing.map((product) => (
            <ProductListingComponent
              key={product.id}
              data={product}
              setTotalPrice={setTotalPrice}
              totalPrice={totalPrice}
            />
          ))
        ) : (
          <Spinners />
        )}
        <Footer />
      </div>
    </>
  );
};

export default HomeScreen;

const ProductListingComponent = ({ data, setTotalPrice, totalPrice }) => {
  const [count, setCount] = useState(1);
  const productTotalPrice = data.price * count;

  useEffect(() => {
    setTotalPrice(
      (prevTotal) => prevTotal + (productTotalPrice - data.price * count)
    );
  }, [count, data.price, productTotalPrice, setTotalPrice]);

  const handleIncrement = () => {
    setCount(count + 1);
    setTotalPrice((prevTotal) => prevTotal + data.price);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
      setTotalPrice((prevTotal) => prevTotal - data.price);
    }
  };

  return (
    <>
      <div>
        <h3>{data.title}</h3>
        <img src={data.image} alt={data.category} height="120" width="150" />
        <br /> <br />
        <Link to={`/productListView/${data.id}`}>
          <button>Click to view Product</button>
        </Link>
        <br />
        <br />
        <h3>Price : ₹ {productTotalPrice}</h3>
        <button onClick={handleIncrement}>
          <b>+</b>
        </button>
        <span style={{ margin: "7px" }}>
          <b>{count}</b>
        </span>
        <button onClick={handleDecrement}>
          <b>-</b>
        </button>
        <hr />
      </div>
    </>
  );
};
