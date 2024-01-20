import { Component } from "react";
import { FidgetSpinner } from 'react-loader-spinner'



class Fidget extends Component{

    
  render(){
    return(
  <FidgetSpinner
    visible={true}
    height="80"
    width="80"
    ariaLabel="fidget-spinner-loading"
    wrapperStyle={{}}
    wrapperClass="fidget-spinner-wrapper"
    />
  )}
}

export default Fidget