import { Meta } from "@storybook/react";

import { Breadcrumbs, Crumb } from "./Breadcrumbs";

export default {
  title: "Components/Atoms/Breadcrumbs",
  component: Breadcrumbs,
} as Meta;

const TemplatePrimary = (args) => (
  <Breadcrumbs {...args}>
    <Crumb {...args}>
      <a href=".">Drink</a>
    </Crumb>
    <Crumb {...args} disabled={true}>
      <a href=".">Wine</a>
    </Crumb>
    <Crumb {...args}>
      <a href=".">French</a>
    </Crumb>
    <Crumb {...args}>Bordeau</Crumb>
  </Breadcrumbs>
);

const TemplateSecondary = (args) => (
  <Breadcrumbs {...args}>
    <Crumb {...args}>
      <a href=".">French</a>
    </Crumb>
    <Crumb {...args}>Bordeau</Crumb>
  </Breadcrumbs>
);

export const Primary = TemplatePrimary.bind({});
Primary.args = {};

export const Secondary = TemplateSecondary.bind({});
TemplateSecondary.args = {};
