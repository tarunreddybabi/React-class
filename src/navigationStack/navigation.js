import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "../screens/postLoginScreens/home";
import ProductsScreen from "../screens/postLoginScreens/product";
import SettingsScreen from "../screens/postLoginScreens/setting";
import AboutScreen from "../screens/postLoginScreens/aboutScreen";
import InvalidScreen from "../screens/invalidScreen";

const NavigationStack = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" Component={HomeScreen} />
        <Route path="/product" Component={ProductsScreen} />
        <Route path="/setting" Component={SettingsScreen} />
        <Route path="/about" Component={AboutScreen} />
        <Route path="*" Component={InvalidScreen} />
      </Routes>
    </BrowserRouter>
  );
};

export default NavigationStack;
