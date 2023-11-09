import type { Meta, StoryObj } from '@storybook/react';

import { UiDesignSwitcher } from './UiDesignSwitcher';

const meta: Meta<typeof UiDesignSwitcher> = {
    title: 'features/UiDesignSwitcher',
    component: UiDesignSwitcher,
};

export default meta;
type Story = StoryObj<typeof UiDesignSwitcher>;

export const PRIMARY: Story = {
    args: {},
};
