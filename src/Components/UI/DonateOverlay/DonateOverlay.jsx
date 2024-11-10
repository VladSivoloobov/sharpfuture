import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useRef } from "react";
import "./DonateOverlay.scss";
import { Container } from "../Container/Container";

const DonateOverlayModel = ({ model }) => {
  const modelRef = useRef();

  return React.cloneElement(model, {
    ref: modelRef,
    rotation: [0, 5.5, -0.1],
    playAnimation: true,
  });
};

export const DonateOverlay = ({ model, items, title }) => {
  return (
    <div className="donate-overlay">
      <button></button>
      <Container>
        <div className="canvas-wrapper">
          <Canvas>
            <DonateOverlayModel model={model} />
            <PerspectiveCamera
              position={[0, 90, 230]}
              makeDefault
              rotation={[-0.3, 0, 0]}
            />

            <ambientLight intensity={2.5} />
          </Canvas>
        </div>
        <div className="donate-info">
          <h2 className="title heading-2 color-white medium-weight">
            {title} кейс
          </h2>
          <p>Предметы</p>
          <ul className="donate-list">
            <li className="donate-list__item">Алмаз</li>
            <li className="donate-list__item">Железный слиток</li>
            <li className="donate-list__item">Золотой слиток</li>
            <li className="donate-list__item">Уголь</li>
            <li className="donate-list__item">Випка</li>
          </ul>
        </div>
      </Container>
    </div>
  );
};
