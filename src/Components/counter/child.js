// import { Component } from "react";




// class ChildButton extends Component {
//     render(){
//         return(
//             <button onClick={()=>this.props.increment()}>Increment by 1</button>
//         )
//     }
// }

const ChildButton=(increment)=>{
    return(
        <button onClick={()=>increment()}>Increment by 1 </button>
    )
}

export default ChildButton