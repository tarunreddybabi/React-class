import { Component } from "react";
import { Audio } from 'react-loader-spinner'




class Spinners extends Component{

    render(){
        return(
           
<Audio
  height="400"
  width="400"
  radius="9"
  color="green"
  ariaLabel="three-dots-loading"
  wrapperStyle
  wrapperClass
/>
        )
    }
}
export default Spinners