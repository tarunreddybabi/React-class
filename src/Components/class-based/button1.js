import { Component } from "react";

class ButtonComponent1 extends Component {
  state = {
    message1: "Subscribe",
    isSubscribed: false,
    message2: "Subscribed Thanks",
  };

  handleSubscribe = () => {
    this.setState(
      {
        message: "Subscribed Thanks",
        isSubscribed: !this.state.isSubscribed,
      },
      () => {}
    );
  };
  render() {
    return (
      <>
        <button className="button" onClick={this.handleSubscribe}>
          {this.state.isSubscribed ? this.state.message2 : this.state.message1}
        </button>

        {this.state.isSubscribed ? (
          <h2>Thanks for Subscribing</h2>
        ) : (
          <h2>Please Subscribe</h2>
        )}
      </>
    );
  }
}
export default ButtonComponent1;
