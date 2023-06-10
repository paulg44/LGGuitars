// Component for Process Container

import "./ProcessContainer.css";
import ProcessContent from "../ProcessContent/ProcessContent";

/* ICONS AND REVERSE ALTERNATE CONTENT */

function ProcessContainer({
  processImage1,
  processImage2,
  processImage3,
  processImage4,
  processImage5,
  processImage6,
  processImage7,
  processImage8,
}) {
  return (
    <div className="process">
      <ProcessContent
        h3="Design"
        content="Thorough research is carried out to ensure the finished instrument
            has good feel/playability. After many years of building guitars I
            try to achieve the feeling of an instrument that is unique and an
            extention of the player."
        img={processImage1}
        alt="image1"
        imgTwo={processImage2}
        altTwo="image2"
      />
      <ProcessContent
        h3="Build"
        content="All my instruments are built with particular emphasis placed on
            reducing the use of power tools where possible. All jigs, fixtures
            and most of the special tools used have been fabricated by myself to
            my own requirements."
        img={processImage3}
        alt="alt3"
        imgTwo={processImage4}
        altTwo="image4"
      />
      <ProcessContent
        h3="Electrics"
        content="The components used in the tone, volume and pick-up switching
            circuits are high quality items, CTS pot's for example. The wiring
            loom is built on a dummy jig and fully tested before assembly into
            the instrument."
        img={processImage5}
        alt="image5"
        imgTwo={processImage6}
        altTwo="image6"
      />
      <ProcessContent
        h3="Finishing"
        content="Usually up to 10 coats of clear lacquer is applied to electric
            instruments. If a burst or other tinted finished is required this is
            applied by hand before lacquering. Acoustic instruments are given a
            minimal application of Danish oil."
        img={processImage7}
        alt="image7"
        imgTwo={processImage8}
        altTwo="image8"
      />
    </div>
  );
}

export default ProcessContainer;
