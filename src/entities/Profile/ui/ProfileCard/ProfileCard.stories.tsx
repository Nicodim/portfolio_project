import type { Meta, StoryObj } from '@storybook/react';

import 'app/styles/index.scss';
import { ProfileCard } from 'entities/Profile';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import avatar from 'shared/assets/tests/storybook.jpg';

const meta: Meta<typeof ProfileCard> = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    tags: ['autodocs'],
    argTypes: {
        // @ts-ignore
        backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Primary: Story = {
    args: {
        data: {
            country: Country.Ukraine,
            age: 30,
            first: 'Nick',
            lastname: 'Kravtsov',
            city: 'Dnipro',
            currency: Currency.USD,
            username: 'admin',
            avatar,
        },
    },
};

export const WithError: Story = {
    args: {
        error: 'true',
    },
};

export const Loading: Story = {
    args: {
        isLoading: true,
    },
};
