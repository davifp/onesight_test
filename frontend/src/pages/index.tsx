import Modal from "react-modal";
import type { NextPage } from "next";
import styles from "../styles/Home.module.scss";
import { Table } from "../components/Table";
import { useState } from "react";

const Home: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className={styles.container}>
      <Table openModal={openModal} closeModal={closeModal} />
      <Modal
        className={styles.modalContainer}
        isOpen={isOpen}
        onRequestClose={closeModal}
      >
        <form action="">
          <label htmlFor="">Name</label>
          <input />
        </form>
      </Modal>
    </div>
  );
};

export default Home;
