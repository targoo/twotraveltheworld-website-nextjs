import { Meta } from "@storybook/react";

import { Sections } from "./Sections";

export default {
  title: "Components/Molecules/Sections",
  component: Sections,
} as Meta;

const Template = (args) => <Sections {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
