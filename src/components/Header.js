import "../css/Header.css";
import { GiWorld } from "react-icons/gi";

export default function Header() {
  return (
    <div className="header">
      <div className="header--container">
        <p className="icon">
          <GiWorld size={34} />
        </p>
        <p className="header--title">My Travel Journal.</p>
      </div>
    </div>
  );
}
