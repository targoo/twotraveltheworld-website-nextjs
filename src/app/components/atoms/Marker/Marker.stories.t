import { Meta } from "@storybook/react";

import { Marker } from "./Marker";
import { Colors } from "@styles/colors";

export default {
  title: "Components/Atoms/Markers",
  component: Marker,
} as Meta;

const Template = (args) => (
  <div>
    <Marker color={Colors.Contrast} number={2} {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {};
