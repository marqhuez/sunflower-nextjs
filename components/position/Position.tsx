import db from "@/src/db";
import { useQuery } from "@tanstack/react-query";
import React from "react";

export interface IPosition {
	id: string;
	componentData: any;
	children?: any;
}

const Position: React.FC<IPosition> = ({ id, componentData, children }) => {
	const { refetch } = saveComponentPosition(componentData);

	const saveCurrentPosition = (newXPos: number, newYPos: number) => {
		componentData.positionX = newXPos;
		componentData.positionY = newYPos;
		refetch();
	};

	const initDragging = (event: any) => {
		let element = event.target.closest(".movable");
		let parent = element.closest("div");

		console.log(componentData);

		let pos1 = 0,
			pos2 = 0,
			pos3 = 0,
			pos4 = 0;

		let newYPos: number;
		let newXPos: number;

		const dragMouseUp = (event: any) => {
			document.onmouseup = null;
			document.onmousemove = null;

			element.classList.remove("dragged");

			saveCurrentPosition(newXPos, newYPos);
		};

		const dragMouseMove = (event: any) => {
			pos1 = pos3 - event.clientX;
			pos2 = pos4 - event.clientY;
			pos3 = event.clientX;
			pos4 = event.clientY;

			newYPos = element.offsetTop - pos2;
			newXPos = element.offsetLeft - pos1;

			if (
				!(newYPos - element.offsetHeight / 2 >= 0) ||
				!(newYPos + element.offsetHeight / 2 <= parent.offsetHeight)
			) {
			}

			element.style.top = `${newYPos}px`;
			element.style.left = `${newXPos}px`;
		};

		const dragMouseDown = (event: any) => {
			event.preventDefault();
			event.stopPropagation();

			pos3 = event.clientX;
			pos4 = event.clientY;

			element.classList.add("dragged");

			document.onmouseup = dragMouseUp;
			document.onmousemove = dragMouseMove;
		};

		dragMouseDown(event);
	};

	return (
		<div
			style={{
				// transform: `rotate(${rotation}deg) translate(-50%, -50%)`,
				left: `${componentData.positionX}px`,
				top: `${componentData.positionY}px`,
				position: "absolute",
				cursor: "move",
				zIndex: 1,
			}}
			className="movable"
			onMouseDown={initDragging}
		>
			{children}
		</div>
	);
};

export default Position;

const saveComponentPosition = (componentData: any) => {
	const { data, status, refetch } = useQuery({
		queryKey: ["saveComponentPosition", componentData.id],
		queryFn: async () => {
			const data = await db.saveComponentPosition(componentData);
			return data;
		},
		refetchOnWindowFocus: false,
		enabled: false,
	});

	return { data, status, refetch };
};
