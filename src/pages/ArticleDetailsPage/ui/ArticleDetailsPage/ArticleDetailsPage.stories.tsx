import type { Meta, StoryObj } from '@storybook/react';

import ArticleDetailsPage from './ArticleDetailsPage';
import 'app/styles/index.scss';

const meta: Meta<typeof ArticleDetailsPage> = {
    title: 'shared/Button',
    component: ArticleDetailsPage,
    tags: ['autodocs'],
    argTypes: {
        // @ts-ignore
        backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof ArticleDetailsPage>;

export const Primary: Story = {
    args: {},
};
