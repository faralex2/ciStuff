import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card } from "./Card";
import ringImg from "../../assets/ring.jpg";
import brilliantRing from "../../assets/brilliant.jpg";

const meta: Meta<typeof Card> = {
  title: "UI/Card",
  component: Card,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    image: ringImg,
    title: "Золотое кольцо",
    description: "Элегантное кольцо из белого золота 585 пробы",
    price: 12990,
  },
};

export const WithLongDescription: Story = {
  args: {
    image: brilliantRing,
    title: "Колье с бриллиантами",
    description:
      "Очень длинное описание для теста вёрстки карточки. Оно должно переноситься на несколько строк и не ломать макет.",
    price: 99990,
  },
};
