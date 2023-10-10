import type { Meta, StoryObj } from '@storybook/react';

import { StarRating } from './StarRating';
// eslint-disable-next-line nicodim-plugin/layer-imports
import 'app/styles/index.scss';

const meta: Meta<typeof StarRating> = {
    title: 'shared/StarRating',
    component: StarRating,
    tags: ['autodocs'],
    argTypes: {
        // @ts-ignore
        backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof StarRating>;

export const Primary: Story = {
    args: {
        size: 30,
        selectedStars: 3,
    },
};
