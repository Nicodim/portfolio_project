import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Text, TextTheme } from 'shared/ui/Text/Text';

const meta: Meta<typeof Text> = {
    title: 'shared/Text',
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
        theme: TextTheme.ERROR,
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
