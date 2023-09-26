"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Axios from 'axios';
import { error } from "console";

function EmployeeForm({ setIsOpen }: any) {
 
  const initialValues = {  
    FirstName: "",
    LastName: "",
    mobNo: "",
    Address: {
      Line1:'',
      Line2:'',
      country:'',
      state:'',
      city:'',
      zipcode:''
    },
    FatherName: "",
    MotherName: "",
    AltNum: "",
    PersonalEmail: "",
    OfficialEmail: "",
    DateOfJoining: "",
    DOB: "",
    EmployeeCode: "",
  };
  
  const newDate = new Date();
  const validationSchema = Yup.object({
    OfficialEmail: Yup.string()
      .email("Invalid email format")
      .required("Required"),
    FirstName: Yup.string().min(2).max(50).required("Required"),
    LastName: Yup.string().min(2).max(50),
    mobNo: Yup.number()
      .typeError("That doesn't look like a phone number")
      .positive("A phone number can't start with a minus")
      .integer("A phone number can't include a decimal point")
      .min(10, "Phone must be at 10 characters long")
      .required("A phone number is required"),
    EmployeeCode: Yup.string().min(2).max(50).required("Required"),
    Address: Yup.object({
      Line1: Yup.string().min(2).max(50).required('Required'),
      Line2:Yup.string().max(50),
      country:Yup.string().min(2).max(50).required('Required'),
      state:Yup.string().min(2).max(50).required('Required'),
      city:Yup.string().min(2).max(50).required('Required'),
      zipcode:Yup.number()
      .typeError("That doesn't look like a zip code")
      .positive("A zip code can't start with a minus")
      .integer("A zip code can't include a decimal point")
      .min(10, "zip code must be at 10 characters long"),
    }) ,
    FatherName: Yup.string().min(2).max(50),
    MotherName: Yup.string().min(2).max(50),
    AltNum: Yup.number()
      .typeError("That doesn't look like a phone number")
      .positive("A phone number can't start with a minus")
      .integer("A phone number can't include a decimal point")
      .min(10, "Phone must be at 10 characters long"),
    PersonalEmail: Yup.string().email("Invalid email format"),
    DateOfJoining: Yup.date().max(
      new Date(newDate.getTime() - 1 * 24 * 3600000)
    ),
    DOB: Yup.date().max(
      new Date(Date.now() - 567648000000),
      "You must be at least 18 years"
    ),
  });

 
  const onSubmit = async (values: any, onSubmitProps: any) => {
    const data = {
      records: [
        {
          fields: {
            FirstName: values.FirstName,
            LastName: values.LastName,
            mobNo: values.mobNo,
            Address: values.Address,
            FatherName: values.FatherName,
            MotherName: values.MotherName,
            AltNum: values.AltNum,
            PersonalEmail: values.PersonalEmail,
            OfficialEmail: values.OfficialEmail,
            DateOfJoining: values.DateOfJoining,
            DOB: values.DOB,
            EmployeeCode: values.EmployeeCode,
          },
        },
      ],
    };
    const axiosConfig:any = {
      header: {
        "Content-Type": "application/json",
      },
    };
    await Axios.post("http://192.168.1.63:3332/new", data, axiosConfig)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    // setIsOpen(alert("data is submitted"));

    onSubmitProps.resetForm();
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
                <h1 className="font-bold text-center text-2xl py-1">EMPLOYEE FORM</h1>
              <div >
                <label>First Name</label>
                <Field
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  placeholder="FirstName"
                  name="FirstName"
                />
                <ErrorMessage
                  name="FirstName"
                  component="div"
                  className="text-red-900"
                />
              </div>
              <div>
                <label>Last Name</label>
                <Field
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  placeholder="LastName"
                  name="LastName"
                />
                <ErrorMessage
                  name="LastName"
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
                  name="mobNo"
                />

                <ErrorMessage
                  name="mobNo"
                  component="div"
                  className="text-red-900"
                />
              </div>
              <div>
                <label>Address</label>
                
                <Field
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type='text'
                  placeholder="Line1"
                  name="Address.Line1"
                />
                <ErrorMessage
                  name="Address.Line1"
                  component="div"
                  className="text-red-900"
                />
                <Field
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type='text'
                  placeholder="Line2"
                  name="Address.Line2"
                />
                <ErrorMessage
                  name="Address.Line2"
                  component="div"
                  className="text-red-900"
                />
                <Field
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type='text'
                  placeholder="country"
                  name="Address.country"
                />
                <ErrorMessage
                  name="Address.country"
                  component="div"
                  className="text-red-900"
                />
                <Field
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type='text'
                  placeholder="state"
                  name="Address.state"
                />
                <ErrorMessage
                  name="Address.state"
                  component="div"
                  className="text-red-900"
                />
                <Field
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type='text'
                  placeholder="city"
                  name="Address.city"
                />
                <ErrorMessage
                  name="Address.city"
                  component="div"
                  className="text-red-900"
                />
                <Field
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type='text'
                  placeholder="zipcode"
                  name="Address.zipcode"
                />
                <ErrorMessage
                  name="Address.zipcode"
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
                  name="FatherName"
                />
                <ErrorMessage
                  name="FatherName"
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
                  name="MotherName"
                />
                <ErrorMessage
                  name="MotherName"
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
                  name="AltNum"
                />
                <ErrorMessage
                  name="AltNum"
                  component="div"
                  className="text-red-900"
                />
              </div>
              <div>
                <label>DateOfJoining</label>
                <Field
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="date"
                  placeholder="Date Of Joining"
                  name="DateOfJoining"
                />
                <ErrorMessage
                  name="DateOfJoining"
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
                  name="OfficialEmail"
                />
                <ErrorMessage
                  name="OfficialEmail"
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
                  name="PersonalEmail"
                />
                <ErrorMessage
                  name="PersonalEmail"
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
                  name="DOB"
                />
                <ErrorMessage
                  name="DOB"
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
                  name="EmployeeCode"
                />
                <ErrorMessage
                  name="EmployeeCode"
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


