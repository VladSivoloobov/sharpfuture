import { Link } from "react-router-dom";
import "./Header.scss";
import { Container } from "../Container/Container.jsx";
import { ButtonLink } from "../Button/Button.jsx";
import { GamepadIcon } from "../../Icons/Gamepad/GamepadIcon.jsx";
import { useEffect, useState } from "react";
import { MoneyBagIcon } from "../../Icons/MoneyBagIcon/MoneyBagIcon.jsx";
import { HeaderLink } from "../HeaderLink/HeaderLink.jsx";

const headerItems = [
  ["/imgs/money-bag.svg", "Донат"],
  ["/imgs/about.svg", "О нас"],
  ["/imgs/scroll.svg", "Правила"],
];

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
            {headerItems.map(([image, text]) => (
              <HeaderLink text={text} image={image} />
            ))}
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
