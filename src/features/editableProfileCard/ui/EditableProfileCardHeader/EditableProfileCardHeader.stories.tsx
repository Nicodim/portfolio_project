import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import { EditableProfileCardHeader } from './EditableProfileCardHeader';
// eslint-disable-next-line nicodim-plugin/layer-imports
import '@/app/styles/index.scss';

const meta: Meta<typeof EditableProfileCardHeader> = {
    title: 'features/editableProfileCard/EditableProfileCardHeader',
    component: EditableProfileCardHeader,
    tags: ['autodocs'],
    argTypes: {
        // @ts-ignore
        backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof EditableProfileCardHeader>;

export const Primary: Story = {
    args: {},
    decorators: [StoreDecorator({})],
};
