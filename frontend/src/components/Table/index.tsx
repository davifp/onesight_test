import { AiFillEdit } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import styles from "./styles.module.scss";

interface Props {
  openModal: () => void;
  closeModal: () => void;
  data: Data[];
  handleDeleteEmployee: (id: string) => void;
  handleAddToUpdateEmployee: (Employee: Data) => void;
}

interface Data {
  id: string;
  name: string;
  email: string;
  country: string;
  title: string;
}

export const Table: React.FC<Props> = ({
  data,
  handleDeleteEmployee,
  handleAddToUpdateEmployee,
}: Props) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Name</th>
          <th>E-mail</th>
          <th>Country</th>
          <th>Job Title</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.country}</td>
            <td>{item.title}</td>
            <td>
              <button onClick={() => handleAddToUpdateEmployee(item)}>
                <AiFillEdit size={20} color={"#3B50AD"} />
              </button>
              <button
                onClick={() => {
                  handleDeleteEmployee(item.id);
                }}
              >
                <BsTrash size={20} color={"#3B50AD"} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
