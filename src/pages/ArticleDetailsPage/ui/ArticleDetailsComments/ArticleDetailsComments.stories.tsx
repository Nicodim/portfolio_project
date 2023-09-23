import type { Meta, StoryObj } from '@storybook/react';

import { ArticleDetailsComments } from './ArticleDetailsComments';
import 'app/styles/index.scss';

const meta: Meta<typeof ArticleDetailsComments> = {
    title: 'shared/ArticleDetailsComments',
    component: ArticleDetailsComments,
    tags: ['autodocs'],
    argTypes: {
        // @ts-ignore
        backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof ArticleDetailsComments>;

export const Primary: Story = {
    args: {
        id: '1',
    },
    decorators: [StoreDecorator({})],

};
