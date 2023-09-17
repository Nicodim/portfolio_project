import type { Meta, StoryObj } from '@storybook/react';

import { ArticleInfiniteList } from './ArticleInfiniteList';
import 'app/styles/index.scss';

const meta: Meta<typeof ArticleInfiniteList> = {
    title: 'shared/ArticleInfitineList',
    component: ArticleInfiniteList,
    tags: ['autodocs'],
    argTypes: {
        // @ts-ignore
        backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof ArticleInfiniteList>;

export const Primary: Story = {
    args: {},
};
