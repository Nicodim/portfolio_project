import type { Meta, StoryObj } from '@storybook/react';

import { Page } from './Page';
import 'app/styles/index.scss';

const meta: Meta<typeof Page> = {
    title: 'shared/Page',
    component: Page,
    tags: ['autodocs'],
    argTypes: {
        // @ts-ignore
        backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof Page>;

export const Primary: Story = {
    args: {},
};
