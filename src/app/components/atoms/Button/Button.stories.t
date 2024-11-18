import { Meta } from "@storybook/react";
import styled from "styled-components";

import { Button, WarningButton } from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Atoms/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as Meta;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const TemplateButtons = (args) => (
  <Table cellSpacing={0} cellPadding={0}>
    <tr>
      <th></th>
      <th>Fill</th>
      <th>Outline</th>
      <th>Ghost</th>
    </tr>
    <tr>
      <td>Small</td>
      <td>
        <Button size="small" variant="fill" {...args}>
          Button
        </Button>
      </td>
      <td>
        <Button size="small" variant="outline" {...args}>
          Button
        </Button>
      </td>
      <td>
        <Button size="small" variant="ghost" {...args}>
          Button
        </Button>
      </td>
    </tr>
    <tr>
      <td>Medium</td>
      <td>
        <Button size="medium" variant="fill" {...args}>
          Button
        </Button>
      </td>
      <td>
        <Button size="medium" variant="outline" {...args}>
          Button
        </Button>
      </td>
      <td>
        <Button size="medium" variant="ghost" {...args}>
          Button
        </Button>
      </td>
    </tr>
    <tr>
      <td>Large</td>
      <td>
        <Button size="large" variant="fill" {...args}>
          Button
        </Button>
      </td>
      <td>
        <Button size="large" variant="outline" {...args}>
          Button
        </Button>
      </td>
      <td>
        <Button size="large" variant="ghost" {...args}>
          Button
        </Button>
      </td>
    </tr>
  </Table>
);

const TemplateLink = (args) => (
  <Button size="large" href="https://www.google.com" target="_blank" {...args}>
    Button
  </Button>
);

const TemplateWarning = (args) => (
  <WarningButton {...args}>Button</WarningButton>
);

export const Buttons = TemplateButtons.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Buttons.args = {};

export const Link = TemplateLink.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Link.args = {};

export const Warning = TemplateWarning.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Warning.args = {};

const Table = styled.table`
  font-family: sans-serif;

  th,
  td {
    text-align: center;
    padding: 16px;
  }
  th {
    border-bottom: 1px solid hsl(0deg 0% 80%);
  }
  td:first-of-type,
  th:first-of-type {
    border-right: 1px solid hsl(0deg 0% 80%);
  }
  td:first-of-type {
    text-align: right;
  }
`;
