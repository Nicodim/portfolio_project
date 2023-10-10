import { Decorator } from '@storybook/react';
// eslint-disable-next-line nicodim-plugin/layer-imports
import '@/app/styles/index.scss';
import { Suspense } from 'react';

export const SuspenseDecorator: Decorator = (Story) => (
    <Suspense>
        <Story />
    </Suspense>
);
