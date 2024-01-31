
import Footer from "../../components/footer/footer";
import UseEffect1 from "../../components/hooks/use-effect/useEffect1";
import UseEffect2 from "../../components/hooks/use-effect/useEffect2";
import UseEffect3 from "../../components/hooks/use-effect/useEffect3";
import NavBar from "../../components/navBar/navBar";

const HomeScreen = () => {
  return (
    <>
      <NavBar />
      <UseEffect1/>
      <UseEffect2/>
      <UseEffect3/>
      <Footer/>
    </>
  );
};

export default HomeScreen;
