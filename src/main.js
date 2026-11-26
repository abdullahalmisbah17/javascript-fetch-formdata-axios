import axios from "axios";
import "./style.css";

//const { default: axios } = requestAnimationFrame("axios");
////////////////////////////////////////////////
//               class-47 - 48
////////////////////////////////////////////////
// let formData = {
//   id: 1,
//   name: "abdullah",
//   age: 24,
// };

// fetch("https://jsonplaceholder.typicode.com/todos/1", {
//   method: "POST",
// //   body: JSON.stringify(formData),
// body: formData,
// headers: {
//     "Content-Type": "Application/FormData"
// }
// });

// let myForm = document.getElementById("myForm");

// myForm.addEventListener("submit", async (event) => {
//   event.preventDefault();

//   let formData = new FormData(myForm);

//   let entries = Object.fromEntries(formData);

//   fetch("http://myapi.com",{
//     method: "POST",
//     body: JSON.stringify(entries)
//   })
//   let name = document.querySelector('[name="name"]');
//   let email = document.querySelector('[name="email"]');
//   let image = document.querySelector('[name="image"]');

//   let formData = new FormData();

//   formData.append("name", name.value);
//   formData.append("email", email.value);
//   formData.append("image", image.files[0]);

//   fetch("http://mywebsite.com", {
//     method: "POST",
//     body: formData,
//     // headers: {
//     //   "content-type": "Application/json",
//     // },
//   });

//   try {
//     const response = await axios.get(
//       "https://jsonplaceholder.typicode.com/posts/1",
//     );

//     console.log(response.data);
//   } catch (error) {
//     console.log(error);
//   }
//   console.log(formData.get("email"));
//   console.log(formData.get("image"));
// });

////////////////////////////////////////////

// let myForm = document.getElementById("myForm");

// myForm.addEventListener("submit", async (event) => {
//   event.preventDefault();

//   let name = document.querySelector('[name="name"]');
//   let email = document.querySelector('[name="email"]');
//   let image = document.querySelector('[name="image"]');

//   let formData = new FormData();

//   formData.append("name", name.value);
//   formData.append("email", email.value);
//   formData.append("image", image.files[0]);

//   try {
//     const response = await axios.get(
//       "https://jsonplaceholder.typicode.com/posts/1",
//     );

//     console.log(response.data);
//   } catch (error) {
//     console.log(error);
//   }
// });

///////////////////////////////////////////
///Class 47–48 | JavaScript — Fetch API, FormData, Modules & Axios
//////////////////////////////////////////

let myForm = document.querySelector("#myForm");

myForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  let name = document.querySelector('[name="name"]');
  let email = document.querySelector('[name="email"]');
  let image = document.querySelector('[name="image"]');

  let formData = new FormData();

  formData.append("name", name.value);
  formData.append("email", email.value);
  formData.append("image", image.files[0]);

  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1",
    );

    console.log(response);
  } catch (error) {
    console.log(error);
  }
});

let userInfo = {
  id: 204,
  email: "usera@gmail.com",
};

// localStorage.setItem("user", JSON.stringify(userInfo));
// let user = localStorage.getItem("user");

// console.log(JSON.parse(user));

// localStorage.removeItem("user");

localStorage.clear();
