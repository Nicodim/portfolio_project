import type { Meta, StoryObj } from '@storybook/react';
import '@/app/styles/index.scss';
import { Country } from '@/entities/Country';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
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
            { value: Country.Ukraine, content: Country.Ukraine },
            { value: Country.Israel, content: Country.Israel },
            { value: Country.Germany, content: Country.Germany },
            { value: Country.Georgia, content: Country.Georgia },
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
            { value: Country.Ukraine, content: Country.Ukraine },
            { value: Country.Israel, content: Country.Israel },
            { value: Country.Germany, content: Country.Germany },
            { value: Country.Georgia, content: Country.Georgia },
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
            { value: Country.Ukraine, content: Country.Ukraine },
            { value: Country.Israel, content: Country.Israel },
            { value: Country.Germany, content: Country.Germany },
            { value: Country.Georgia, content: Country.Georgia },
        ],
    },
    decorators: [ThemeDecorator(Theme.ORANGE)],
};
