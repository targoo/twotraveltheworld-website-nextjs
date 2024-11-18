import styled from "styled-components";
import { Meta } from "@storybook/react";
import { HelpCircle } from "react-feather";

import {
  Icon,
  CarIcon,
  WalkIcon,
  ChevronsRightIcon,
  ChevronsDownIcon,
} from "./Icon";
import { Colors } from "@styles/colors";

export default {
  title: "Components/Atoms/Icon",
  component: Icon,
} as Meta;

const TemplatePrimary = (args) => (
  <Icon label="help me" {...args}>
    <HelpCircle />
  </Icon>
);

export const Primary = TemplatePrimary.bind({});
Primary.args = {};

const TemplateSecondary = (args) => (
  <Wrapper>
    <CarIcon className="car-icon" size={1} {...args} />
    <WalkIcon color={Colors.Contrast} size={3} {...args} />
    <ChevronsRightIcon size={1} {...args} />
    <ChevronsDownIcon size={1} {...args} />
  </Wrapper>
);

export const Secondary = TemplateSecondary.bind({});
Secondary.args = {
  size: 2,
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row wrap;
  gap: 32px;
`;
