import { Component } from "react";

class ColorChange extends Component {
  state = {
    message1: "Color changed to dark theme",
    isChanged: false,
    message2: "Color changed to light theme",
  };

  handleColor = () => {
    this.setState(
      {
        message: "Color changed",
        isChanged: !this.state.isChanged,
      },
      () => {}
    );
  };

  render() {
    const backgroundColor = this.state.isChanged ? "white" : "black";
    return (
      <>
        <button
          style={{ backgroundColor }}
          className="button"
          onClick={this.handleColor}
        >
          {this.state.isChanged ? this.state.message2 : this.state.message1}
        </button>

        {<h2>Color Changed to {this.state.isChanged ? "light" : "dark"}</h2>}
      </>
    );
  }
}
export default ColorChange;
