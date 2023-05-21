import type { Meta, StoryObj } from '@storybook/react';
import { ThemeToggleButton } from '../components/ThemeToggleButton';

/**
 * The input component is capable of adapting itself according to its type, and its entire tailwind class can be implemented or left only in the default
 */
const meta = {
    title: 'Example/ThemeToggleButton',
    component: ThemeToggleButton,
    tags: ['autodocs'],
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Using type Search
 */
export const ThemeToggleButton_component: Story = {
    args: {
        theme: 'dark',
    },
};
