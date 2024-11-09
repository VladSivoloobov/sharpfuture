import { Link } from "react-router-dom";
import { Container } from "../../UI/Container/Container";
import "./DonateSection.scss";
import { SwiperSlide, Swiper } from "swiper/react";
import { ButtonLink } from "../../UI/Button/Button";
import { GamepadIcon } from "../../Icons/Gamepad/GamepadIcon";
import { LootBox } from "../../UI/LootBox/LootBox";
import { StandardLootBoxModel } from "../../3DModels/LootBoxes/StandardLootBoxModel";
import { useRef } from "react";
import { Navigation } from "swiper/modules";
import { EliteLootBoxModel } from "../../3DModels/LootBoxes/EliteLootBoxModel.jsx";

export const DonateSection = () => {
  const swiperArrowRight = useRef(null);
  const swiperArrowLeft = useRef(null);

  return (
    <section className="donate-section">
      <Container maxWidth="1440">
        <h2 className="title heading-2 medium-weight white center with-info">
          Донат
        </h2>
        <div className="donate-subsection">
          <div className="title-with-button">
            <h3 className="title heading-3 medium-weight white center">
              Кейсы
            </h3>
            <ButtonLink to="#">Больше</ButtonLink>
          </div>
          <Swiper
            modules={[Navigation]}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = swiperArrowLeft.current;
              swiper.params.navigation.nextEl = swiperArrowRight.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            className="loot-box-list"
            slidesPerView={5}
            spaceBetween={40}
          >
            <SwiperSlide>
              <LootBox
                name="Стандартный"
                price="450 Р / 1шт."
                model={<StandardLootBoxModel />}
              />
            </SwiperSlide>
            <SwiperSlide>
              <LootBox
                name="Стандартный"
                price="450 Р / 1шт."
                model={<StandardLootBoxModel />}
              />
            </SwiperSlide>
            <SwiperSlide>
              <LootBox
                name="Стандартный"
                price="450 Р / 1шт."
                model={<EliteLootBoxModel />}
              />
            </SwiperSlide>
            <SwiperSlide>
              <LootBox
                name="Стандартный"
                price="450 Р / 1шт."
                model={<StandardLootBoxModel />}
              />
            </SwiperSlide>
            <SwiperSlide>
              <LootBox
                name="Стандартный"
                price="450 Р / 1шт."
                model={<StandardLootBoxModel />}
              />
            </SwiperSlide>
            <SwiperSlide>
              <LootBox
                name="Стандартный"
                price="450 Р / 1шт."
                model={<StandardLootBoxModel />}
              />
            </SwiperSlide>
          </Swiper>
          <div className="swiper-arrows">
            <button
              ref={swiperArrowLeft}
              className="swiper-arrow swiper-arrow-left"
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 12H4M4 12L10 18M4 12L10 6"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <button
              ref={swiperArrowRight}
              className="swiper-arrow swiper-arrow-right"
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 12H20M20 12L14 6M20 12L14 18"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};
