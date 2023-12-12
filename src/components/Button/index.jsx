import styles from './Button.module.css';

export default function Button({ name, orange, wide, clickHandler }) {
  const handleClick = () => {
    clickHandler(name);
  };

  const className = [
    styles['component-button'],
    orange ? styles['orange'] : '',
    wide ? styles['wide'] : '',
  ];

  return (
    <div className={className.join(' ').trim()}>
      <button onClick={handleClick}>{name}</button>
    </div>
  );
}
