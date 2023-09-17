// let child = document.getElementsByClassName("list-group-item");

// child[2].style.backgroundColor = "green";

// let elem = document.querySelectorAll(".list-group-item");
// elem.style.fontWeight = "bold";
// elem.style.color = "red";

let elem = document.getElementsByTagName("li");
Array.from(elem).forEach((item) => {
  item.style.color = "red";
});
