import Modal from "react-modal";
import type { NextPage } from "next";
import styles from "../styles/Home.module.scss";
import { Table } from "../components/Table";
import { useEffect, useMemo, useState } from "react";
import { CreateForm } from "../components/CreateForm";

interface Data {
  id: string;
  name: string;
  email: string;
  country: string;
  title: string;
}

const Home: NextPage = () => {
  const data = useMemo(
    () => [
      {
        id: "1",
        name: "Davi Pavone",
        email: "davipavone@gmail.com",
        country: "Brazil",
        title: "Front-end Developer",
      },
      {
        id: "2",
        name: "Davi Pavone",
        email: "davipavone@gmail.com",
        country: "Brazil",
        title: "Front-end Developer",
      },
      {
        id: "3",
        name: "Davi Pavone",
        email: "davipavone@gmail.com",
        country: "Brazil",
        title: "Front-end Developer",
      },
    ],
    []
  );

  const [employee, setEmployee] = useState<Data[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setEmployee(data);
  }, [data]);

  function handleCreateEmployee(newEmployee: Data) {
    console.log(newEmployee);
    data.push(newEmployee);
  }

  function handleDeleteEmployee(id: string) {
    console.log(id);
    const newArray = employee.filter((item) => item.id !== id);
    setEmployee(newArray);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div id="body" className={styles.container}>
      <div className={styles.buttonContainer}>
        <button>Delete</button>
        <button onClick={openModal}>Create</button>
      </div>
      <Table
        openModal={openModal}
        closeModal={closeModal}
        handleDeleteEmployee={handleDeleteEmployee}
        data={employee}
      />
      <Modal
        className={styles.modalContainer}
        isOpen={isOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
      >
        <CreateForm handleCreateEmployee={handleCreateEmployee} />
      </Modal>
    </div>
  );
};

export default Home;
