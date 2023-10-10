import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

import AboutPage from './AboutPage';
// eslint-disable-next-line nicodim-plugin/layer-imports
import '@/app/styles/index.scss';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof AboutPage> = {
    title: 'pages/AboutPage',
    component: AboutPage,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AboutPage>;

export const LIGHT: Story = {
    args: {
    },
};

export const DARK: Story = {
    args: {
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
