import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { FaMousePointer, FaSearchPlus } from "react-icons/fa";

function YachtModel({ modelPath }) {
  const { scene } = useGLTF(modelPath);
  return (
    <group position={[0, 1, 0]} scale={[0.15, 0.15, -0.15]} rotation={[0, Math.PI, 0]}>
      <primitive object={scene} />
    </group>
  );
}

export default function Yacht3DViewer() {
  return (
    <div className="w-full bg-gray-100 rounded-lg shadow-lg relative" style={{ height: "600px" }}>
      {/* Help Overlay */}
      <div className="absolute top-6 left-6 bg-white bg-opacity-90 px-4 py-3 rounded-lg shadow-md flex items-center gap-6 text-gray-800 z-10 select-none pointer-events-none text-sm font-medium">
        <div className="flex items-center gap-2">
          <FaMousePointer size={18} />
          <span>Drag to rotate</span>
        </div>
        <div className="flex items-center gap-2">
          <FaSearchPlus size={18} />
          <span>Scroll to zoom</span>
        </div>
      </div>

      <Canvas
        camera={{ position: [0, 2, 7], fov: 50 }}
        style={{ background: "#e5e7eb", width: "100%", height: "100%" }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <YachtModel modelPath="/models/yacht.glb" />
        <OrbitControls enablePan={false} />
      </Canvas>
    </div>
  );
}
