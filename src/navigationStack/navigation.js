import { BrowserRouter } from "react-router-dom";
import { createContext, useState } from "react";
import PostLogin from "./postLoginRoutes";
import PreLogin from "./preLoginRoutes";

export const DataShare = createContext();

const NavigationStack = () => {
  const [name] = useState("Tarun");
  const [darkTheme, setDarkTheme] = useState(false);
  const [login, setLogin] = useState(true);

  const changeTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const loginTrue=()=>{
    setLogin(true)
  }

  return (
    <DataShare.Provider value={{ name, darkTheme, changeTheme,loginTrue}}>
      <BrowserRouter>{login ? <PostLogin /> : <PreLogin />}</BrowserRouter>
    </DataShare.Provider>
  );
};

export default NavigationStack;
