import { Meta } from "@storybook/react";
import { Header } from "./Header";

export default {
  title: "Components/Molecules/Header",
  component: Header,
} as Meta;

const Template = (args) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
