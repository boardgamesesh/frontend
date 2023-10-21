import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../Input";

const meta = {
  title: "Components/Input",
  component: Input,
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            // Built with no label on purpose, to be used within `TextField` where label is present
            id: "label",
            enabled: false,
          },
        ],
      },
    },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Placeholder: Story = {
  args: {
    placeholder: "Type here...",
  },
};
