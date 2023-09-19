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

// let elements = document.querySelectorAll("li:nth-child(odd)");

// Array.from(elements).forEach((item) => {
//   if (item % 2 != 0) {
//     item.style.backgroundColor = "green";
//   }
// });

// let ele = document.getElementById("header-title");
// let newEle = document.createElement("h2");
// newEle.textContent = "HEllo";
// ele.prepend(newEle);

// var form = document.getElementById("addForm");
// var itemList = document.getElementById("items");
// var filter = document.getElementById("filter");

// // Form submit event
// form.addEventListener("submit", addItem);
// // Delete event
// itemList.addEventListener("click", removeItem);
// // Filter event
// filter.addEventListener("keyup", filterItems);

// // Add item
// function addItem(e) {
//   e.preventDefault();

//   // Get input value
//   var newItem = document.getElementById("item").value;
//   var newItemDescription = document.getElementById("description").value;

//   // Create new li element
//   var li = document.createElement("li");
//   // Add class
//   li.className = "list-group-item";
//   // Add text node with input value
//   li.appendChild(document.createTextNode(newItem));

//   var itemNameDiv = document.createElement("div");
//   itemNameDiv.textContent = newItem;

//   // Create div to hold item description
//   var itemDescriptionDiv = document.createElement("div");
//   itemDescriptionDiv.textContent = newItemDescription;

//   // Create del button element
//   var deleteBtn = document.createElement("button");

//   // Add classes to del button
//   deleteBtn.className = "btn btn-danger btn-sm float-right delete";

//   // Append text node
//   deleteBtn.appendChild(document.createTextNode("X"));

//   //create edit btn
//   var editBtn = document.createElement("button");
//   editBtn.className = "btn btn-primary btn-sm float-   right edit";

//   editBtn.appendChild(document.createTextNode("Edit"));
//   // Append button to li
//   li.appendChild(itemNameDiv);
//   li.appendChild(itemDescriptionDiv);
//   li.appendChild(deleteBtn);
//   li.appendChild(editBtn);

//   // Append li to list

//   itemList.appendChild(li);

//   document.getElementById("item").value = "";
//   document.getElementById("description").value = "";
// }

// // Remove item
// function removeItem(e) {
//   if (e.target.classList.contains("delete")) {
//     if (confirm("Are You Sure?")) {
//       var li = e.target.parentElement;
//       itemList.removeChild(li);
//     }
//   }
// }

// // Filter Items
// function filterItems(e) {
//   // convert text to lowercase
//   var text = e.target.value.toLowerCase();
//   // Get lis
//   var items = itemList.getElementsByTagName("li");
//   // Convert to an array
//   Array.from(items).forEach(function (item) {
//     var itemNameDiv = item.querySelector("div:first-child");
//     var itemDescriptionDiv = item.querySelector("div:nth-child(2)");
//     if (itemNameDiv && itemDescriptionDiv) {
//       var itemName = itemNameDiv.textContent.toLowerCase();
//       var itemDescription = itemDescriptionDiv.textContent.toLowerCase();
//       if (
//         itemName.indexOf(text) !== -1 ||
//         itemDescription.indexOf(text) !== -1
//       ) {
//         item.style.display = "block";
//       } else {
//         item.style.display = "none";
//       }
//     }
//   });
// }

//REGISTRATION FORM INFO STORE INTO LOCALSTORAGE
const form = document.getElementById("regiForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("ph").value;
  const time = document.getElementById("time").value;
  const tm = document.getElementById("tm").value;

  const userList = document.getElementById("user");
  // const userInfo = [name, email, phone, time, tm];

  // localStorage.setItem("userInformation", JSON.stringify(userInfo));
  // const userInfobyLocal = localStorage.getItem("userInformation");
  // const u = JSON.parse(userInfobyLocal);

  // console.log(u);

  //user OBJECT
  const user = {
    firstName: name,
    email: email,
    phone: phone,
    time: time,
    tm: tm,
  };

  //to store this object into localstorage we need to convert
  //it into string

  addUserTolocalStorage(user);
  displayUserInList(user);
  form.reset();

  function addUserTolocalStorage(user) {
    const existUsers = JSON.parse(localStorage.getItem("users")) || [];
    console.log(existUsers);
    existUsers.push(user);
    localStorage.setItem("users", JSON.stringify(existUsers));
  }

  function displayUserInList(user) {
    const li = document.createElement("li");
    li.textContent = `Username: ${user.firstName}, Email: ${user.email}, Phone : ${user.phone}`;
    userList.appendChild(li);
  }
});
