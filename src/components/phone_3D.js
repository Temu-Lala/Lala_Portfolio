import React, { useRef } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
import { extend, useThree, useFrame } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Extend OrbitControls for R3F
extend({ OrbitControls });

const Model = () => {
  const gltf = useLoader(GLTFLoader, '/3dmodels/apple_iphone/scene.gltf');
  const modelRef = useRef();

  // Increase the size of the model by adjusting the scale
  const modelScale = [10, 10, 10]; // Adjust the values as needed

  // Set the exact RGB color (e.g., red)
  const modelColor = [0, 0, 0];

  // Set the material color to the specified RGB color
  gltf.scene.traverse((child) => {
    if (child.isMesh) {
      child.material.color.fromArray(modelColor);
    }
  });

  return <primitive object={gltf.scene} ref={modelRef} scale={modelScale} />;
};

const Controls = () => {
  const { camera, gl } = useThree();
  const controls = useRef();

  useFrame(() => {
    if (controls.current) controls.current.update();
  });

  return (
    <orbitControls
      ref={controls}
      args={[camera, gl.domElement]}
      enableZoom={false} // Disable zoom
      autoRotate // Enable auto-rotation
      autoRotateSpeed={5.5} // Adjust rotation speed
    />
  );
};

function phone_3D() {
  return (
    <div class="flex align-bottom items-end w-full h-full">
      <Canvas class="flex w-full h-full bg-transparent" camera={{ position: [1, 1, 1] }} >
        <ambientLight intensity={1550.5} />
        <pointLight position={[10, 10, 10]} intensity={500} />
        <pointLight position={[-0, -0, -1]} intensity={500} />
        <Model />
        <Controls />
      </Canvas>
    </div>
  );
}

export default phone_3D;
