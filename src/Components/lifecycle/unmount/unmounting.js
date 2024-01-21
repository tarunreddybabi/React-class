import { Component, PureComponent } from "react";



class Unmounting extends Component{

    constructor(){
        super()
            this.state={
                isVisible:false,
                count:0

            }
        
    }

    handleVisible=()=>{
        this.setState({
            isVisible:!this.state.isVisible
        })
    }

    handleIncrement=()=>{
        this.setState({

            count:this.state.count+1
        })
    }

    // componentWillUnmount(){
    //     alert("I am removed")
    // }

    render(){

        return(
            <>
            <h2>Unmounting {this.state.count}</h2>

            <button onClick={this.handleVisible}>Click to alter me</button>
            <button onClick={this.handleIncrement}>Click to increment</button>
            {
                this.state.isVisible
                ?
                <>
                <h2>I am visible</h2>
                <Child/>
                </>
                :
                <h2>I am hidden</h2>

            }
            </>
            
        )
    }
}

export default Unmounting


class Child extends PureComponent{

    render(){
        return(
            <h2>I am children</h2>
        )
    }
}