const create = document.querySelector("#create");
const Accounts = document.querySelector("#Accounts");
const dropdown1 = document.querySelector(".dropdown1");
const dropdown2 = document.querySelector(".dropdown2");
let d1numb = 1;
let d2numb = 1;
const home = document.querySelector("#home");

home.addEventListener("click", (e) => {
    e.preventDefault();
    home.classList.add("active");
    create.classList.remove("active");
    Accounts.classList.remove("active");
    let d1numb = 1;
    let d2numb = 1;
    });
create.addEventListener("click", (e) => {
  e.preventDefault();
let d2numb = 1;
 Accounts.classList.remove("active");
  home.classList.remove("active");
    create.classList.add("active");
  d1numb++;
  if (d1numb % 2 !== 0) {
    dropdown1.style.display = "none";
  } else {
    dropdown1.style.display = "block";
  }
});
Accounts.addEventListener("click", (e) => {
  e.preventDefault();
  let d1numb = 1;

   create.classList.remove("active");
  home.classList.remove("active");
    Accounts.classList.add("active");
  d2numb++;
  if (d2numb % 2 !== 0) {
    dropdown2.style.display = "none";
  } else {
    dropdown2.style.display = "block";
  }
});
