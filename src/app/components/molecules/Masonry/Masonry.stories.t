import { Meta } from "@storybook/react";

import { Masonry } from "./Masonry";

export default {
  title: "Components/Molecules/Masonry",
  component: Masonry,
} as Meta;

const Template = (args) => <Masonry {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
