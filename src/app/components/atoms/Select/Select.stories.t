import { Meta } from "@storybook/react";
import { useState } from "react";

import { Select } from "./Select";

export default {
  title: "Components/Atoms/Select",
  component: Select,
} as Meta;

const Template = () => {
  const [value, setValue] = useState<string>("");

  return (
    <Select>
      <option value={""}></option>
      <option value={11}>11</option>
      <option value={22}>22</option>
    </Select>
  );
};
export const Primary = Template.bind({});
Primary.args = {};
