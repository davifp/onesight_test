import styles from "../styles/Home.module.scss";
import type { NextPage } from "next";
import { Table } from "../components/Table";
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Table />
    </div>
  );
};

export default Home;
