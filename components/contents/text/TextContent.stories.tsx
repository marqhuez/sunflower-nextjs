import { ComponentStory, ComponentMeta } from "@storybook/react";
import TextContent, { ITextContent } from "./TextContent";
import { mockTextContentProps } from "./TextContent.mock";

export default {
	title: "templates/TextContent",
	component: TextContent,
	argTypes: {},
} as ComponentMeta<typeof TextContent>;

const Template: ComponentStory<typeof TextContent> = (args) => (
	<TextContent {...args} />
);

export const Base = Template.bind({});

Base.args = {
	...mockTextContentProps.base,
} as ITextContent;
