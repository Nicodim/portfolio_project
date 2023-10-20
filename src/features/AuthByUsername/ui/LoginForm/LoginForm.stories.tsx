import type { Meta, StoryObj } from '@storybook/react';

// eslint-disable-next-line nicodim-plugin/layer-imports
import '@/app/styles/index.scss';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import LoginForm from './LoginForm';

const meta: Meta<typeof LoginForm> = {
    title: 'features/LoginForm',
    component: LoginForm,
    tags: ['autodocs'],
    argTypes: {
        // @ts-ignore
        backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            loginForm: { username: '123', password: 'asd' },
        }),
    ],
};
