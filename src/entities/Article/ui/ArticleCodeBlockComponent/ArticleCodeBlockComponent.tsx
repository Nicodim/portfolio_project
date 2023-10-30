import { memo } from 'react';

import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Code } from '@/shared/ui/deprecated/Code';

import cls from './ArticleCodeBlockComponent.module.scss';
import { ArticleCodeBlock } from '../../model/types/article';

export interface ArticleCodeBlockComponentProps {
    className?: string;
    block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = memo(
    (props: ArticleCodeBlockComponentProps) => {
        const { t } = useTranslation();
        const { className, block } = props;
        return (
            <div
                className={classNames(cls.ArticleCodeBlockComponent, {}, [
                    className,
                ])}
            >
                <Code text={block.code} />
            </div>
        );
    },
);
