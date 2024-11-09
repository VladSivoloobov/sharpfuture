import "./LootBox.scss";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { StandardLootBoxModel } from "../../3DModels/LootBoxes/StandardLootBoxModel";
import { PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import React from "react";
import { delay } from "../../../global";

const LootBoxModel = ({ model }) => {
  const lootBoxRef = useRef();

  useEffect(() => {
    lootBoxRef.current.rotation.y = 11.5;
    lootBoxRef.current.rotation.x = 0;
    lootBoxRef.current.rotation.z = 0;
  });

  return (
    <>
      {React.cloneElement(model, {
        ref: lootBoxRef,
      })}
      <PerspectiveCamera
        makeDefault
        position={[1, 140, 400]}
        rotation={[-0.4, 0, 0]}
      />
      <ambientLight intensity={1.5} />{" "}
    </>
  );
};

export const LootBox = ({ name, price, model }) => {
  return (
    <div className="loot-box">
      <div className="loot-box__canvas-wrapper">
        <Canvas>
          <LootBoxModel model={model} />
        </Canvas>
      </div>
      <h2 className="title white medium-weight">{name}</h2>
      <p className="price">{price}</p>
    </div>
  );
};
