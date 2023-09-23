import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

import MainPage from './MainPage';
import 'app/styles/index.scss';

const meta: Meta<typeof MainPage> = {
    title: 'pages/MainPage',
    component: MainPage,
    tags: ['autodocs'],
    decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof MainPage>;

export const LIGHT: Story = {
    args: {},
};

export const DARK: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
