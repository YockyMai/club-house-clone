import clsx from 'clsx';
import styles from './WhiteBlock.module.scss';

export const WhiteBlock = ({ children, className }) => {
  return <div className={clsx(styles.block, className)}>{children}</div>;
};
