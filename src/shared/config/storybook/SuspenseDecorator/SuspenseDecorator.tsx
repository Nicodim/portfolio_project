import { Decorator } from '@storybook/react';
import '@/app/styles/index.scss';
import { Suspense } from 'react';

export const SuspenseDecorator: Decorator = (Story) => (
    <Suspense>
        <Story />
    </Suspense>
);
