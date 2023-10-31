import type { Meta, StoryObj } from '@storybook/react';

import { AppImage } from './AppImage';

const meta: Meta<typeof AppImage> = {
    title: 'shared/redesigned/AppImage',
    component: AppImage,
    tags: ['autodocs'],
    argTypes: {
        // @ts-ignore
        backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof AppImage>;

export const Primary: Story = {
    args: {},
};
