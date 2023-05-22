import type { Meta, StoryObj } from '@storybook/react';

import { AlertMessage } from '../components/AlertMessage';

/**
 * component capable of playing alerts to the user
 */
const meta = {
  title: 'Components/AlertMessage',
  component: AlertMessage,
  tags: ['autodocs'],
} satisfies Meta<typeof AlertMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Success
 */
export const Success_Alert: Story = {
  args: {
    severity: 'success',
    msg: 'successful registration',

  },
};

/**
 * Error
 */
export const Error_Alert: Story = {
  args: {
    severity: 'error',
    msg: 'invalid data, fill in correctly according to the form',
    title: 'Error in form'
  },
};

/**
 * info
 */
export const Info_Alert: Story = {
  args: {
    severity: 'info',
    msg: 'check your email box',
    title: 'Attention',
    emphasis: 'confirm register'
  },
};

/**
 * info
 */
export const Warning_Alert: Story = {
  args: {
    severity: 'warning',
    msg: 'please check your username',
    emphasis: 'incorrect data'
  },
};


