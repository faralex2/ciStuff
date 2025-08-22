import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "UI/Input",
  component: Input,
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = { args: { label: "Username", placeholder: "Type..." } };
export const WithError: Story = { args: { label: "Email", error: "Invalid email" } };
