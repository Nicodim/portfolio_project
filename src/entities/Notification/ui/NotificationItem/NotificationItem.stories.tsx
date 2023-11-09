import type { Meta, StoryObj } from '@storybook/react';

import { NotificationItem } from './NotificationItem';
// eslint-disable-next-line nicodim-plugin/layer-imports
import '@/app/styles/index.scss';

const meta: Meta<typeof NotificationItem> = {
    title: 'entities/Notification/NotificationItem',
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
    args: {
        item: {
            id: '1',
            title: 'aaaaa',
            description: 'asdasdasd',
        },
    },
};
