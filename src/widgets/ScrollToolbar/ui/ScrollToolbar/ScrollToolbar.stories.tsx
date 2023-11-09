import type { Meta, StoryObj } from '@storybook/react';

import { ScrollToolbar } from './ScrollToolbar';
// eslint-disable-next-line nicodim-plugin/layer-imports
import 'app/styles/index.scss';

const meta: Meta<typeof ScrollToolbar> = {
    title: 'widgets/ScrollToolbar',
    component: ScrollToolbar,
    tags: ['autodocs'],
    argTypes: {
        // @ts-ignore
        backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof ScrollToolbar>;

export const Primary: Story = {
    args: {},
};
