import { useState, useEffect } from "react";
import Footer from "../../components/footer/footer";
import NavBar from "../../components/navBar/navBar";
import axios from "axios";
import Spinners from "../../components/loaders/spinners";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  const [productsListing, setProductsListing] = useState([]);
  const [totalPrice, setTotalPrice] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get("https://fakestoreapi.com/products")
        .then((response) => {
          if (response.status === 200) {
            setProductsListing(response.data);
            const result = sumOfPrice(response.data);
            setTotalPrice(result);
          }
        })
        .catch((error) => console.error("There was an error!", error));
    };
  
    fetchData();
  }, []);

  const sumOfPrice = (arrayOfObjects) => {
    const result = arrayOfObjects.reduce(
      (initial, eachObject) => initial + eachObject.price,
      0
    );
    return result;
  };

  return (
    <>
      <NavBar />
      <h2>Total value of product : {totalPrice}</h2>
      {productsListing.length > 0 ? (
        productsListing.map((product) => (
          <ProductListingComponent key={product.id} data={product} />
        ))
      ) : (
        <Spinners />
      )}
      <Footer />
    </>
  );
};

export default HomeScreen;

const ProductListingComponent = ({ data }) => {
  return (
    <>
      <div>
        <h3>{data.title}</h3>
        <Link to={`/productListView/${data.id}`}>
          <button>Click to view Product</button>
        </Link>
      </div>
    </>
  );
};