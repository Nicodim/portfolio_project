import type { Meta, StoryObj } from '@storybook/react';

import ArticleRating from './ArticleRating';

const meta: Meta<typeof ArticleRating> = {
    title: 'shared/ArticleRating',
    component: ArticleRating,
    tags: ['autodocs'],
    argTypes: {
        // @ts-ignore
        backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof ArticleRating>;

export const Primary: Story = {
    args: {},
};
