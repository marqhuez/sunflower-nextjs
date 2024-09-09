import { IPosition } from "./Position";

const base: IPosition = {
	elementPosition: {
		x: "10",
		y: "20",
	},
	rotation: "40",
	handleSave: () => {},
};

export const mockPositionProps = {
	base,
};
