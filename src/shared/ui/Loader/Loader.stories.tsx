import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Loader } from './Loader';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof Loader> = {
    title: 'shared/Loader',
    component: Loader,
    tags: ['autodocs'],

};

export default meta;
type Story = StoryObj<typeof Loader>;

export const PRIMARY: Story = {
    args: {
    },
};

export const SECONDARY: Story = {
    args: {
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
