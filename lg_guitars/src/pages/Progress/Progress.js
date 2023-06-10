// Component for Progress Page

import NavBar from "../../Components/NavBar/NavBar";
import ProcessHeader from "../../Components/ProcessComponents/ProcessHeader/ProcessHeader";
import ProcessContainer from "../../Components/ProcessComponents/ProcessContainer/ProcessContainer";
import Footer from "../../Components/Footer/Footer";

import processImage1 from "../../img/design.jpg";
import processImage2 from "../../img/Design 2.jpg";
import processImage3 from "../../img/build1.jpg";
import processImage4 from "../../img/build.jpg";
import processImage5 from "../../img/Electronics 1.jpg";
import processImage6 from "../../img/electrics3.jpg";
import processImage7 from "../../img/Finishing 1.jpg";
import processImage8 from "../../img/finishing2.jpg";

function Process() {
  return (
    <div>
      <NavBar />
      <ProcessHeader />
      <ProcessContainer
        processImage1={processImage1}
        processImage2={processImage2}
        processImage3={processImage3}
        processImage4={processImage4}
        processImage5={processImage5}
        processImage6={processImage6}
        processImage7={processImage7}
        processImage8={processImage8}
      />
      <Footer />
    </div>
  );
}

export default Process;
