import type { Meta, StoryObj } from '@storybook/react';

import { NotificationList } from './NotificationList';
import 'app/styles/index.scss';

const meta: Meta<typeof NotificationList> = {
    title: 'shared/NotificationList',
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
};
