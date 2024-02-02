import { useContext } from "react";
import NavBar from "../../components/navBar/navBar";
import { DataShare } from "../../navigationStack/navigation";

const SettingsScreen = () => {
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
        <h2>You're at Settings screen</h2>
      </div>
    </>
  );
};

export default SettingsScreen;
