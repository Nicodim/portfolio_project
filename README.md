## Launch of the project

```
npm install - install dependencies
npm run start:dev - launching the server + frontend project in dev mode
```

----

## Scripts

- `npm run start` - Running a frontend project on webpack dev server
- `npm run start:dev` - Running a frontend project on webpack dev server + backend
- `npm run start:dev:server` - Starting the backend server
- `npm run build:prod` - Build in prod mode
- `npm run build:dev` - Build in dev mode (not minimized)
- `npm run lint:ts` - Checking ts files with linter
- `npm run lint:ts:fix` - Correcting ts files with a linter
- `npm run lint:scss` - Checking style scss files with a linter
- `npm run lint:scss:fix` - Correcting scss style files with a linter
- `npm run test:unit` - Running unit tests on jest
- `npm run storybook` - Storybook launch
- `npm run storybook:build` - Assembling a storybook build

[//]: # (- `npm run prepare` - прекоммит хуки)
- `npm run generate:slice` - Script for generating FSD slices

----

## Project architecture

The project was written in accordance with the Feature sliced design methodology

Link to documentation - [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

----

## Working with translations

The project uses the i18next library to work with translations.
Translation files are stored in public/locales.

For comfortable work, we recommend installing the plugin for webstorm/vscode

i18next Documentation - [https://react.i18next.com/](https://react.i18next.com/)

----

## Tests

The project uses 3 types of tests:
1) Regular unit tests on jest - `npm run test:unit`
2) Component tests with React testing library -`npm run test:unit`
3) e2e testing with Cypress `npm run test:e2e`

More about tests - [documentation testing](/docs/tests.md)

----

## Linting

The project uses eslint to check typescript code and stylelint to check style files.

Also for strict control of the main architectural principles
uses its own eslint plugin *eslint-plugin-nicodim-plugin*,
which contains 3 rules
1) path-checker - prohibits the use of absolute imports within one module
2) layer-imports - checks the correct use of layers from the point of view of FSD
   (for example widgets cannot be used in features and entities)
3) public-api-imports - allows imports from other modules only from public api. Has auto fix

##### Running linters
- `npm run lint:ts` - Checking ts files with linter
- `npm run lint:ts:fix` - Correcting ts files with a linter
- `npm run lint:scss` - Checking style scss files with a linter
- `npm run lint:scss:fix` - Correcting scss style files with a linter

----
## Storybook

The project describes story cases for each component.
Requests to the server are mocked using storybook-addon-mock.

A file with story cases is created next to the component with the extension .stories.tsx

You can start the storybook with the command:
- `npm run storybook`

Read more about [Storybook](/docs/storybook.md)

Example:

```typescript jsx
import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from './Avatar';
import AvatarImg from '../../assets/tests/storybook.jpg';

const meta: Meta<typeof Avatar> = {
    title: 'shared/Avatar',
    component: Avatar,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const PRIMARY: Story = {
    args: {
        size: 150,
        src: AvatarImg,
    },
};

export const Small: Story = {
    args: {
        size: 50,
        src: AvatarImg,
    },
};
```


----

## Project configuration

For development, the project contains 1 config:
1. Webpack - ./config/build

All configuration is stored in /config
- /config/babel - babel
- /config/build - webpack configuration
- /config/jest - test environment configuration
- /config/storybook - storybook configuration

The `scripts` folder contains various scripts for refactoring\simplifying code writing\generating reports, etc.

----

### Working with data

Interaction with data is carried out using the redux toolkit.
If possible, reused entities should be normalized using EntityAdapter

Requests to the server are sent using [RTK query](/src/shared/api/rtkApi.ts)

For asynchronous connection of reducers (so as not to pull them into a common bundle) it is used
[DynamicModuleLoader](/src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx)

----

### Working with feature-flags

Allow the use of feature flags only using the toggleFeatures helper

an object with options is passed into it

{
name: name of the feature flag,
on: function that will work after the feature is enabled
of: function that will work after turning off the feature
}

To automatically remove a feature, use the remove-feature.ts script,
which takes 2 arguments
1. Name of the feature flag to be removed
2. State (on\off)

----

## Entities

- [Article](/src/entities/Article)
- [Comment](/src/entities/Comment)
- [Counter](/src/entities/Counter)
- [Country](/src/entities/Country)
- [Currency](/src/entities/Currency)
- [Notification](/src/entities/Notification)
- [Profile](/src/entities/Profile)
- [Rating](/src/entities/Rating)
- [User](/src/entities/User)

## Features

- [addCommentForm](/src/features/addCommentForm)
- [articleEditForm](/src/features/articleEditForm)
- [articleRating](/src/features/articleRating)
- [articleRecommendationsList](/src/features/articleRecommendationList)
- [AuthByUsername](/src/features/AuthByUsername)
- [avatarDropdown](/src/features/avatarDropdown)
- [editableProfileCard](/src/features/editableProfileCard)
- [LangSwitcher](/src/features/LangSwitcher)
- [notificationButton](/src/features/notificationButton)
- [ThemeSwitcher](/src/features/ThemeSwitcher)
- [UI](/src/features/UI)
