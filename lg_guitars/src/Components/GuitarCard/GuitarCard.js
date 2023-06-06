// Component for each Guitar Card
import "./GuitarCard.css";

function GuitarCard(props) {
  return (
    <div className="showcase-img">
      <img
        src={props.img}
        alt={props.alt}
        className="border-right border-left"
      />
      {/* <button id="playOneBtn" className="btn play-btn">
        <audio
          id="playOne"
          src="./sounds/sound-board_sounds_applause.mp3"
        ></audio>{" "}
        Click to play
      </button> */}
      <p>{props.p}</p>
    </div>
  );
}

export default GuitarCard;
