import React, {
    ImgHTMLAttributes, memo, ReactElement, useLayoutEffect, useState,
} from 'react';

export interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement>{
    className?: string;
    src?: string;
    alt?: string;
    fallback?: ReactElement;
    errorFallback?: ReactElement;
}

export const AppImage = memo((props: AppImageProps) => {
    const {
        className,
        src,
        alt = 'image',
        fallback,
        errorFallback,
        ...otherProps
    } = props;

    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useLayoutEffect(() => {
        const img = new Image();
        img.src = src ?? '';
        img.onload = () => {
            setIsLoading(false);
        };
        img.onerror = () => {
            setIsLoading(false);
            setHasError(true);
        };
    }, [src]);

    if (isLoading && fallback) {
        return fallback;
    }

    if (hasError && errorFallback) {
        return errorFallback;
    }
    return (
        <img alt={alt} src={src} className={className} {...otherProps} />
    );
});
