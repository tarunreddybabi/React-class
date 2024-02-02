import { useContext } from "react";
import Mounting1 from "../../components/lifecycle/mounting/mounting";
import NavBar from "../../components/navBar/navBar";
import { DataShare } from "../../navigationStack/navigation";

const ProductsScreen = () => {
  const { darkTheme } = useContext(DataShare);

  return (
    <>
      <NavBar />
      <div
        style={{
          backgroundColor: darkTheme ? "black" : "#8ec5fc",
          color: darkTheme ? "white" : "black",
          backgroundImage: darkTheme
            ? null
            : "linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%)",
        }}
      >
        <h2>You're at Products screen</h2>
        <Mounting1 />
      </div>
    </>
  );
};

export default ProductsScreen;
