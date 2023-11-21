import React, { useState } from 'react';

import { useTranslation } from 'react-i18next';

import { Text } from '@/shared/ui/redesigned/Text';
import { Page } from '@/widgets/Page';

const MainPage = () => {
    const { t } = useTranslation('main');
    const [value, setValue] = useState('');

    const onChange = (value: string) => {
        setValue(value);
    };
    return (
        <Page data-testid="MainPage">
            <Text title={t('Main page')} />
        </Page>
    );
};

export default MainPage;
