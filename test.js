const Axios = require('axios');

async function blah() {
  await Axios.post(
    "http://192.168.1.63:3332/new",
    {
      firstname: "Ankur",
      lastname: "Uphadhyay",
      mobNo: 8901061098,
      Address: {
        Line1: "Line1",
        Line2: "Line2",
        country: "country",
        state: "state",
        city: "city",
        zipcode: 111111,
      },
      father_name: "FatherName",
      mother_name: "MotherName",
      AltNum: "AltNum",
      PersonalEmail: "PersonalEmail",
      official_email: "OfficialEmail@mail.com",
      joining_date: "06-10-1998",
      DOB: "06-10-1998",
      employee_id: "EmployeeCode",
    },
    {
      header: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => {
      console.log(response.text);
    })
    .catch((error) => {
      // console.log(Object.keys(error));
      console.log(error.message);
      console.log(error.response);

    });
}

blah();
