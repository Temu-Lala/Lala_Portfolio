import { OrbitControls, RenderTexture } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { Text } from "@react-three/drei";
import * as THREE from 'three'
function Test() {
  return (
    <div class="w-full h-screen">
         <Canvas>
            <OrbitControls autoRotate= {true} enableZoom ={false}/>
            <ambientLight intensity={4}/>
            <directionalLight position={[5,4,3]}/>
            <mesh>
                <boxGeometry args={[2,2,2]}/>
            <meshStandardMaterial>
                <RenderTexture attach="map">
                    <perspectiveCamera makeDefault 
                    position={[0,0,2]}/>
                <color attach="background" args={["gold"]}/>
               <Text fontSize={2} color="black" >
                hi lala
               </Text>
        
            </RenderTexture>
            </meshStandardMaterial>
            </mesh>
         </Canvas>
    </div>
  )
}

export default Test