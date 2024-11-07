import Header from "../../Components/header/Header.jsx";
import { Container } from "../../Components/UI/Container/Container.jsx";
import "./HomePage.scss";
import VideoBackground from "../../Components/UI/VideoBackground/videoBackground.jsx";
import { Link } from "react-router-dom";
import { ButtonLink } from "../../Components/UI/Button/Button.jsx";
import { GamepadIcon } from "../../Components/Icons/Gamepad/GamepadIcon.jsx";

export const HomePage = () => {
  return (
    <>
      <Header />
      <main className="main">
        <section className="hero-section">
          <VideoBackground src="/video/video-background.mp4" type="video/mp4" />
          <Container>
            <h1 className="title heading-1 white with-subtitle light-weight">
              <span className="title__span bold-weight blue-color">
                SharpFuture
              </span>{" "}
              — Сервер в игре Minecraft
            </h1>
            <p className="subtitle gray size-xl with-button">
              Открой для себя новый мир
            </p>
            <ButtonLink to="#">
              <GamepadIcon />
              Играть
            </ButtonLink>

            <button
              className="hero-section__scroll-button"
              aria-label="scroll down"
            ></button>
          </Container>
        </section>
        <section className="donate-section">
          <Container>
            <h2 className="title heading-2 medium-weight white center">
              Донаты
            </h2>
          </Container>
        </section>
      </main>
    </>
  );
};
