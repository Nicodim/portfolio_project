import { Decorator } from '@storybook/react';

// eslint-disable-next-line nicodim-plugin/layer-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { Theme } from '@/shared/const/theme';
// eslint-disable-next-line nicodim-plugin/layer-imports

export const ThemeDecorator = (theme: Theme): Decorator => (Story) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
            <Story />
        </div>
    </ThemeProvider>

);
