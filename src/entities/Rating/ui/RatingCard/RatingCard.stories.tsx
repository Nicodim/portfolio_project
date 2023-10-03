import type { Meta, StoryObj } from '@storybook/react';

import { RatingCard } from './RatingCard';
import 'app/styles/index.scss';

const meta: Meta<typeof RatingCard> = {
    title: 'shared/RatingCard',
    component: RatingCard,
    tags: ['autodocs'],
    argTypes: {
        // @ts-ignore
        backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof RatingCard>;

export const Primary: Story = {
    args: {},
};
