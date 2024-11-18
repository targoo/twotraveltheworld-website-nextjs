import { Meta } from "@storybook/react";

import { FrequentlyAskedQuestion } from "./FrequentlyAskedQuestion";

export default {
  title: "Components/Atoms/FrequentlyAskedQuestion",
  component: FrequentlyAskedQuestion,
} as Meta;

const Template = (args) => (
  <FrequentlyAskedQuestion
    question="question"
    answer="answer"
    {...args}
  ></FrequentlyAskedQuestion>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
