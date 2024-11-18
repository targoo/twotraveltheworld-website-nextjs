import { Meta } from "@storybook/react";

import { LatestBlogs } from "./LatestBlogs";

export default {
  title: "Components/Molecules/LatestBlogs",
  component: LatestBlogs,
} as Meta;

const TemplatePrimary = (args) => <LatestBlogs {...args} />;

export const Primary = TemplatePrimary.bind({});
Primary.args = {};
