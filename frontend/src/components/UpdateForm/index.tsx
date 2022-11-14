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
  handleUpdateEmployee: (data: Data) => void;
  closeModal: () => void;
  toUpdateEmployee: Data;
}

export const UpdateForm: React.FC<Props> = ({
  handleUpdateEmployee,
  closeModal,
  toUpdateEmployee,
}) => {
  const formSchema = Yup.object({
    name: Yup.string()
      .min(3, "name should contain at least 3 characteres")
      .required("Name is required"),
    email: Yup.string().email("Invalid E-mail").required("E-mail is required"),
    country: Yup.string().required("Country is required"),
    title: Yup.string().required("Job title is required"),
  });

  return (
    <>
      <h1 className={styles.title}>Update a employee</h1>

      <Formik
        className={styles.container}
        initialValues={{
          name: toUpdateEmployee.name,
          email: toUpdateEmployee.email,
          country: toUpdateEmployee.country,
          title: toUpdateEmployee.title,
        }}
        validationSchema={formSchema}
        onSubmit={(data: Data, { resetForm }: any) => {
          handleUpdateEmployee(data);
          closeModal();
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
              error={touched.title && errors.title}
            />
            {errors.title && touched.title && <p>{errors.title}</p>}
            <button type="submit" disabled={!isValid}>
              <span>Save</span>
            </button>
          </FormikForm>
        )}
      </Formik>
    </>
  );
};
