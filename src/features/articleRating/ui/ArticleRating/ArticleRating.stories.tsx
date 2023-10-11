import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import ArticleRating from './ArticleRating';

const meta: Meta<typeof ArticleRating> = {
    title: 'features/ArticleRating',
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
    args: {
        articleId: '1',
    },
    decorators: [StoreDecorator({
        user: {
            authData: {
                id: '1',
            },
        },
    })],
};
