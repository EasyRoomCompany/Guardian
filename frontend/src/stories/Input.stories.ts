import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "../components/Input";

/**
 * The input component is capable of adapting itself according to its type, and its entire tailwind class can be implemented or left only in the default
 */
const meta = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Using type Search
 */
export const Search_example: Story = {
  args: {
    id: "search",
    className:
      "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5",
    type: "search",
    placeholder: "Pesquisar",
  },
};

/**
 * Using type Password
 */

export const Password_example: Story = {
  args: {
    id: "password",
    className:
      "bg-sky-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-30 p-2.5",
    type: "password",
    placeholder: "Insira sua senha",
  },
};

/**
 * Using type Input
 */
export const Input_example: Story = {
  args: {
    id: "input",
    className:
      "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3",
    type: "input",
    placeholder: "Digite seu nome",
  },
};

/**
 * Using type Number
 */
export const Number_example: Story = {
  args: {
    id: "number",
    className:
      "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-3",
    type: "number",
  },
};
