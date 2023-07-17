import type { Meta, StoryObj } from '@storybook/react';
import { CountrySelect } from 'entities/Country';

const meta: Meta<typeof CountrySelect> = {
    title: 'entities/CountrySelect',
    component: CountrySelect,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CountrySelect>;

export const PRIMARY: Story = {
    args: {},
};
