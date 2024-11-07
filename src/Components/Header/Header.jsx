import { Link, NavLink } from "react-router-dom";
import "./Header.scss";
import { Container } from "../UI/Container/Container.jsx";
import { ButtonLink } from "../UI/Button/Button.jsx";
import { Creeper } from "../Icons/Creeper/Creeper.jsx";
import { GamepadIcon } from "../Icons/Gamepad/GamepadIcon.jsx";
import { useEffect, useState } from "react";
import { MoneyBagIcon } from "../Icons/MoneyBagIcon/MoneyBagIcon.jsx";

export default function Header() {
  const [getBackgroundOpacity, setBackgroundOpacity] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setBackgroundOpacity(true);
      } else {
        setBackgroundOpacity(false);
      }
    });
  }, []);

  return (
    <header
      style={{
        backgroundColor: getBackgroundOpacity
          ? "var(--lighter-dark-blue)"
          : "transparent",
      }}
      className="header"
    >
      <Container>
        <Link to={"#"} className="header__header-logo">
          <img className="header-logo__pickaxe" src="/imgs/pickaxe.png" />
          SharpFuture
        </Link>
        <nav className="header__header-navigation">
          <ul className="header-navigation__header-navigation-list">
            <li className="header-navigation-list__header-navigation-list-item">
              <Link className="header-navigation-list-item__link" to={"#"}>
                <MoneyBagIcon className="navigation-icon" />
                Донат
              </Link>
            </li>
            <li className="header-navigation-list__header-navigation-list-item">
              <Link className="header-navigation-list-item__link" to={"#"}>
                <img className="navigation-icon" src="/imgs/about.svg" />О нас
              </Link>
            </li>
            <li className="header-navigation-list__header-navigation-list-item">
              <Link className="header-navigation-list-item__link" to={"#"}>
                <img className="navigation-icon" src="/imgs/scroll.svg" />
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
