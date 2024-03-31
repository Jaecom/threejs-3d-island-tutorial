"use client";

import { Canvas } from "@react-three/fiber";
import React, { Suspense, useState } from "react";
import Loader from "../atoms/Loader";
import Island from "@/models/Island";
import Sky from "@/models/Sky";
import Bird from "@/models/Bird";
import Plane from "@/models/Plane";

const HomePage = () => {
	const [isRotating, setIsRotating] = useState(false);
	const [currentStage, setCurrentStage] = useState(0);
	const adjustIslandForScreenSize = () => {
		let screenScale = null;
		let screenPosition = [0, 0, -43];
		let rotation = [0.1, 4.7, 0];

		if (typeof window !== "undefined") {
			if (window.innerWidth < 768) {
				screenScale = [0.9, 0.9, 0.9];
				screenPosition = [0, -6.5, -43];
			} else {
				screenScale = [1, 1, 1];
				screenPosition = [0, -6.5, -43];
			}
		}

		return [screenScale, screenPosition, rotation];
	};

	const adjustPlaneForScreenSize = () => {
		let screenScale, screenPosition;

		if (typeof window !== "undefined") {
			if (window.innerWidth < 768) {
				screenScale = [1.5, 1.5, 1.5];
				screenPosition = [0, -1.5, 0];
			} else {
				screenScale = [3, 3, 3];
				screenPosition = [0, -4, -4];
			}
		}

		return [screenScale, screenPosition];
	};

	const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
	const [planeScale, planePosition, planeRotation] = adjustPlaneForScreenSize();
	return (
		<section className="w-full h-screen relative">
			<Canvas
				className={`w-full h-screen bg-transparent ${isRotating ? "cursor-grabbing" : "cursor-grab"}`}
				camera={{ near: 0.1, far: 1000 }}
			>
				<Suspense fallback={<Loader />}>
					<directionalLight position={[1, 1, 1]} intensity={2} />
					<ambientLight intensity={0.8} />
					<hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />
					<Bird />
					<Plane position={planePosition} scale={planeScale} isRotating={isRotating} rotation={[0, 20, 0]} />
					<Sky isRotating={isRotating} />
					<Island
						setIsRotating={setIsRotating}
						isRotating={isRotating}
						position={islandPosition}
						scale={islandScale}
						rotation={islandRotation}
						setCurrentStage={setCurrentStage}
					/>
				</Suspense>
			</Canvas>
		</section>
	);
};

export default HomePage;
