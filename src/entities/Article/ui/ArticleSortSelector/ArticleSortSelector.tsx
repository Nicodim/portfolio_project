import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';
import { Select, SelectOptions } from 'shared/ui/Select/Select';
import { SortOrder } from 'shared/types';
import { ArticleSortField } from '../../model/consts/consts';
import cls from './ArticleSortSelector.module.scss';

export interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeSort: (newSort: ArticleSortField) => void;
    onChangeOrder: (newOrder: SortOrder) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const {
        className, onChangeOrder, order, onChangeSort, sort,
    } = props;
    const { t } = useTranslation();

    const orderOptions = useMemo<SelectOptions[]>(() => [
        {
            value: 'asc',
            content: t('ascending'),
        },
        {
            value: 'desc',
            content: t('descending'),
        },
    ], [t]);

    const sortFieldOptions = useMemo<SelectOptions[]>(() => [
        {
            value: ArticleSortField.CREATED,
            content: t('creation date'),
        },
        {
            value: ArticleSortField.TITLE,
            content: t('title'),
        },
        {
            value: ArticleSortField.VIEWS,
            content: t('views'),
        },
    ], [t]);

    const changeSortHandler = useCallback((newSort: string) => {
        onChangeSort(newSort as ArticleSortField);
    }, [onChangeSort]);

    const changeOrderHandler = useCallback((newOrder: string) => {
        onChangeOrder(newOrder as SortOrder);
    }, [onChangeOrder]);

    return (
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
            <Select
                options={sortFieldOptions}
                label={t('Sort by')}
                value={sort}
                onChange={changeSortHandler}
            />
            <Select
                options={orderOptions}
                label={t('by')}
                value={order}
                onChange={changeOrderHandler}
                className={cls.order}
            />
        </div>
    );
});
