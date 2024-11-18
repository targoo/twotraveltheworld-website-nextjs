import { Meta } from "@storybook/react";

import { ProgressBar } from "./ProgressBar";

export default {
  title: "Components/Atoms/ProgressBar",
  component: ProgressBar,
} as Meta;

const Template = (args) => <ProgressBar value={100} {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
