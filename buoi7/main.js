// // console.log("hello world");
// let a = 1; // có thể gán lại giá trị
// a = 2;
// // console.log(a);
// const b = 1; // giá trị là giá trị khởi tạo mặc định
// // b = 2;
// // console.log(b);

// // console.log(a + b);
// // helloworld();

// //function thường
// function helloworld() {
//   console.log("hello world");
// }

// function tru(number1 = 0, number2 = 0) {
//   console.log(number1 - number2);
// }
// // tru(20);

// let cong = (number1 = 0, number2 = 0) => {
//   console.log(number1 + number2);
// };

// let helloword = () => {
//   // arrow function giống function thường ngoại trừ việc phải khai báo trước mới dùng được
//   console.log("hello word");
// };
// // helloword();
// // cong(2, 4);

// let my_string = `some cool\nthing`; // multi line string
// // console.log(my_string);

// //destructuring
// let person = {
//   name: "An",
//   age: 21,
//   gender: "male",
// };

// const { name: x, age: y, gender: z } = person;

// console.log(x, person.name);
// console.log(y);
// console.log(z);

// //rest parameters

// function rest(a, b, ...rest) {
//   console.log(a, b, ...rest);
// }

// rest(2, 3, 4, 5, 6, 7, 8, 9);

// //spread

// let array1 = [1, 2, 3, 4, 5, 6];
// let array2 = [7, 8, 9];
// let array3 = [...array1, ...array2];
// let array4 = [array1, ...array2];
// console.log("array3", array3);
// console.log("array4", array4);

let userInput = document.getElementById("username");
let userPassword = document.getElementById("password");
let registerForm = document.getElementById("register-form");

registerForm.onsubmit = function (e) {
  e.preventDefault();

  let user = {
    username: userInput.value,
    password: userPassword.value,
  };
  let checkUsername = localStorage.getItem(user.username);
  if (checkUsername != null) {
    alert("Username da dang ky roi!");
  } else {
    localStorage.setItem(user.username, JSON.stringify(user));
  }
};

let userInput1 = document.getElementById("username1");
let userPassword1 = document.getElementById("password1");
let loginForm = document.getElementById("login-form");
loginForm.onsubmit = function (e) {
  e.preventDefault();

  let user = JSON.parse(localStorage.getItem(userInput1.value));
  if (user == null) {
    alert("ko ton tai username");
  } else {
    if (userPassword1.value.length < 4) {
      alert("do dai mat khau chua dung");
    } else {
      if (user.password != userPassword1.value) {
        alert("sai mat khau");
      } else {
        alert("dang nhap thanh cong");
      }
    }
  }
};

const data = fetch("https://jsonplaceholder.typicode.com/users") // 1s den 2s de chay
  .then((json) => {
    // return json.json();
  })
  .then((res) => {
    // console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// render ra giao dien
console.log("giao dien");

async function getData(api) {
  let data = await fetch(api);
  // let result = await data.json();
  console.log(data.status);
}

getData("https://jsonplaceholder.typicode.com/users");
