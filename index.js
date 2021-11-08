

const nameField = document.getElementById("name")
const emailField = document.getElementById("email")
const addressField = document.getElementById("address")


// POST A REQUEST START
async function getApp() {
  let obj = {
    name: nameField.value,
    email: emailField.value,
    address: addressField.value
  }

  console.log(obj);



  try {
    let response = await axios.post('http://localhost:8000/user', obj);
    console.log(response);
  }

  catch(error) {
    console.log(error);
  }
}// POST A REQUEST End

  // axios.post('http://localhost:8000/user', obj)
  //   .then(function (response) {
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });

  // let api = "http://localhost:8000/user";