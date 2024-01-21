import { Spinner } from "react-bootstrap";
import Fidget from "../../loaders/fidget";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const { Component } = require("react");

class Mounting1 extends Component {
  constructor() {
    super();
    this.state = {
      message: "Good Morning",
      color: "blue",
      products: [],
    };
  }

  static getDerivedStateFromProps(props) {
    return { color: props.color };
  }

  componentDidMount() {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          products: response,
        });
      });
  }

  render() {
    return (
      <>
        <h3 style={{ color: this.state.color }}>
          Mounting {this.state.message}
        </h3>
        {this.state.products.length > 0 ? (
          <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
            {this.state.products.map((data) => (
              
                  <Card  key={data.id} style={{ width: "18rem",margin:"10px" }}>
                    <Card.Img
                      variant="top"
                      src={data.image}
                      style={{ width: "140px",height:"160px" }}
                    />
                    <Card.Body>
                      <Card.Title>{data.title}</Card.Title>
                      <Card.Text>{data.description}</Card.Text>
                      <Button variant="primary">Add to cart</Button>
                    </Card.Body>
                  </Card>
            ))}
            </div>
        ) : (
          <>
            <Spinner />
            <Fidget />
          </>
        )}
      </>
    );
  }
}

export default Mounting1;
