import React from "react";
import { useGLTF } from "@react-three/drei";
import planeScene from "@/assets/3d/Plane.glb";

const Plane = ({ isRotating, ...props }) => {
	const { scene, animations } = useGLTF(planeScene);
	return (
		<mesh {...props}>
			<primitive object={scene} />
		</mesh>
	);
};

export default Plane;
