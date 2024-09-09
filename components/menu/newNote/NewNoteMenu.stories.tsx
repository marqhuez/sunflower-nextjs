import { ComponentStory, ComponentMeta } from "@storybook/react";
import NewNoteMenu, { INewNoteMenu } from "./NewNoteMenu";
import { mockNewNoteMenuProps } from "./NewNoteMenu.mock";

export default {
	title: "templates/NewNoteMenu",
	component: NewNoteMenu,
	argTypes: {},
} as ComponentMeta<typeof NewNoteMenu>;

const Template: ComponentStory<typeof NewNoteMenu> = (args) => (
	<NewNoteMenu {...args} />
);

export const Base = Template.bind({});

Base.args = {
	...mockNewNoteMenuProps.base,
} as INewNoteMenu;
