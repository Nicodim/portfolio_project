import React from 'react';

import { useTranslation } from 'react-i18next';

import { Text } from '@/shared/ui/redesigned/Text';
import { Page } from '@/widgets/Page';

const AboutPage = () => {
    const { t } = useTranslation('about');

    return (
        <Page data-testid="AboutPage">
            <Text title={t('About us')} />
        </Page>
    );
};

export default AboutPage;
