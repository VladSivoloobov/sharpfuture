import "./HeaderLink.scss";
import { Link } from "react-router-dom";

export const HeaderLink = ({ text, image, to = "#" }) => {
  return (
    <li className="header-navigation-list__header-navigation-list-item">
      <Link className="header-navigation-list-item__link" to={to}>
        <img className="navigation-icon" src={image} />
        {text}
      </Link>
    </li>
  );
};
