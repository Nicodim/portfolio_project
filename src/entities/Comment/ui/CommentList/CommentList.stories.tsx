import type { Meta, StoryObj } from '@storybook/react';

import { CommentList } from './CommentList';
import '@/app/styles/index.scss';

const meta: Meta<typeof CommentList> = {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    tags: ['autodocs'],

};

export default meta;
type Story = StoryObj<typeof CommentList>;

export const Primary: Story = {
    args: {
        comments: [
            {
                id: '1',
                text: 'hello world',
                user: { id: '1', username: 'Vasya' },
            },
            {
                id: '2',
                text: 'Comment 2',
                user: { id: '1', username: 'Petya' },
            },
        ],
    },
};
export const Loading: Story = {
    args: {
        comments: [],
        isLoading: true,
    },
};
