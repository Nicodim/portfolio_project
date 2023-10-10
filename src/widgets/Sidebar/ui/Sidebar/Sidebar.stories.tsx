import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Sidebar } from './Sidebar';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof Sidebar> = {
    title: 'widgets/Sidebar',
    component: Sidebar,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Light: Story = {
    args: {

    },
    decorators: [StoreDecorator({
        user: {
            authData: {},
        },
    })],
};
export const LightNoAuth: Story = {
    args: {

    },
    decorators: [StoreDecorator({
        user: {},
    })],
};

export const Dark: Story = {
    args: {

    },
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
        user: {
            authData: {},
        },
    })],
};

export const DarkNoAuth: Story = {
    args: {

    },
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
        user: {},
    })],
};
