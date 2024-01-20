import ChildButton from "./child";

const { Component } = require("react");



class Counter extends Component{

    constructor(){
        super()
        this.state={
            count:0
        }
    }

    handleIncrement=()=>{
        this.setState(
            {
                count:this.state.count+1
            }
        )
    }
    render(){
        return(
            <>
            <h4>Counter</h4>
            <h4>{this.state.count}</h4>
            <ChildButton  increment={this.handleIncrement} />
            </>
        )
    }
}

export default Counter