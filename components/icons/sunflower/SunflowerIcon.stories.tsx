import { ComponentStory, ComponentMeta } from "@storybook/react";
import SunflowerIcon, { ISunflowerIcon } from "./SunflowerIcon";
import { mockSunflowerIconProps } from "./SunflowerIcon.mock";

export default {
	title: "icons/SunflowerIcon",
	component: SunflowerIcon,
	argTypes: {},
} as ComponentMeta<typeof SunflowerIcon>;

const Template: ComponentStory<typeof SunflowerIcon> = (args) => (
	<SunflowerIcon {...args} />
);

export const Base = Template.bind({});

Base.args = {
	...mockSunflowerIconProps.base,
} as ISunflowerIcon;
