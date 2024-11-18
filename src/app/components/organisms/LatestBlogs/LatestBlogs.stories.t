import { Meta } from "@storybook/react";

import { LatestBlogs } from "./LatestBlogs";

export default {
  title: "Components/Organisms/LatestBlogs",
  component: LatestBlogs,
} as Meta;

const Template = (args) => <LatestBlogs {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
