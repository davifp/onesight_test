import { useState } from "react";
import * as Yup from "yup";
import { Formik, Form as FormikForm, Field } from "formik";
import styles from "./styles.module.scss";

interface Data {
  name: string;
  email: string;
  country: string;
  title: string;
}

interface Props {
  handleCreateEmployee: () => void;
}

export const CreateForm: React.FC<Props> = ({ handleCreateEmployee }) => {
  const [dataError, setDataError] = useState();
  const [data, setData] = useState<Data>();
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (data: Data, resetForm: any) => {
    console.log(data);
    try {
      setData(data);
      resetForm();
      setIsSuccess(true);
    } catch (err: any) {
      setDataError(err);
    }
  };

  const formSchema = Yup.object({
    name: Yup.string()
      .min(3, "name should contain at least 3 characteres")
      .required("Name is required"),
    email: Yup.string().email("Invalid E-mail").required("E-mail is required"),
    country: Yup.string().required("Country is required"),
    title: Yup.string().required("Job title is required"),
  });

  return (
    <Formik
      className={styles.container}
      initialValues={{ name: "", email: "", country: "", title: "" }}
      validationSchema={formSchema}
      onSubmit={(data: Data, { resetForm }: any) => {
        handleCreateEmployee(data);
      }}
    >
      {({ errors, touched, isSubmitting, handleSubmit, isValid }) => (
        <FormikForm
          className={styles.form}
          name="contact"
          method="post"
          onSubmit={handleSubmit}
        >
          <label htmlFor="reachout">Name:</label>
          <Field
            className={styles.nameInput}
            type="text"
            name="name"
            autoCorrect="off"
            autoComplete="name"
            placeholder="Your name*"
            valid={touched.name && !errors.name}
            error={touched.name && errors.name}
          />
          {errors.name && touched.name && <p>{errors.name}</p>}
          <label htmlFor="">E-mail:</label>
          <Field
            className={styles.nameInput}
            type="email"
            name="email"
            autoCapitalize="off"
            autoCorrect="off"
            autoComplete="email"
            placeholder="E-mail*"
            valid={touched.email && !errors.email}
            error={touched.email && errors.email}
          />
          {errors.email && touched.email && <p>{errors.email}</p>}
          <label htmlFor="reachout">Country:</label>
          <Field
            className={styles.nameInput}
            type="text"
            name="country"
            autoCorrect="off"
            autoComplete="country"
            placeholder="Country"
            valid={touched.country && !errors.country}
            error={touched.country && errors.country}
          />
          {errors.country && touched.country && <p>{errors.country}</p>}
          <label htmlFor="reachout">Job Title:</label>
          <Field
            className={styles.nameInput}
            type="text"
            name="title"
            autoCorrect="off"
            autoComplete="title"
            placeholder="Job Title*"
            valid={touched.title && !errors.title}
            error={touched.title && errors.title}
          />
          {errors.title && touched.title && <p>{errors.title}</p>}
          <button type="submit" disabled={!isValid}>
            <span>Save</span>
          </button>
        </FormikForm>
      )}
    </Formik>
  );
};
