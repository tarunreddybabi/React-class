const { Component } = require("react");





class UpdatePhase extends Component{


    constructor(){
        super()
        this.state={
            count:1,
            color:"red"
        }
    }

    handleClick=()=>{
        this.setState({
            count:this.state.count+1
        })
    }


    static getDerivedStateFromProps(props){

        return {color:props.favColor}
    }


    getSnapshotBeforeUpdate(props,state){
        console.log(state);
    }

    shouldComponentUpdate(){
        return 1
    }

    componentDidUpdate(){
        document.title=`count ${this.state.count}`
        fetch(`https://fakestoreapi.com/products/${this.state.count}`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      });
    }

    render(){
        return(
            <>
            <h2 style={{color:this.state.color}}>Updating phase</h2>
            <h2>{this.state.count}</h2>
            <button onClick={this.handleClick}>Click me to Increment</button>
            </>
        )
    }

}

export default UpdatePhase