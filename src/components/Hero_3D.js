import React, { useRef, useEffect } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
import { extend, useThree, useFrame } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// Extend OrbitControls for R3F
extend({ OrbitControls });

const Model = () => {
  const gltf = useLoader(GLTFLoader, '/3dmodels/lost_programmer/scene.gltf');
  const modelRef = useRef();

  // Increase the size of the model by adjusting the scale
  const modelScale = [1, 1, 1]; // Adjust the values as needed

  // Set the exact RGB color (e.g., red)
  const modelColor = [0, 1, 1];

  // Set the material color to the specified RGB color
  gltf.scene.traverse((child) => {
    if (child.isMesh) {
      child.material.color.fromArray(modelColor);
    }
  });

  // Rotate the model based on scroll position
  useFrame(() => {
    const scrollPosition = window.scrollY;
    const rotationAngle = scrollPosition / 100; // Adjust the factor as needed

    // Apply rotation to the model
    modelRef.current.rotation.x = rotationAngle;
    modelRef.current.rotation.y = rotationAngle;
    modelRef.current.rotation.z = 0;
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
      autoRotate={false} // Enable auto-rotation
      autoRotateSpeed={5.5} // Adjust rotation speed
    />
  );
};

const Hero3D = () => {
  return (
    <div className="flex align-bottom items-end w-full h-full pt-40">
      <Canvas className="flex w-full h-screen bg-transparent "   camera={{ position: [1, 1, 1] }}>
        <ambientLight intensity={1550.5} />
        <pointLight position={[5, 5, 5]} intensity={2500} />
        <pointLight position={[-5, -5, -5]} intensity={2500} />
        <Model />
        <Controls />
      </Canvas>
    </div>
  );
};

export default Hero3D;
