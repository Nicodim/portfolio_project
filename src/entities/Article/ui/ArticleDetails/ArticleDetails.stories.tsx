import type { Meta, StoryObj } from '@storybook/react';

import { ArticleDetails } from './ArticleDetails';
import 'app/styles/index.scss';

const meta: Meta<typeof ArticleDetails> = {
    title: 'entities/ArticleDetails',
    component: ArticleDetails,
    tags: ['autodocs'],
    argTypes: {
        // @ts-ignore
        backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof ArticleDetails>;

export const Primary: Story = {
    args: {},
};
