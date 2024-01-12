import { Component } from "react";

class ImageChange extends Component {
  state = {
    message1: "Image Changed",
    isChanged: false,
    message2: "Image does not changed ",
  };

  handleImageChange = () => {
    this.setState(
      {
        message: "Image changed",
        isChanged: !this.state.isChanged,
      },
      () => {}
    );
  };

  render() {
    const imgSrc = this.state.isChanged
      ? "https://t3.ftcdn.net/jpg/06/86/53/54/240_F_686535496_NJZPOItPSuCsKIrCy9DUFEnkDgzlHv5n.jpg"
      : "https://t3.ftcdn.net/jpg/06/31/63/48/240_F_631634854_23KKTsNTLvJdBpC991rLzmSCQRdfqHFz.jpg";
    return (
      <>
        <button className="button" onClick={this.handleImageChange}>
          {this.state.isChanged ? this.state.message2 : this.state.message1}
        </button>
        <br />
        <br />

        <img src={imgSrc} alt="New Year" />
        {<h2>Image Changed to {this.state.isChanged ? "Second" : "First"}</h2>}
      </>
    );
  }
}
export default ImageChange;
