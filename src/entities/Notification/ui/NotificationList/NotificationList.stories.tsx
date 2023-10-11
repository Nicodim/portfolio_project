import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import { NotificationList } from './NotificationList';

// eslint-disable-next-line nicodim-plugin/layer-imports
import '@/app/styles/index.scss';

const meta: Meta<typeof NotificationList> = {
    title: 'entities/Notification/NotificationList',
    component: NotificationList,
    tags: ['autodocs'],
    argTypes: {
        // @ts-ignore
        backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof NotificationList>;

export const Primary: Story = {
    args: {},
    decorators: [StoreDecorator({})],
};
