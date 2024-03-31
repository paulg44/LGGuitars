// Component for Guitar Card Container
import "./GuitarCardContainer.css";
import GuitarCard from "../GuitarCard/GuitarCard";

function GuitarCardContainer({
  props,
  guitarOne,
  guitarTwo,
  guitarThree,
  guitarFour,
  bassOne,
  bassTwo,
}) {
  return (
    <section className="showcase">
      <div className="container">
        <div className="showcase-header">
          <h3 className="section-title">
            Welcome to LG <span className="text-third">G</span>uitars
          </h3>
          <p>
            Here at LG Guitars we design and hand build custom guitars from
            concept to completion. No two guitars are the same. Here are some of
            the guitars we have built over the years.
          </p>
        </div>
        <div className="img-grid" data-testid="imageGrid">
          <GuitarCard
            img={guitarOne}
            alt="guitar1"
            p="Flamed Maple, S/S Bridge"
          />
          <GuitarCard
            img={guitarTwo}
            alt="guitar2"
            p="SG, Mahogany, Gold Hardware"
          />
          <GuitarCard
            img={guitarThree}
            alt="guitar3"
            p="Chambered Super Strat"
          />
          <GuitarCard
            img={guitarFour}
            alt="guitar4"
            p="Parlour. Solid Spruce Top"
          />
          <GuitarCard img={bassOne} alt="bass1" p="Heavy Relic 52 P Bass" />
          <GuitarCard img={bassTwo} alt="bass2" p="P Bass headstock & Logo" />
        </div>
      </div>
    </section>
  );
}

export default GuitarCardContainer;
