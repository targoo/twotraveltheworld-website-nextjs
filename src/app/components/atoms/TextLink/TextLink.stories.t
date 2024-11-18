import { Meta } from "@storybook/react";

import { TextLink } from "./TextLink";

export default {
  title: "Components/Atoms/TextLink",
  component: TextLink,
} as Meta;

const Template = (args) => <TextLink {...args}>TextLink</TextLink>;

export const Primary = Template.bind({});
Primary.args = {};
