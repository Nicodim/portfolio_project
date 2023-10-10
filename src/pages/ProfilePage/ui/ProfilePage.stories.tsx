import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

// eslint-disable-next-line nicodim-plugin/layer-imports
import '@/app/styles/index.scss';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import ProfilePage from './ProfilePage';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof ProfilePage> = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const LIGHT: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({
        profile: {
            data: {
                country: Country.Ukraine,
                age: 30,
                first: 'Nick',
                lastname: 'Kravtsov',
                city: 'Dnipro',
                currency: Currency.USD,
                username: 'admin',
            },
        },
    })],
};

export const DARK: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
        profile: {
            data: {
                country: Country.Ukraine,
                age: 30,
                first: 'Nick',
                lastname: 'Kravtsov',
                city: 'Dnipro',
                currency: Currency.USD,
                username: 'admin',
            },
        },
    })],
};
