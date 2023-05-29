import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

export interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t, i18n } = useTranslation();
    return (

        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links} />
            <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={cls.mainLink}>{t('Main page')}</AppLink>
            <AppLink theme={AppLinkTheme.SECONDARY} to="/about">{t('About us')}</AppLink>
        </div>
    );
};
