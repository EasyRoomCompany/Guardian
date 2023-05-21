import type { Meta, StoryObj } from '@storybook/react';
import { LoginPage } from '../pages/LoginPage';

/**
 * Component of the login page to access the application, optional dakmode for the user.
 */
const meta = {
    title: 'Pages/LoginPage',
    component: LoginPage,
    tags: ['autodocs'],
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ThemeToggleButton_component: Story = {
    args: {
        theme: 'dark',
        onClick: () => alert('Tema alterado')
        },
};
