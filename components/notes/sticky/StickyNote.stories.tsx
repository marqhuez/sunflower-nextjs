import { ComponentStory, ComponentMeta } from "@storybook/react";
import StickyNote, { IStickyNote } from "./StickyNote";
import { mockStickyNoteProps } from "./StickyNote.mock";

export default {
	title: "notes/StickyNote",
	component: StickyNote,
	argTypes: {},
} as ComponentMeta<typeof StickyNote>;

const Template: ComponentStory<typeof StickyNote> = (args) => (
	<StickyNote {...args} />
);

export const Base = Template.bind({});

Base.args = {
	...mockStickyNoteProps.base,
} as IStickyNote;
