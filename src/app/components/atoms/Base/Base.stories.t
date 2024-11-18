import { Meta } from "@storybook/react";

import { AlternativeBase, Base } from "./Base";

export default {
  title: "Components/Atoms/Base",
  component: Base,
} as Meta;

const TemplatePrimary = (args) => <Base {...args} />;

export const Primary = TemplatePrimary.bind({});
Primary.args = {};

const TemplateAlternative = (args) => <AlternativeBase {...args} />;

export const Alternative = TemplateAlternative.bind({});
Alternative.args = {};
