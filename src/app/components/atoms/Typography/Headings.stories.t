import { Meta } from "@storybook/react";

import { H1, H2, H3, H4 } from "./Headings";
import { Colors } from "../../../../../src/styles/colors";

export default {
  title: "Components/Atoms/Headings",
  component: H1,
} as Meta;

const Template = (args) => (
  <div>
    <H1 {...args}>H1 - Lorem Ipsum</H1>
    <H2 {...args}>H2 - Lorem Ipsum</H2>
    <H3 {...args}>H3 - Lorem Ipsum</H3>
    <H4 {...args}>H4 - Lorem Ipsum</H4>
    <H1 color={Colors.Info} underscoreColor={Colors.Error} {...args}>
      H1 - Red Lorem Ipsum
    </H1>
  </div>
);

export const Primary = Template.bind({});
Primary.args = {};
