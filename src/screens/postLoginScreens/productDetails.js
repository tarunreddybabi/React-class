import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../../components/navBar/navBar";
import Spinners from "../../components/loaders/spinners";

const ProductDetails = () => {
  const [productDetails, setProductDetails] = useState({});

  const routeInformation = useParams();
  useEffect(() => {
    fetchEachProduct(routeInformation.id);
  }, [routeInformation.id]);

  const fetchEachProduct = (id) => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((response) => {
      if (response.status === 200) {
        setProductDetails(response.data);
      } else {
        alert("request failed");
      }
    });
  };

  return (
    <>
      <NavBar />
      {Object.keys(productDetails).length > 0 ? (
        <>
          <h2>{productDetails.category}</h2>
        </>
      ) : (
        <Spinners />
      )}
    
    </>
  );
};

export default ProductDetails;
