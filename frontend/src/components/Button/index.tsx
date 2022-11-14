import styles from "./styles.module.scss";
interface ButtonProps {
  onClickFunction: () => void;
  buttonName: string;
}

export const Button: React.FC<ButtonProps> = ({
  onClickFunction,
  buttonName,
}) => {
  return (
    <button className={styles.button} onClick={onClickFunction}>
      {buttonName}
    </button>
  );
};
