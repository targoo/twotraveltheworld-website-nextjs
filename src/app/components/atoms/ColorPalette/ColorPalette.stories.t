import { Meta } from "@storybook/react";

import { ColorPalette } from "./ColorPalette";

export default {
  title: "Components/Atoms/ColorPalette",
  component: ColorPalette,
} as Meta;

const TemplatePrimary = (args) => <ColorPalette {...args} />;

export const Primary = TemplatePrimary.bind({});
Primary.args = {};
