import styles from "./styles.module.scss";
export const Table: React.FC = () => {
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
        </tr>
      </tbody>
    </table>
  );
};
