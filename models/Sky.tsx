import { useAnimations, useGLTF } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import skyScene from "@/assets/3d/sky.glb";
import { useFrame } from "@react-three/fiber";

const Sky = ({ isRotating }: { isRotating: boolean }) => {
	const sky = useGLTF(skyScene) as any;
	const ref = useRef<any>(null);

	useFrame((_, delta) => {
		if (isRotating && ref.current) {
			ref.current.rotation.y += 0.25 * delta;
		}
	});

	return (
		<mesh ref={ref}>
			<primitive object={sky.scene} />
		</mesh>
	);
};

export default Sky;
