import { Meta } from "@storybook/react";

import { Layout, LayoutNav, LayoutMain } from ".";

export default {
  title: "Components/Molecules/Layout",
  component: Layout,
} as Meta;

const TemplatePrimary = (args) => (
  <Layout {...args}>
    <LayoutNav>
      <h2>Navigation</h2>
      <ul>
        <li>Home</li>
        <li>Shop</li>
        <li>Contact</li>
      </ul>
    </LayoutNav>
    <LayoutMain>
      <h1>Welcome to ThingStore</h1>
      <p>Please enjoy your time shopping!</p>
    </LayoutMain>
  </Layout>
);

export const Primary = TemplatePrimary.bind({});
Primary.args = {};
