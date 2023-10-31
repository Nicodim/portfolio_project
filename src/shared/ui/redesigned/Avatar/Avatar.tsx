import { CSSProperties, useMemo } from 'react';

import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';

import cls from './Avatar.module.scss';
import UserIcon from '../../../assets/icons/user-Avatar.svg';
import { AppImage } from '../AppImage';
import { Icon } from '../Icon';

export interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
}

export const Avatar = ({ className, src, size = 100, alt }: AvatarProps) => {
    const mods: Mods = {};
    const styles = useMemo<CSSProperties>(
        () => ({
            width: size,
            height: size,
        }),
        [size],
    );

    const fallback = <Skeleton height={size} width={size} border="50%" />;
    const errorFallback = <Icon height={size} width={size} Svg={UserIcon} />;

    return (
        <AppImage
            fallback={fallback}
            errorFallback={errorFallback}
            src={src}
            alt={alt}
            style={styles}
            className={classNames(cls.Avatar, mods, [className])}
        />
    );
};
