import { Meta } from "@storybook/react";

import { InstagramFeed } from "./InstagramFeed";

export default {
  title: "Components/Molecules/InstagramFeed",
  component: InstagramFeed,
} as Meta;

const TemplatePrimary = (args) => <InstagramFeed {...args} />;

export const Primary = TemplatePrimary.bind({});
Primary.args = {};
