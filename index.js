// let child = document.getElementsByClassName("list-group-item");

// child[2].style.backgroundColor = "green";

// let elem = document.querySelectorAll(".list-group-item");
// elem.style.fontWeight = "bold";
// elem.style.color = "red";

// let elem = document.getElementsByTagName("li");
// Array.from(elem).forEach((item) => {
//   item.style.color = "red";
// });

// let elements = document.querySelectorAll("li");
// elements[1].style.color = "green";

let elements = document.querySelectorAll("li:nth-child(odd)");

Array.from(elements).forEach((item) => {
  if (item % 2 != 0) {
    item.style.backgroundColor = "green";
  }
});
