import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "../screens/postLoginScreens/homeScreen";
import ProductsScreen from "../screens/postLoginScreens/productScreen";
import SettingsScreen from "../screens/postLoginScreens/settingScreen";
import AboutScreen from "../screens/postLoginScreens/aboutScreen";
import InvalidScreen from "../screens/invalidScreen";
import ProductDetails from "../screens/postLoginScreens/productDetails";

const NavigationStack = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" Component={HomeScreen} />
        <Route path="/products" Component={ProductsScreen} />
        <Route path="/setting" Component={SettingsScreen} />
        <Route path="/about" Component={AboutScreen} />
        <Route path="*" Component={InvalidScreen} />
        <Route path="/productListView/:id"  Component={ProductDetails}/>
      </Routes>
    </BrowserRouter>
  );
};

export default NavigationStack;
