import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { Button } from './Button';

// eslint-disable-next-line nicodim-plugin/layer-imports
import '@/app/styles/index.scss';

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        // @ts-ignore
        backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: 'text',
    },
};

export const Clear: Story = {
    args: {
        children: 'text',
        variant: 'clear',
    },
};
export const ClearInverted: Story = {
    args: {
        children: 'text',
    },
};

export const Outline: Story = {
    args: {
        children: 'text',
        variant: 'outline',
    },
};
export const OutlineSizeL: Story = {
    args: {
        children: 'text',
        variant: 'outline',
        size: 'l',
    },
};
export const OutlineSizeXL: Story = {
    args: {
        children: 'text',
        variant: 'outline',
        size: 'xl',
    },
};
export const OutlineDark: Story = {
    args: {
        children: 'text',
        variant: 'outline',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
export const Disabled: Story = {
    args: {
        children: '>',
        variant: 'outline',
        disabled: true,
        size: 'm',
    },
};
