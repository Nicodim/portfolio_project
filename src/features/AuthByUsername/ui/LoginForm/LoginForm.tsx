import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input type="text" className={cls.input} placeholder={t('Enter username')} autoFocus />
            <Input type="text" className={cls.input} placeholder={t('Enter password')} />
            <Button className={cls.loginBtn}>
                {t('Sing in')}
            </Button>
        </div>
    );
};