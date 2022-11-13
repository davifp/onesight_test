import { AiFillEdit } from "react-icons/ai";
import styles from "./styles.module.scss";

interface ModalProps {
  openModal: () => void;
  closeModal: () => void;
}

export const Table: React.FC<ModalProps> = ({
  openModal,
  closeModal,
}: ModalProps) => {
  const handleButtonClick = () => {
    openModal();
  };

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>E-mail</th>
          <th>Country</th>
          <th>Job Title</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <input type={"checkbox"} />
          </td>
          <td>Davi</td>
          <td>davipavone@gmail.com</td>
          <td>Brazil</td>
          <td>Front-end Developer</td>
          <td>
            <button onClick={handleButtonClick}>
              <AiFillEdit size={20} color={"#3B50AD"} />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
