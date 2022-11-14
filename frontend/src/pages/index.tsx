import Modal from "react-modal";
import type { NextPage } from "next";
import styles from "../styles/Home.module.scss";
import { Table } from "../components/Table";
import { useEffect, useState } from "react";
import { CreateForm } from "../components/CreateForm";
import { api } from "../services/api";
import { UpdateForm } from "../components/UpdateForm";

interface Data {
  id?: string;
  name: string;
  email: string;
  country: string;
  title: string;
}

const Home: NextPage = () => {
  const [employee, setEmployee] = useState<Data[]>([]);
  const [toUpdateEmployee, setToUpdateEmployee] = useState<Data>();
  const [isUpdateForm, setIsUpdateForm] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [updateTable, setUpdateTable] = useState<any>();

  useEffect(() => {
    const getData = async () => {
      const data = await api.get("employees").then((response) => response.data);
      setEmployee(data);
    };

    getData();
  }, [updateTable]);

  async function handleCreateEmployee(newEmployee: Data) {
    try {
      await api.post("employees", newEmployee);
      setUpdateTable(1);
    } catch (err) {
      console.log(err);
    }
  }

  async function handleDeleteEmployee(id: string) {
    try {
      await api.delete(`employees/${id}`);
      setUpdateTable(2);
    } catch (err) {
      console.log(err);
    }
  }

  async function handleDeleteAll() {
    try {
      await api.delete("employees");
      setUpdateTable(3);
    } catch (err) {
      console.log(err);
    }
  }

  async function handleUpdateEmployee(data: Data) {
    try {
      await api.patch(`employees/${toUpdateEmployee?.id}`, data);
      setUpdateTable(4);
    } catch (err) {
      console.log(err);
    }
  }

  function handleAddToUpdateEmployee(data: Data) {
    setToUpdateEmployee(data);
    setIsUpdateForm(true);
    openModal();
  }

  function handleCreateButton() {
    setIsUpdateForm(false);
    openModal();
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
        <button onClick={handleDeleteAll}>Delete</button>
        <button onClick={handleCreateButton}>Create</button>
      </div>
      <Table
        handleDeleteEmployee={handleDeleteEmployee}
        handleAddToUpdateEmployee={handleAddToUpdateEmployee}
        data={employee}
      />
      <Modal
        className={styles.modalContainer}
        isOpen={isOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
      >
        {isUpdateForm ? (
          <UpdateForm
            handleUpdateEmployee={handleUpdateEmployee}
            toUpdateEmployee={toUpdateEmployee}
            closeModal={closeModal}
          />
        ) : (
          <CreateForm
            handleCreateEmployee={handleCreateEmployee}
            closeModal={closeModal}
          />
        )}
      </Modal>
    </div>
  );
};

export default Home;
