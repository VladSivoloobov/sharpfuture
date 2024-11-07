import { Link, NavLink } from "react-router-dom";
import "./Header.scss";
import { Container } from "../UI/Container/Container.jsx";
import { ButtonLink } from "../UI/Button/Button.jsx";
import { Creeper } from "../Icons/Creeper/Creeper.jsx";
import { GamepadIcon } from "../Icons/Gamepad/GamepadIcon.jsx";

export default function Header() {
  return (
    <header className="header">
      <Container>
        <Link to={"#"} className="header__header-logo">
          <img className="header-logo__pickaxe" src="/imgs/pickaxe.png" />
          SharpFuture
        </Link>
        <nav className="header__header-navigation">
          <ul className="header-navigation__header-navigation-list">
            <li className="header-navigation-list__header-navigation-list-item">
              <Link className="header-navigation-list-item__link" to={"#"}>
                Донат
              </Link>
            </li>
            <li className="header-navigation-list__header-navigation-list-item">
              <Link className="header-navigation-list-item__link" to={"#"}>
                О нас
              </Link>
            </li>
            <li className="header-navigation-list__header-navigation-list-item">
              <Link className="header-navigation-list-item__link" to={"#"}>
                Правила
              </Link>
            </li>
          </ul>
        </nav>
        <ButtonLink to={"#"}>
          <GamepadIcon />
          Играть
        </ButtonLink>
      </Container>
    </header>
  );
}
