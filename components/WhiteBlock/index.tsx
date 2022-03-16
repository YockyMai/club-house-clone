import clsx from 'clsx';
import styles from './WhiteBlock.module.scss';
import React from "react";

interface whiteProps {
    children?: any,
    className: string
}

export const WhiteBlock: React.FC<whiteProps> = ({children, className}) => {
    return <div className={clsx(styles.block, className)}>{children}</div>;
};
