import type { Meta, StoryObj } from '@storybook/react';

import { NotificationItem } from './NotificationItem';
import 'app/styles/index.scss';

const meta: Meta<typeof NotificationItem> = {
    title: 'shared/NotificationItem',
    component: NotificationItem,
    tags: ['autodocs'],
    argTypes: {
        // @ts-ignore
        backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof NotificationItem>;

export const Primary: Story = {
    args: {},
};
