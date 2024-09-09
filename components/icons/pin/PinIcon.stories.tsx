import { ComponentStory, ComponentMeta } from "@storybook/react";
import PinIcon, { IPinIcon } from "./PinIcon";
import { mockPinIconProps } from "./PinIcon.mock";

export default {
	title: "icons/PinIcon",
	component: PinIcon,
	argTypes: {},
} as ComponentMeta<typeof PinIcon>;

const Template: ComponentStory<typeof PinIcon> = (args) => (
	<PinIcon {...args} />
);

export const Base = Template.bind({});

Base.args = {
	...mockPinIconProps.base,
} as IPinIcon;
