import clsx from 'clsx';
import styles from './StepInfo.module.scss';

interface StepInfoProps {
  title: string;
  description?: string;
  icon: string;
}

export const StepInfo: React.FC<StepInfoProps> = ({ title, description, icon }) => {
  return (
    <div className={clsx(styles.block, 'text-center')}>
      <div>
        <img className={styles.img} src={icon} alt="Step picture" />
      </div>
      <b className={styles.title}>{title}</b>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
};
