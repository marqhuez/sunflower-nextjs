import { ComponentStory, ComponentMeta } from "@storybook/react";
import Pin, { IPin } from "./Pin";
import { mockPinProps } from "./Pin.mock";

export default {
	title: "notes/Pin",
	component: Pin,
	argTypes: {},
} as ComponentMeta<typeof Pin>;

const Template: ComponentStory<typeof Pin> = (args) => <Pin {...args} />;

export const Base = Template.bind({});

Base.args = {
	...mockPinProps.base,
} as IPin;
