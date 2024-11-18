import type { Meta, StoryObj } from '@storybook/react';

import { Alert } from './Alert';

const meta = {
  title: 'Components/Atoms/Alert',
  component: Alert,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   type: { control: 'text' },
  // },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: 'alarm',
    children:
      'Thanks for participating in our survey! We will contact you soon. The team.',
  },
};

// const TemplatePrimary = (args) => (
//   <Alert {...args}>
//     Thanks for participating in our survey! We will contact you soon. The team.
//   </Alert>
// );

// export const Primary = TemplatePrimary.bind({});
// Primary.args = {};
