import styles from './Display.module.css';

export default function Display({ value }) {
  return (
    <div className={styles['component-display']}>
      <div>{value}</div>
    </div>
  );
}
