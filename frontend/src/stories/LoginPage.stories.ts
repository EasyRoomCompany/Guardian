import type { Meta, StoryObj } from '@storybook/react';
import { LoginPage } from '../pages/LoginPage';

/**
 * The input component is capable of adapting itself according to its type, and its entire tailwind class can be implemented or left only in the default
 */
const meta = {
    title: 'Pages/LoginPage',
    component: LoginPage,
    tags: ['autodocs'],
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * replace the alert for implementation in dakmode
 */
export const ThemeToggleButton_component: Story = {
    args: {
        theme: 'dark',
        onClick: () => alert('Tema alterado')
        },
};
