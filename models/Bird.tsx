import React, { useEffect, useRef } from "react";
import birdScene from "@/assets/3d/bird.glb";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three"; // Import Mesh type from Three.js

const Bird = () => {
	const ref = useRef<Mesh>(null);
	const { scene, animations } = useGLTF(birdScene) as any;
	const { actions } = useAnimations(animations, ref);

	useEffect(() => {
		actions["Take 001"]?.play();
	}, []);

	useFrame(({ clock, camera }) => {
		if (!ref.current) return;
		const { current } = ref;

		current.position.y = Math.sin(clock.elapsedTime) * 0.25;

		if (current.position.x > camera.position.x + 10) {
			current.rotation.y = Math.PI;
		} else if (current.position.x < camera.position.x - 10) {
			current.rotation.y = 0;
		}

		if (current.rotation.y === 0) {
			current.position.x += 0.01;
			current.position.z -= 0.01;
		} else {
			current.position.x -= 0.01;
			current.position.z += 0.01;
		}
	});

	return (
		<mesh ref={ref} position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]}>
			<primitive object={scene} />
		</mesh>
	);
};

export default Bird;
