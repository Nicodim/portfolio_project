import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import AddCommentForm from './AddCommentForm';
// eslint-disable-next-line nicodim-plugin/layer-imports
import '@/app/styles/index.scss';

const meta: Meta<typeof AddCommentForm> = {
    title: 'features/AddCommentForm',
    component: AddCommentForm,
    tags: ['autodocs'],
    argTypes: {
        // @ts-ignore
        backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof AddCommentForm>;

export const Primary: Story = {
    args: {
        onSendComment: action('onSendComment'),
    },
    decorators: [StoreDecorator({})],
};
