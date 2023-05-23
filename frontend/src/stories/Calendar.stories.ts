import type { Meta, StoryObj } from '@storybook/react';

import Calendar from '../components/Calendar';

/**
 * Calendar component that shows date and time
 */
const meta = {
  title: 'Components/Calendar',
  component: Calendar,
  tags: ['autodocs'],
  
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Basic example
 */
export const Calendar_component: Story = {
  args: {
    label: 'Appointment Date',
  },
};