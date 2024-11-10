/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 .\scene.gltf 
Author: Minecraft (https://sketchfab.com/minefur)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/minecraft-chest-137c1d2f391a4b7c9234e035473d0ae3
Title: Minecraft Chest
*/

import React, { forwardRef, useEffect } from "react";
import { useFrame, useGraph } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import { SkeletonUtils } from "three-stdlib";

export const DiamondLootBoxModel = forwardRef((props, ref) => {
  const { scene, animations } = useGLTF("/3d/lootboxes/diamond/scene.gltf");
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);
  const { actions, mixer } = useAnimations(animations, ref);

  useEffect(() => {
    const animation = actions["Chest_0_A|Chest_0_AAction"];
    if (props.playAnimation) {
      animation.play();
      animation.loop = false;
    } else {
      animation.stop();
    }
  }, [props.playAnimation]);

  return (
    <group ref={ref} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="chestfbx" rotation={[Math.PI / 2, 0, 0]} scale={0.5}>
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Chest_0_A"
                  position={[-6.365, -87.985, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <group name="Object_5">
                    <primitive object={nodes._rootJoint} />
                    <group
                      name="Object_11"
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={100}
                    />
                    <skinnedMesh
                      name="Object_12"
                      geometry={nodes.Object_12.geometry}
                      material={materials.Material}
                      skeleton={nodes.Object_12.skeleton}
                    />
                  </group>
                </group>
                <group
                  name="Chest_0"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
});

useGLTF.preload("/3d/lootboxes/diamond/scene.gltf");
