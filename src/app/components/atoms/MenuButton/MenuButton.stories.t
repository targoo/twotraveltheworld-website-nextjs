import { Meta } from "@storybook/react";

import { MenuButton } from "./MenuButton";

export default {
  title: "Components/Atoms/MenuButton",
  component: MenuButton,
} as Meta;

const menuButtonStyle = {
  marginLeft: "2rem",
};

const TemplatePrimary = () => (
  <>
    <MenuButton isOpen={true} style={menuButtonStyle} />
    <MenuButton
      isOpen={true}
      strokeWidth="8"
      color="#ff6666"
      lineProps={{ strokeLinecap: "round" }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      width="24"
      height="64"
      style={menuButtonStyle}
    />
    <MenuButton
      isOpen={true}
      strokeWidth="4"
      color="#3399cc"
      transition={{ ease: "easeOut", duration: 0.2 }}
      width="64"
      height="24"
      style={menuButtonStyle}
    />
  </>
);

export const Primary = TemplatePrimary.bind({});
Primary.args = {};
