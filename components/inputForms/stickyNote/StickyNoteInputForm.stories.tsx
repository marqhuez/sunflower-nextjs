import { ComponentStory, ComponentMeta } from "@storybook/react";
import StickyNoteInputForm, {
	IStickyNoteInputForm,
} from "./StickyNoteInputForm";
import { mockStickyNoteInputFormProps } from "./StickyNoteInputForm.mock";

export default {
	title: "inputForms/StickyNoteInputForm",
	component: StickyNoteInputForm,
	argTypes: {},
} as ComponentMeta<typeof StickyNoteInputForm>;

const Template: ComponentStory<typeof StickyNoteInputForm> = (args) => (
	<StickyNoteInputForm {...args} />
);

export const Base = Template.bind({});

Base.args = {
	...mockStickyNoteInputFormProps.base,
} as IStickyNoteInputForm;
