import type { Meta, StoryObj } from '@storybook/react';

import 'app/styles/index.scss';
import { Card } from 'shared/ui/Card/Card';
import { Text } from 'shared/ui/Text/Text';

const meta: Meta<typeof Card> = {
    title: 'shared/Card',
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