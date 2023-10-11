import type { Meta, StoryObj } from '@storybook/react';

// eslint-disable-next-line nicodim-plugin/layer-imports
import '@/app/styles/index.scss';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { ListBox } from './ListBox';

const meta: Meta<typeof ListBox> = {
    title: 'shared/ListBox',
    component: ListBox,
    tags: ['autodocs'],
    argTypes: {
        // @ts-ignore
        backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof ListBox>;

export const Primary: Story = {
    args: {
        value: 'ssss',
        defaultValue: 'ssss',
        direction: 'bottom right',
        items: [
            { content: '1asfasfasf23', value: '123' },
            { content: '1asfasfasf21233', value: '1232' },
        ],
    },
};

export const Dark: Story = {
    args: {
        value: 'ssss',
        defaultValue: 'ssss',
        readonly: false,
        direction: 'bottom right',
        items: [
            { content: '1asfasfasf23', value: '123' },
            { content: '1asfasfasf21233', value: '1232' },
        ],
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Orange: Story = {
    args: {
        value: 'ssss',
        defaultValue: 'ssss',
        readonly: false,
        direction: 'bottom left',
        items: [
            { content: '1asfasfasf23', value: '123' },
            { content: '1asfasfasf21233', value: '1232' },
        ],
    },
    decorators: [ThemeDecorator(Theme.ORANGE)],
};
