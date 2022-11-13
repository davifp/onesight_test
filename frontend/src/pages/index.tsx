import Modal from "react-modal";
import type { NextPage } from "next";
import styles from "../styles/Home.module.scss";
import { Table } from "../components/Table";
import { useEffect, useMemo, useState } from "react";
import { CreateForm } from "../components/CreateForm";

interface Data {
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

  const [datas, setDatas] = useState<Data[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setDatas(data);
  }, [data]);

  function handleCreateEmployee(newEmployee: Data) {
    console.log("hey");
    data.push(newEmployee);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div id="body" className={styles.container}>
      <Table openModal={openModal} closeModal={closeModal} data={data} />
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
