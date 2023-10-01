import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Tabs } from './Tabs';
import '@/app/styles/index.scss';

const meta: Meta<typeof Tabs> = {
    title: 'shared/Tabs',
    component: Tabs,
    tags: ['autodocs'],
    argTypes: {
        // @ts-ignore
        backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Primary: Story = {
    args: {
        tabs: [
            {
                value: 'tab 1',
                content: 'tab2',
            },
            {
                value: 'tab 2',
                content: 'tab3',
            },
            {
                value: 'tab 3',
                content: 'tab4',
            },
        ],
        value: 'tab 2',
        onTabClick: action('onTabClick'),
    },
};
