import "./HeroSection.scss";
import VideoBackground from "../../UI/VideoBackground/VideoBackground.jsx";
import { ButtonLink } from "../../UI/Button/Button.jsx";
import { GamepadIcon } from "../../Icons/Gamepad/GamepadIcon.jsx";
import { Container } from "../../UI/Container/Container.jsx";
import { useEffect, useState } from "react";

export const HeroSection = () => {
  const [currentScroll, setCurrentScroll] = useState(window.scrollY);
  const [currentMouseMove, setCurrentMouseMove] = useState({ x: 0, y: 0 });

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setCurrentScroll(window.scrollY);
    });
  }, []);

  return (
    <section
      onMouseMove={(e) => {
        setCurrentMouseMove({
          x: e.clientX,
          y: e.clientY,
        });
      }}
      className="hero-section"
    >
      <VideoBackground
        fixed={true}
        src="/video/video-background.mp4"
        type="video/mp4"
        offset={-currentScroll / 4}
        currentMouseMove={currentMouseMove}
      />
      <Container
        style={{
          transform: `translateY(${-currentScroll / 3}px)`,
        }}
      >
        <h1 className="title heading-1 white with-subtitle light-weight center">
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
          onClick={() => {
            window.scrollTo({
              top: 200,
              behavior: "smooth",
            });
          }}
        ></button>
      </Container>
    </section>
  );
};
