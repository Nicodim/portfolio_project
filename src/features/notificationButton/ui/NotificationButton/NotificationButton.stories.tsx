import type { Meta, StoryObj } from '@storybook/react';

import { NotificationButton } from './NotificationButton';
import '@/app/styles/index.scss';

const meta: Meta<typeof NotificationButton> = {
    title: 'shared/NotificationButton',
    component: NotificationButton,
    tags: ['autodocs'],
    argTypes: {
        // @ts-ignore
        backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof NotificationButton>;

export const Primary: Story = {
    args: {},
};
