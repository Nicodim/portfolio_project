import type { Meta, StoryObj } from '@storybook/react';

import { ArticleTextBlockComponent } from './ArticleTextBlockComponent';
import 'app/styles/index.scss';

const meta: Meta<typeof ArticleTextBlockComponent> = {
    title: 'entities/ArticleTextBlockComponent',
    component: ArticleTextBlockComponent,
    tags: ['autodocs'],
    argTypes: {
        // @ts-ignore
        backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof ArticleTextBlockComponent>;

export const Primary: Story = {
    args: {},
};
