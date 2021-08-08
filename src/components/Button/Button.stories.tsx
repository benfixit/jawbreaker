import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
    onClick: () => console.log("Not working!!!"),
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
export const Large = Template.bind({});
Large.args = {
  size: "large",
  children: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  children: "Button",
};

export const Round = Template.bind({});
Round.args = {
  shape: "round",
  children: "Button",
};

export const Circle = Template.bind({});
Circle.args = {
  shape: "circle",
  size: "large",
  children: "O",
};

export const Block = Template.bind({});
Block.args = {
  size: "small",
  children: "Button",
  block: true,
};

export const Danger = Template.bind({});
Danger.args = {
  size: "small",
  children: "Button",
  danger: true,
  onClick: () => console.log("Dangerous!!!"),
};

export const Disabled = Template.bind({});
Disabled.args = {
  size: "small",
  children: "Button",
  disabled: true,
};

export const Href = Template.bind({});
Href.args = {
  children: "Link with not target",
  href: "https://www.google.com",
};

export const HrefWithTarget = Template.bind({});
HrefWithTarget.args = {
  children: "Link with target",
  href: "https://www.google.com",
  target: "_blank",
};
