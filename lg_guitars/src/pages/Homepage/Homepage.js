// Homepage Component
import mainImg from "../../img/navbar2.jpg";

import guitarOne from "../../img/guitar8.jpg";
import guitarTwo from "../../img/guitar4.jpg";
import guitarThree from "../../img/guitar2 (2).jpg";
import guitarFour from "../../img/guitar10.jpg";
import bassOne from "../../img/basstest2.jpg";
import bassTwo from "../../img/bass2.jpg";

import NavBar from "../../Components/NavBar/NavBar";
import MainHeader from "../../Components/HomepageComponents/MainHeader/MainHeader";
import GuitarCardContainer from "../../Components/HomepageComponents/GuitarCardContainer/GuitarCardContainer";
import Footer from "../../Components/Footer/Footer";

function Home() {
  return (
    <div>
      <NavBar />
      <MainHeader mainImg={mainImg} />
      <GuitarCardContainer
        guitarOne={guitarOne}
        guitarTwo={guitarTwo}
        guitarThree={guitarThree}
        guitarFour={guitarFour}
        bassOne={bassOne}
        bassTwo={bassTwo}
      />
      <Footer />
    </div>
  );
}

export default Home;
