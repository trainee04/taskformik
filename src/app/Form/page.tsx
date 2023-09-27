"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Axios from "axios";

function EmployeeForm({ setIsOpen }: any) {
  const initialValues = {
    firstname: "",
    lastname: "",
    birth_day: "",
    mobile_number: "",
    address: {
      line1: "",
      line2: "",
      country: "",
      state: "",
      city: "",
      zip: "",
    },
    father_name: "",
    mother_name: "",
    alternate_number: "",
    employee_id: "",
    joining_date: "",
    official_email: "",
    personal_email: "",
  };

  const newDate = new Date();
  const validationSchema = Yup.object({
    official_email: Yup.string()
      .email("Invalid email format")
      .required("Required"),
    firstname: Yup.string().min(1).max(50).required("Required"),
    lastname: Yup.string().min(1).max(50),
    mobile_number: Yup.number()
      .typeError("That doesn't look like a phone number")
      .positive("A phone number can't start with a minus")
      .integer("A phone number can't include a decimal point")
      .min(10, "Phone must be at 10 characters long")
      .required("A phone number is required"),
    employee_id: Yup.string().min(2).max(50).required("Required"),
    address: Yup.object({
      line1: Yup.string().min(2).max(50).required("Required"),
      line2: Yup.string().max(50),
      country: Yup.string().min(2).max(50).required("Required"),
      state: Yup.string().min(2).max(50).required("Required"),
      city: Yup.string().min(2).max(50).required("Required"),
      zip: Yup.number()
        .typeError("That doesn't look like a zip code")
        .positive("A zip code can't start with a minus")
        .integer("A zip code can't include a decimal point"),
    }),
    father_name: Yup.string().min(1).max(50),
    mother_name: Yup.string().min(1).max(50),
    alternate_number: Yup.number()
      .typeError("That doesn't look like a phone number")
      .positive("A phone number can't start with a minus")
      .integer("A phone number can't include a decimal point")
      .min(10, "Phone must be at 10 characters long"),
    personal_email: Yup.string().email("Invalid email format"),
    joining_date: Yup.date().max(
      new Date(newDate.getTime() - 1 * 24 * 3600000)
    ),
    birth_day: Yup.date().max(
      new Date(Date.now() - 567648000000),
      "You must be at least 18 years"
    ),
  });

  const onSubmit = async (values: any, onSubmitProps: any) => {
    const sampleData = {
      firstname: values.firstname,
      lastname: values.lastname,
      birth_day: values.birth_day,
      mobile_number: values.mobile_number,
      address: values.address,
      father_name: values.father_name,
      mother_name: values.mother_name,
      alternate_number: values.alternate_number,
      employee_id: values.employee_id,
      joining_date: values.joining_date,
      personal_email: values.personal_email,
      official_email: values.official_email,
    };
    console.log("sampleData >", sampleData);

    const axiosConfig: any = {
      header: {
        "Content-Type": "application/json",
      },
    };
    try {
      const data = await Axios.post(
        "http://192.168.1.63:3332/new",
        sampleData,
        axiosConfig
      );
      console.log("resp >", data);
      return data;
    } catch (e: any) {
      console.log("e >", e?.message);
      throw new Error(e?.message);
    } finally {
      onSubmitProps.resetForm();
    }
    // setIsOpen(alert("data is submitted"));
  };

  //   const hello = new Date(newDate.getTime()-(1*24*3600000))
  //   console.log("hello", hello, "newDate", newDate);

  return (
    <div className="p-5">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        enableReinitialize
      >
        {(formik) => {
          return (
            <Form>
              <h1 className="font-bold text-center text-2xl py-1">
                EMPLOYEE FORM
              </h1>
              <div>
                <label>First Name</label>
                <Field
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  placeholder="firstname"
                  name="firstname"
                />
                <ErrorMessage
                  name="firstname"
                  component="div"
                  className="text-red-900"
                />
              </div>
              <div>
                <label>Last Name</label>
                <Field
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  placeholder="lastname"
                  name="lastname"
                />
                <ErrorMessage
                  name="lastname"
                  component="div"
                  className="text-red-900"
                />
              </div>
              <div>
                <label>Mobile Number</label>
                <Field
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  placeholder="Mobile Number"
                  name="mobile_number"
                />

                <ErrorMessage
                  name="mobile_number"
                  component="div"
                  className="text-red-900"
                />
              </div>
              <div>
                <label>address</label>

                <Field
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  placeholder="line1"
                  name="address.line1"
                />
                <ErrorMessage
                  name="address.line1"
                  component="div"
                  className="text-red-900"
                />
                <Field
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  placeholder="line2"
                  name="address.line2"
                />
                <ErrorMessage
                  name="address.line2"
                  component="div"
                  className="text-red-900"
                />
                <Field
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  placeholder="country"
                  name="address.country"
                />
                <ErrorMessage
                  name="address.country"
                  component="div"
                  className="text-red-900"
                />
                <Field
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  placeholder="state"
                  name="address.state"
                />
                <ErrorMessage
                  name="address.state"
                  component="div"
                  className="text-red-900"
                />
                <Field
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  placeholder="city"
                  name="address.city"
                />
                <ErrorMessage
                  name="address.city"
                  component="div"
                  className="text-red-900"
                />
                <Field
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  placeholder="zip"
                  name="address.zip"
                />
                <ErrorMessage
                  name="address.zip"
                  component="div"
                  className="text-red-900"
                />
              </div>
              <div>
                <label>Father's Name</label>
                <Field
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  placeholder="Father's Name"
                  name="father_name"
                />
                <ErrorMessage
                  name="father_name"
                  component="div"
                  className="text-red-900"
                />
              </div>
              <div>
                <label>Mother's Namee</label>
                <Field
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  placeholder="Mother's Name"
                  name="mother_name"
                />
                <ErrorMessage
                  name="mother_name"
                  component="div"
                  className="text-red-900"
                />
              </div>
              <div>
                <label>Alternative Number</label>
                <Field
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  placeholder="Alternate Number"
                  name="alternate_number"
                />
                <ErrorMessage
                  name="alternate_number"
                  component="div"
                  className="text-red-900"
                />
              </div>
              <div>
                <label>joining_date</label>
                <Field
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="date"
                  placeholder="Date Of Joining"
                  name="joining_date"
                />
                <ErrorMessage
                  name="joining_date"
                  component="div"
                  className="text-red-900"
                />
              </div>
              <div>
                <label>Official Email</label>
                <Field
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="email"
                  placeholder=" Official Email"
                  name="official_email"
                />
                <ErrorMessage
                  name="official_email"
                  component="div"
                  className="text-red-900"
                />
              </div>
              <div>
                <label>Personal Email</label>
                <Field
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="email"
                  placeholder=" Official Email"
                  name="personal_email"
                />
                <ErrorMessage
                  name="personal_email"
                  component="div"
                  className="text-red-900"
                />
              </div>
              <div>
                <label>D.O.B</label>
                <Field
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="date"
                  placeholder="D.O.B"
                  name="birth_day"
                />
                <ErrorMessage
                  name="birth_day"
                  component="div"
                  className="text-red-900"
                />
              </div>
              <div>
                <label>Employee Code</label>
                <Field
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  placeholder="Employee Code"
                  name="employee_id"
                />
                <ErrorMessage
                  name="employee_id"
                  component="div"
                  className="text-red-900"
                />
              </div>
              <div className="py-5">
                <button
                  type="submit"
                  className=" text-white bg-blue-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  disabled={!formik.isValid || formik.isSubmitting}
                >
                  Submit
                </button>
              </div>
              <div>
                <button
                  type="submit"
                  className=" text-white bg-red-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={() => setIsOpen(false)}
                >
                  Close
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default EmployeeForm;
