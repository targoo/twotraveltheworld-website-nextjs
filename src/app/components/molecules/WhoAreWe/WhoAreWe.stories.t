import { Meta } from "@storybook/react";

import { WhoAreWe } from "./WhoAreWe";

export default {
  title: "Components/Molecules/WhoAreWe",
  component: WhoAreWe,
} as Meta;

const Template = (args) => <WhoAreWe {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
