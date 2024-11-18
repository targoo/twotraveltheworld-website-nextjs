import { Meta } from "@storybook/react";

import { CollapsibleSection } from "./CollapsibleSection";

export default {
  title: "Components/Atoms/CollapsibleSection",
  component: CollapsibleSection,
} as Meta;

const Template = (args) => (
  <CollapsibleSection
    summary="summary"
    title="title"
    subtitle="subtitle"
    {...args}
  >
    Lorem ipsum dolor sit amet consectetur adipisicing elit. At error corporis
    culpa obcaecati quos, voluptatum voluptatem, voluptates vel porro accusamus
    tenetur commodi explicabo iste sunt velit eaque architecto aliquam! Maiores.
  </CollapsibleSection>
);

export const Primary = Template.bind({});
Primary.args = {};
