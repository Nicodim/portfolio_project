import { Preview } from '@storybook/react';

import { Theme } from '../../src';
import { FeaturesFlagsDecorator } from '../../src/shared/config/storybook/FeaturesFlagsDecorator/FeaturesFlagsDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';

const preview: Preview = {
    decorators: [
        StyleDecorator,
        ThemeDecorator(Theme.LIGHT),
        RouterDecorator,
        SuspenseDecorator,
        FeaturesFlagsDecorator({}),
    ],
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        themes: {
            default: 'dark',
            list: [
                { name: 'light', class: Theme.LIGHT, color: '#e6ecf1' },
                { name: 'dark', class: Theme.DARK, color: '#162950' },
                { name: 'orange', class: Theme.ORANGE, color: '#e78e0b' },
            ],
        },
    },
};

export default preview;
