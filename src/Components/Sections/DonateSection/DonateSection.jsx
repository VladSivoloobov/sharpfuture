import { Link } from "react-router-dom";
import { Container } from "../../UI/Container/Container";
import "./DonateSection.scss";
import { SwiperSlide, Swiper } from "swiper/react";
import { ButtonLink } from "../../UI/Button/Button";
import { GamepadIcon } from "../../Icons/Gamepad/GamepadIcon";
import { LootBox } from "../../UI/LootBox/LootBox";
import { StandardLootBoxModel } from "../../3DModels/LootBoxes/StandardLootBoxModel";
import { useRef, useState } from "react";
import { Navigation } from "swiper/modules";
import { IronLootBoxModel } from "../../3DModels/LootBoxes/IronLootBoxModel";
import { EmeraldLootBoxModel } from "../../3DModels/LootBoxes/EmeraldLootBoxModel";
import { GoldLootBoxModel } from "../../3DModels/LootBoxes/GoldLootBoxModel";
import { BronzeLootBoxModel } from "../../3DModels/LootBoxes/BronzeLootBoxModel";
import { DiamondLootBoxModel } from "../../3DModels/LootBoxes/DiamondLootBoxModel";
import { DonateOverlay } from "../../UI/DonateOverlay/DonateOverlay";

export const DonateSection = () => {
  const swiperArrowRight = useRef(null);
  const swiperArrowLeft = useRef(null);
  const [choosedCase, setChoosedCase] = useState(null);

  function handleChooseCase({ title, model }) {
    setChoosedCase({
      title,
      model,
    });
  }

  return (
    <section className="donate-section">
      {choosedCase ? (
        <DonateOverlay title={choosedCase.title} model={choosedCase.model} />
      ) : (
        <></>
      )}
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
                icon={"🔥"}
                name="Обычный"
                price="49 Р / 1шт."
                clickHandler={handleChooseCase}
                model={<StandardLootBoxModel />}
              />
            </SwiperSlide>
            <SwiperSlide>
              <LootBox
                icon={"❤"}
                name="Железный"
                price="80 Р / 1шт."
                clickHandler={handleChooseCase}
                model={<IronLootBoxModel />}
              />
            </SwiperSlide>
            <SwiperSlide>
              <LootBox
                icon={"😎"}
                name="Изумрудный"
                price="120 Р / 1шт."
                clickHandler={handleChooseCase}
                model={<EmeraldLootBoxModel />}
              />
            </SwiperSlide>
            <SwiperSlide>
              <LootBox
                name="Золотой"
                price="150 Р / 1шт."
                clickHandler={handleChooseCase}
                model={<GoldLootBoxModel />}
              />
            </SwiperSlide>
            <SwiperSlide>
              <LootBox
                name="Бронзовый"
                price="200 Р / 1шт."
                model={<BronzeLootBoxModel />}
              />
            </SwiperSlide>
            <SwiperSlide>
              <LootBox
                name="Алмазный"
                price="250 Р / 1шт."
                clickHandler={handleChooseCase}
                model={<DiamondLootBoxModel />}
              />
            </SwiperSlide>
          </Swiper>
          <div className="swiper-controls">
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
        </div>
      </Container>
    </section>
  );
};
