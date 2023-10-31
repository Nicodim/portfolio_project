import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { AppLink } from './AppLink';

const meta: Meta<typeof AppLink> = {
    title: 'shared/redesigned/AppLink',
    component: AppLink,
    tags: ['autodocs'],
    args: {
        to: '/',
    },
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const PRIMARY: Story = {
    args: {
        children: 'text',
        variant: 'primary',
    },
};

export const SECONDARY: Story = {
    args: {
        children: 'text',
        variant: 'red',
    },
};
export const SECONDARYDARK: Story = {
    args: {
        children: 'text',
        variant: 'red',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
