import type { Meta, StoryObj } from '@storybook/react';

import { Page } from './Page';
// eslint-disable-next-line nicodim-plugin/layer-imports
import '@/app/styles/index.scss';

const meta: Meta<typeof Page> = {
    title: 'widgets/Page',
    component: Page,
    tags: ['autodocs'],
    argTypes: {
        // @ts-ignore
        backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof Page>;

export const Primary: Story = {
    args: {},
};
