import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Navbar } from './Navbar';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof Navbar> = {
    title: 'widgets/Navbar',
    component: Navbar,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Light: Story = {
    args: {

    },
    decorators: [StoreDecorator({})],

};

export const Dark: Story = {
    args: {

    },
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
};
export const WithAuthData: Story = {
    args: {

    },
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
        user: { },
    })],
};
