import axios from "axios";
import { useEffect, useState } from "react";
import Spinners from "../../loaders/spinners";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const UseEffect1 = () => {
  const [productsListing, setProductsListing] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      if (response.status === 200) {
        setProductsListing(response.data);
      }
    });
  };

  return (
    <>
      <h1>Use effect effect example</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {productsListing.length > 0 ? (
          productsListing.map((product) => (
            <ProductListing key={product.id} data={product} />
          ))
        ) : (
          <Spinners />
        )}
      </div>
    </>
  );
};

export default UseEffect1;

const ProductListing = ({ data }) => {
  return (
    <>
      <div>
        <Card key={data.id} style={{ width: "18rem", margin: "10px" }}>
          <Card.Img
            variant="top"
            src={data.image}
            style={{ width: "140px", height: "160px" }}
          />
          <Card.Body>
            <Card.Title>{data.title}</Card.Title>
            <Card.Text>{data.description}</Card.Text>
            <Button variant="primary">Add to cart</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};
