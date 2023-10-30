import type { Meta, StoryObj, Preview } from "@storybook/react";

import { TextField } from "../TextField";
 

const meta: Meta<typeof TextField> = {
  title: "Components/TextField",
  component: TextField,
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            id: "label",
            enabled: false,
          },
        ],
      },
    },
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    label: "Text",
    type: "text",
    name: "text",
    placeholder: "Type something here...",
  },
  render: (args) => <TextField {...args} onChange={(e) => {}} />,
};

export const Email: Story = {
  args: {
    label: "Email",
    type: "email",
    name: "email",
    placeholder: "Enter email adress",
  },
  render: (args) => <TextField {...args} onChange={(e) => {}} />,
};


export const Password: Story = {
  args: {
    label: "Password",
    type: "password",
    name: "password",
    placeholder: "Enter a password",
  },
  render: (args) => <TextField {...args} onChange={(e) => {}} />,
};