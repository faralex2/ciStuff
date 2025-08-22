import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  args: { children: "Click me" },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = { args: { variant: "primary" } };
export const Secondary: Story = { args: { variant: "secondary" } };
export const Ghost: Story = { args: { variant: "ghost" } };

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 12 }}>
      <Button size="sm" onClick={() => console.log("Small clicked!")}>
        Small
      </Button>
      <Button size="md" onClick={() => console.log("Medium clicked!")}>
        Medium
      </Button>
      <Button size="lg" onClick={() => console.log("Large clicked!")}>
        Large
      </Button>
    </div>
  ),
};
