import type { Meta, StoryObj } from '@storybook/react';

import { ArticlesFilters } from './ArticlesFilters';
// eslint-disable-next-line nicodim-plugin/layer-imports
import 'app/styles/index.scss';

const meta: Meta<typeof ArticlesFilters> = {
    title: 'widgets/ArticlesFilters',
    component: ArticlesFilters,
    tags: ['autodocs'],
    argTypes: {
        // @ts-ignore
        backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof ArticlesFilters>;

export const Primary: Story = {
    args: {},
};
