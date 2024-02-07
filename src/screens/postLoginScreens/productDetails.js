import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../../components/navBar/navBar";
import Spinners from "../../components/loaders/spinners";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import useAxios from "../../components/hooks/custom-hooks/useAxios";
const ProductDetails = () => {
  const [productDetails, setProductDetails] = useState({});
  const routeInformation = useParams();

  // const[productDetails]= useAxios(`https://fakestoreapi.com/products/${routeInformation.id}`)


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
        <Card  key={productDetails.id} style={{ width: "18rem",margin:"10px" }}>
                    <Card.Img
                      variant="top"
                      src={productDetails.image}
                      style={{ width: "140px",height:"160px" }}
                    />
                    <Card.Body>
                      <Card.Title>{productDetails.title}</Card.Title>
                      <Card.Text>{productDetails.description}</Card.Text>
                      <Card.Text><b>Price : ₹{productDetails.price}</b></Card.Text>
                      <Button variant="primary">Add to cart</Button>
                    </Card.Body>
                  </Card>
        </>
      ) : (
        <Spinners />
      )}
    
    </>
  );
};

export default ProductDetails;
