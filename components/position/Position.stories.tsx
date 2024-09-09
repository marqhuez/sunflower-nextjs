import { ComponentStory, ComponentMeta } from "@storybook/react";
import Position, { IPosition } from "./Position";
import { mockPositionProps } from "./Position.mock";

export default {
	title: "templates/Position",
	component: Position,
	argTypes: {},
} as ComponentMeta<typeof Position>;

const Template: ComponentStory<typeof Position> = (args) => (
	<Position {...args} />
);

export const Base = Template.bind({});

Base.args = {
	...mockPositionProps.base,
} as IPosition;
