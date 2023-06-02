// fetch返黎既野 res.json()
let result = [
  {
    name: "dennis",
    age: 18,
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Pencil_drawing_of_a_girl_in_ecstasy.jpg/800px-Pencil_drawing_of_a_girl_in_ecstasy.jpg",
  },
  {
    name: "stella",
    age: 18,
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1024px-Image_created_with_a_mobile_phone.png",
  },
  {
    name: "chrysan",
    age: 18,
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Pencil_drawing_of_a_girl_in_ecstasy.jpg/800px-Pencil_drawing_of_a_girl_in_ecstasy.jpg",
  },
];

// 搵返html入面d elements
// 1. 加# 搵id
// 2. 加. 搵class
// 3. 唔加 搵tag
// 搵好多個 用 qeuerySelectorAll
// class 可以有好多個
let container = document.querySelector("#container");
let template = document.querySelector(".template");
let red = document.querySelector(".red");
let blue = document.querySelector(".blue");

let div = document.querySelector("div");
let allDiv = document.querySelectorAll("div");

console.log(container);
// console.log(template);
// console.log(red);
// console.log(blue);
// console.log(div);
// console.log(allDiv);

//loop返d野出黎

// innerHTML
for (let student of result) {
  console.log(student);
  //   += 等於自己再加新野
  //   =  直接用新野replace自己
  //   container.innerHTML = `
  //     <div class="template">
  //           <div class="name">${student.name}</div>
  //           <div class="age">${student.age}</div>
  //         </div>`;
}

// cloneNode
for (let student of result) {
  let copy = template.cloneNode(true);
  copy.querySelector(".name").textContent = student.name;
  copy.querySelector(".age").textContent = student.age;
  copy.querySelector("img").src = student.src;

  container.appendChild(copy);
}
