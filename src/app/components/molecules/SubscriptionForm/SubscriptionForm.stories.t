import { Meta } from "@storybook/react";

import { SubscriptionForm } from "./SubscriptionForm";

export default {
  title: "Components/Molecules/SubscriptionForm",
  component: SubscriptionForm,
} as Meta;

const TemplatePrimary = (args) => <SubscriptionForm {...args} />;

export const Primary = TemplatePrimary.bind({});
Primary.args = {};
