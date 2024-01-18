const header = document.querySelector(".header");
setInterval(function () {
  change(header);
}, 1000);
function change(header) {
  const newColor = colors();
  header.style.background = newColor;
}
function colors() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}
const domElements = {
  body: document.querySelector("body"),
  round: document.querySelector("#check"),
  links: document.querySelectorAll(".links"),
  active: document.querySelector(".item-active"),
  block: document.querySelector(".hidden__block"),
  log: document.querySelector(".log"),
  form: document.querySelector("form"),
  row: document.querySelector(".hidden__row"),
};
domElements.round.addEventListener("click", function () {
  //      ПЕРЕКЛЮЧЕНИЕ ДЛЯ ТУМБЛЕРА
  if (domElements.round.checked) { 
    domElements.body.style.background = "#000";
    domElements.header.style.boxShadow = "0px 10px 35px #0fd3b2";
    domElements.links.forEach(function (link) {
      link.style.color = "#0fd3b2";
    });
    domElements.row.style.color = "#0fd3b2";
    domElements.row.style.textShadow = "0px 0px 30px #0fd3b2";
  } else {
    domElements.body.style.background = "";
    domElements.links.forEach(function (link) {
      link.style.color = "";
    });
    domElements.row.style.color = "";
    domElements.row.style.textShadow = "";
  }
});

// КОНЕЦ ТУМБЛЕРА

let act = true;
domElements.active.addEventListener("click", function () {

  // РЫЧАГ ДЛЯ ВЫПАДАЮЩЕГО МЕНЮ
  domElements.block.style.display = "block";
});
domElements.row.addEventListener("mouseover", function () {
  domElements.block.style.display = "none";
  this.innerHTML = "HIDDEN ROW";
  this.style.fontSize = "40px";
  this.style.fontWeight = "600";
  this.style.fontFamily = "sans-serif";
});





//     ДОМАШКА     //

// #1
function objClg() {
  const data = {
    name: "Ivan Ivanov",
    job: "Отдел разработи",
    who: "Programmer",
    salary: "14000$",
    year: "2000",
  };
  const { name, job, who, salary, year } = data;
  console.log(`-${name}\n-${job}\n-${who}\n-${salary}\n-${year}`);
}
objClg();

// #2
function objInfo() {
  const data = {
    name: "Алеша",
    surname: "Иванов",
    job: "Отдел разрабтки",
  };
  const name = "qweqeqewqew";
  const surnamename = "qweqeqewqew";
  const job = "qweqeqewqew";
  const { name: userName, surname: userSurname, job: userJob } = data;
  console.log(`-${userName}\n-${userSurname}\n-${userJob}`);
}
objInfo();

// #3
function userInfo() {
  const data = {
    name: "Иван",
    surname: "Иванов",
    department: "Отдел разработки",
    pos: "Junior",
  };
  const { name: userName2, surname: userSurname2, department, pos } = data;
  console.log(`-${userName2}\n-${userSurname2}\n-${department}\n-${pos}`);
}
userInfo();
// #3 (v1.1)
function userArr() {
  const data = ["Alesha", "Ivanov", "Develepment Department"];
  const [name, surname, department] = data;
  let pos = "Junior";
  if (data.length < 4) {
    data.push(pos);
  } else {
    pos = "";
  }
  console.log(`-${name}\n-${surname}\n-${department}\n-${pos}`);
}
userArr();

//#4
function colorFunc() {
  const data = {
    color: colors(),
    width: "400px",
    height: "500px",
  };
  const { color, width, height } = data;
  console.log(`${color}\n${width}\n${height}`);
}
colorFunc();
