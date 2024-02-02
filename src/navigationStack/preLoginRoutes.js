import { Route, Routes } from "react-router-dom"
import LoginScreen from "../screens/preLoginScreens/login"




const PreLogin=()=>{
    return(
        <>
         <Routes>
          <Route path="/" Component={LoginScreen}/>
       
        </Routes>
        </>
    )
}
export default PreLogin