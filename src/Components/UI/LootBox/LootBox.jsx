import "./LootBox.scss";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { StandardLootBoxModel } from "../../3DModels/LootBoxes/StandardLootBoxModel";
import { PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import React from "react";
import { delay } from "../../../global";
import { Stats, OrbitControls } from "@react-three/drei";

const LootBoxModel = ({ model, clicked }) => {
  const lootBoxRef = useRef();
  const cameraRef = useRef();

  useFrame(({ clock }) => {
    lootBoxRef.current.rotation.y = clock.getElapsedTime() / 2;
    lootBoxRef.current.rotation.x = clock.getElapsedTime() / 2;
    lootBoxRef.current.rotation.z = clock.getElapsedTime() / 2;
  });

  return (
    <>
      {React.cloneElement(model, {
        ref: lootBoxRef,
      })}
      <PerspectiveCamera
        ref={cameraRef}
        makeDefault
        position={[120, 80, 120]}
        rotation={[-0.55, 0.7, 0.35]}
      />
      <ambientLight intensity={1.6} />{" "}
    </>
  );
};

export const LootBox = ({ name, price, model, icon, clickHandler }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <div
      className="loot-box"
      data-clicked={{ clicked }}
      onClick={() => {
        setClicked(!clicked);
        clickHandler({
          title: name,
          model: model,
        });
      }}
    >
      <div className="loot-box__canvas-wrapper">
        <Canvas>
          <LootBoxModel clicked={clicked} model={model} />
        </Canvas>
      </div>
      <div className="loot-box__info">
        <h2 className="title white medium-weight">{name}</h2>
        <p className="price">
          <img className="price-icon" src="./imgs/price.svg" />
          {price}
        </p>
      </div>
    </div>
  );
};
