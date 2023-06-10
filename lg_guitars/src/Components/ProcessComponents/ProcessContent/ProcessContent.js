// Component for Process Content

import "./ProcessContent.css";

function ProcessContent(props) {
  return (
    <div>
      <div className="process-flex">
        <h3 className="section-title">
          {props.h3}
          <i className="fa-solid fa-compass-drafting"></i>
        </h3>
        <p>{props.content}</p>
        <img src={props.img} alt={props.alt} />
        <img src={props.imgTwo} alt={props.altTwo} />
      </div>
    </div>
  );
}

export default ProcessContent;
