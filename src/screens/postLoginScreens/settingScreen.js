import { useContext } from "react";
import NavBar from "../../components/navBar/navBar";
import { DataShare } from "../../navigationStack/navigation";
// import ParentMemo from "../../components/reactMemo/parent";
// import ParentUseMemo from "../../components/hooks/useMemo/parentUseMemo";
import UseCallbackExample from "../../components/hooks/useCallback/parent";

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
        {/* <ParentMemo/> */}
        {/* <ParentUseMemo/> */}
        <UseCallbackExample/>
      </div>
    </>
  );
};

export default SettingsScreen;
