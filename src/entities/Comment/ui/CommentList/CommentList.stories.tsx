import type { Meta, StoryObj } from '@storybook/react';

import { CommentList } from './CommentList';
import 'app/styles/index.scss';

const meta: Meta<typeof CommentList> = {
    title: 'shared/CommentList',
    component: CommentList,
    tags: ['autodocs'],
    argTypes: {
        // @ts-ignore
        backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof CommentList>;

export const Primary: Story = {
    args: {},
};
