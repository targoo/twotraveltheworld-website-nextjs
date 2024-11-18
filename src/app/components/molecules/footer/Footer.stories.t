import { Meta } from "@storybook/react";

import { Footer } from "./Footer";

export default {
  title: "Components/Molecules/Footer",
  component: Footer,
} as Meta;

const TemplatePrimary = (args) => <Footer {...args} />;

export const Primary = TemplatePrimary.bind({});
Primary.args = {};
