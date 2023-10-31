import type { Meta, StoryObj } from '@storybook/react';

import { Popover } from './Popover';
// eslint-disable-next-line nicodim-plugin/layer-imports
import '@/app/styles/index.scss';

const meta: Meta<typeof Popover> = {
    title: 'shared/redesigned/Popover',
    component: Popover,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Primary: Story = {
    args: {},
};
