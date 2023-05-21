import type { Meta, StoryObj } from '@storybook/react';

import { Image } from '../components/Image';

/**
 * To implement this component we need to pass the path of the desired image and fill in the ALT parameter so that the browser understands the image
 */
const meta = {
  title: 'Example/Image',
  component: Image,
  tags: ['autodocs'],
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * it is possible to put simple images as profile pictures
 */
export const Profile_Image: Story = {
  args: {
    src: 'https://github.com/mikaelmonteirodev.png',
    alt: 'Mikael Monteiro',
    width: 'h-40',
    height: 'w-40'
  },
};

/**
 * we can add logos
 */
export const Logo_component: Story = {
  args: {
    src: 'https://github.com/digitalcollegebr.png',
    alt: 'Digital College Logo',
    width: 'h-20',
    height: 'w-20',
    isRoundedBorder: true,
  },
};

/**
 * Or even bigger banners
 */
export const Banner: Story = {
  args: {
    src: 'https://media.licdn.com/dms/image/D4D16AQF8xUMsNFu-hw/profile-displaybackgroundimage-shrink_350_1400/0/1677518457824?e=1690416000&v=beta&t=KHAZLin0y1LFb60_EqU4q-JRiBoqHXh9sbJXe4EnewE',
    alt: 'Banner',
    width: 'h-30',
    height: 'w-120',
  },
};