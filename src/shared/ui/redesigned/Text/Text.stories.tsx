import type { Meta, StoryObj } from '@storybook/react';

// eslint-disable-next-line nicodim-plugin/layer-imports
import '@/app/styles/index.scss';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { Text } from './Text';

const meta: Meta<typeof Text> = {
    title: 'shared/redesigned/Text',
    component: Text,
    tags: ['autodocs'],
    argTypes: {
        // @ts-ignore
        backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
    args: {
        title: 'Title',
        text: 'text',
    },
};
export const Error: Story = {
    args: {
        title: 'Title',
        text: 'text',
        variant: 'error',
    },
};
export const OnlyWithTitle: Story = {
    args: {
        title: 'Title',
    },
};
export const OnlyWithText: Story = {
    args: {
        text: 'text',
    },
};

export const PrimaryDark: Story = {
    args: {
        title: 'Title',
        text: 'text',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
export const OnlyWithTitleDark: Story = {
    args: {
        title: 'Title',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
export const OnlyWithTextDark: Story = {
    args: {
        text: 'text',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
export const SizeM: Story = {
    args: {
        title: 'Title',
        text: 'text',
        size: 'm',
    },
};
export const SizeS: Story = {
    args: {
        title: 'Title',
        text: 'text',
        size: 's',
    },
};
export const SizeL: Story = {
    args: {
        title: 'Title',
        text: 'text',
        size: 'l',
    },
};
