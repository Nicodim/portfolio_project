import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Theme } from 'app/providers/ThemeProvider';
import { AppLink, AppLinkTheme } from './AppLink';

const meta: Meta<typeof AppLink> = {
    title: 'shared/AppLink',
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
        theme: AppLinkTheme.PRIMARY,
    },
};

export const SECONDARY: Story = {
    args: {
        children: 'text',
        theme: AppLinkTheme.SECONDARY,
    },
};
export const SECONDARYDARK: Story = {
    args: {
        children: 'text',
        theme: AppLinkTheme.SECONDARY,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
