import { Link } from "react-router-dom";
import { Container } from "../../UI/Container/Container";
import "./DonateSection.scss";
import { SwiperSlide, Swiper } from "swiper/react";
import { ButtonLink } from "../../UI/Button/Button";
import { GamepadIcon } from "../../Icons/Gamepad/GamepadIcon";

export const DonateSection = () => {
  return (
    <section className="donate-section">
      <Container>
        <h2 className="title heading-2 medium-weight white center with-">
          Донат
        </h2>
        <div className="title-with-button">
          <h3 className="title heading-3 medium-weight white center">Кейсы</h3>
          <ButtonLink to="#">
            <GamepadIcon />
            Играть
          </ButtonLink>
        </div>
        <Swiper>
          <SwiperSlide>
            <h3>Deluxe (навсегда)</h3>
          </SwiperSlide>
        </Swiper>
      </Container>
    </section>
  );
};
