import type { Meta, StoryObj } from '@storybook/react';

import ArticlesPage from './ArticlesPage';
import 'app/styles/index.scss';

const meta: Meta<typeof ArticlesPage> = {
    title: 'shared/Button',
    component: ArticlesPage,
    tags: ['autodocs'],
    argTypes: {
        // @ts-ignore
        backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof ArticlesPage>;

export const Primary: Story = {
    args: {},
};
