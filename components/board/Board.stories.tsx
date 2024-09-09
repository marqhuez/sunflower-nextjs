import { ComponentStory, ComponentMeta } from "@storybook/react";
import Board, { IBoard } from "./Board";
import { mockBoardProps } from "./Board.mock";

export default {
	title: "templates/Board",
	component: Board,
	argTypes: {},
} as ComponentMeta<typeof Board>;

const Template: ComponentStory<typeof Board> = (args) => <Board {...args} />;

export const Base = Template.bind({});

Base.args = {
	...mockBoardProps.base,
} as IBoard;
