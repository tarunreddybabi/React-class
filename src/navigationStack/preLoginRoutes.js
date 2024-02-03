import { Route, Routes } from "react-router-dom"
import LoginScreen from "../screens/preLoginScreens/login"
import InvalidScreen from "../screens/invalidScreen"




const PreLogin=()=>{
    return(
        <>
         <Routes>
          <Route path="/" Component={LoginScreen}/>
          <Route path="*" Component={InvalidScreen} />
       
        </Routes>
        </>
    )
}
export default PreLogin