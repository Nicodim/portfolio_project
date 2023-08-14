import type { Meta, StoryObj } from '@storybook/react';

import ArticlesPage from './ArticlesPage';
import 'app/styles/index.scss';

const meta: Meta<typeof ArticlesPage> = {
    title: 'pages/Article/ArticlesPage',
    component: ArticlesPage,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ArticlesPage>;

export const Primary: Story = {
    args: {},
};
