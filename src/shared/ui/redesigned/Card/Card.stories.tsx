import type { Meta, StoryObj } from '@storybook/react';

// eslint-disable-next-line nicodim-plugin/layer-imports
import '@/app/styles/index.scss';
import { Card } from './Card';
import { Text } from '../Text/Text';

const meta: Meta<typeof Card> = {
    title: 'shared/redesigned/Card',
    component: Card,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Primary: Story = {
    args: {
        children: <Text title="test" text="test" />,
    },
};
