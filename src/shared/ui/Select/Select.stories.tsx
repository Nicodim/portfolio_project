import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
    title: 'shared/Select',
    component: Select,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Select>;

export const PRIMARY: Story = {
    args: {
        label: 'Add something',
        options: [
            { value: '123', content: 'Firsts' },
            { value: '421', content: 'Last' },
        ],
    },
};
