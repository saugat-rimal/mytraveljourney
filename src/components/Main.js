import "../css/Main.css";
import MountFuji from "../images/mountfuji.jpeg";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function Main(props) {
  return (
    <main>
      <div className="main--container">
        <div className="card">
          <div className="image--box">
            <img src={props.imageUrl} alt="" className="image" />
          </div>

          <div className="card--content">
            <p className="card--location">
              <span className="country">
                <FaMapMarkerAlt color="#F55A5A" /> {props.location}
              </span>{" "}
              <a href={props.googleMapsUrl} className="grey">
                {" "}
                View on Google Maps
              </a>
            </p>
            <h2 className="card--title">{props.title}</h2>
            <p className="card--date">
              {props.startDate} - {props.endDate}
            </p>
            <p className="card--para">{props.description}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
