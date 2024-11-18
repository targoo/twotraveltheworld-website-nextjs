import { VisuallyHidden } from "./VisuallyHidden";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Components/Atoms/VisuallyHidden",
  component: VisuallyHidden,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => (
  <VisuallyHidden {...args}>VisuallyHidden</VisuallyHidden>
);

export const Primary = Template.bind({});
Primary.args = {};
