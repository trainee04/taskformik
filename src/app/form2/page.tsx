"use client";

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
// import axios from "axios";

function Form2() {
//   const [ record, setRecord] = useState();
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(6).max(12).required("Required"),
  });

  const onSubmit = (values: any, onSubmitProps: any) => {
    console.log("values", values);
    onSubmitProps.resetForm();
  };



  

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        
      >
        {(formik) => {
          return (
            <Form>
              <div>
                <label>Email</label>
                <Field
                  type="email"
                  name="email"
                  placeholder="enter your email"
                />
                <ErrorMessage name="email" />
              </div>
              <div>
                <label>password</label>
                <Field type="text" name="password" placeholder="password" />
                <ErrorMessage name="password" />
              </div>
              <div>
                <button
                  type="submit"
                  disabled={!formik.isValid || formik.isSubmitting}
                >
                  Submit
                </button>
              </div>
     
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default Form2;
