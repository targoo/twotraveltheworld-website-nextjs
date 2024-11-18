import { Meta } from "@storybook/react";
import styled from "styled-components";

import { BlockSeparator } from "./BlockSeparator";

export default {
  title: "Components/Atoms/BlockSeparator",
  component: BlockSeparator,
} as Meta;

const Template = (args) => (
  <div>
    <Blue></Blue>
    <BlockSeparator {...args}>CONTENT</BlockSeparator>
    <Blue></Blue>
  </div>
);

export const Primary = Template.bind({});
Primary.args = {};

const Blue = styled.p`
  height: 50px;
  width: 100%;
  background-color: blue;
`;
