import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { vertex } from "./shaders/vertex";
import { fragment } from "./shaders/fragment";

const Sphere = () => {
  const mesh = useRef<any>();

  const uniforms = useMemo(
    () => ({
      time: { value: 0 },
      color: {
        value: [0.5, 0.65, 0.64],
        // value: [0.22, 0.0, 0.2],
      },
      colorBase: {
        value: [0.29, 0, 0.48],
        // value: [0.22, 0.0, 0.1],
      },
      colorDeep: {
        value: [0.1, 0, 0.1],
        // value: [0.0, 0.0, 0.04],
      },
      resolution: { value: new THREE.Vector4() },
    }),
    []
  );

  const myShader = new THREE.ShaderMaterial({
    uniforms: uniforms,
    fragmentShader: fragment,
    vertexShader: vertex,
    side: THREE.DoubleSide,
  });

  useFrame(() => {
    mesh.current.material.uniforms.time.value += 0.007;
    mesh.current.rotation.z += 0.007;
  });

  return (
    <mesh ref={mesh}>
      <sphereGeometry args={[1.5, 32, 32]} attach="geometry" />
      <primitive object={myShader} attach="material" />
    </mesh>
  );
};

export default Sphere;
