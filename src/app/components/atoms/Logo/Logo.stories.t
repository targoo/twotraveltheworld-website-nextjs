import { Meta } from "@storybook/react";
import { Logo } from "./Logo";

export default {
  title: "Components/Atoms/Logo",
  component: Logo,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template = (args) => <Logo {...args}>Button</Logo>;

export const Primary = Template.bind({});
Primary.args = {};
