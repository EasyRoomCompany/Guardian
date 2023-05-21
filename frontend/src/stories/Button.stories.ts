import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../components/Button';

/**
 * here it is possible to see the interaction of the button component.
To implement it just replace the **alert**
 */
const meta = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Button default large
 */
export const Large: Story = {
  args: {
    size: 'large',
    label: 'Large Button',
    backgroundColor: 'red',
    onClick: () => alert(`Testando o clique do botão Vermelho`)
  },
};

/**
 * Button default medium
 */
export const Medium: Story = {
  args: {
    size: 'medium',
    label: 'Medium Button',
    backgroundColor: 'blue',
    onClick: () => alert('Testando o clique do botão Azul')
  },
};

/**
 * Button default small
 */
export const Small: Story = {
  args: {
    size: 'small',
    label: 'Small Button',
    backgroundColor: 'green',
    onClick: () => alert('Testando o clique do botão Verde')
  },
};
