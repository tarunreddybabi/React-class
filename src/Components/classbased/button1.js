import { Component } from "react";





class ButtonComponent1 extends Component{
    state={
        message:"Subscribe",
        isSubscribed:false
    }

    handleSubscribe = ()=>{
        this.setState(
            {
                message:"Subscribed Thanks",
                isSubscribed:!this.state.isSubscribed
            },()=>{

            }
        )

    }
    render(){
        return (
            <button onClick={this.handleSubscribe}>{this.state.isSubscribed ? "Subscribed Thanks":"Subscribe"}</button>
        )
    }
}
export default ButtonComponent1