const inputBox = document.getElementById("Input-box");
const submitBtn = document.getElementById("btn");
const inputForm = document.getElementById("Input-form");
const listItems = document.querySelector(".list-items");
const deleted = document.querySelector(".delete");
const clear = document.querySelector(".clear-btn");
const filter = document.querySelector(".filter");
const filterInput = document.querySelector(".filter-input");
const main = document.querySelector("main");
//adding item from input box value
function addItem(e) {
  e.preventDefault();
  const inputValue = inputBox.value;
  if (inputValue === "") {
    alert("Write something first");
    return;
  }
  addItemsToDOM(inputValue);
  addItemsToStorage(inputValue);
  inputBox.value = "";
  clearAllHide();
}
//creating a button which can add class
function createButton(classes) {
  const btn = document.createElement("button");
  btn.className = classes;
  return btn;
}
//add Items to the DOM
function addItemsToDOM(item) {
  const li = document.createElement("li");
  li.className = "items";
  const btn = createButton("btn delete");
  li.appendChild(document.createTextNode(item));
  btn.appendChild(document.createTextNode("Delete"));
  li.appendChild(btn);
  listItems.appendChild(li);
}
//add Items to Local Storage
function addItemsToStorage(item) {
  const itemsFromStorage = getItemFromStorage();
  itemsFromStorage.push(item);
  localStorage.setItem("items", JSON.stringify(itemsFromStorage));
}
//display the acctual local storage items to the dom
function displayItem() {
  const itemsFromStorage = getItemFromStorage();
  itemsFromStorage.forEach((item) => {
    addItemsToDOM(item);
  });
  clearAllHide();
}
//only the function which get the item from the storage
function getItemFromStorage() {
  let itemsFromStorage;
  if (localStorage.getItem("items") === null) {
    itemsFromStorage = [];
  } else {
    itemsFromStorage = JSON.parse(localStorage.getItem("items"));
  }
  return itemsFromStorage;
}
function OnClickItem(e) {
  if (e.target.classList.contains("delete")) {
    removeItem(e.target.parentElement);
  }
}
//remove item from list
function removeItem(item) {
  item.remove();
  //removeing acctual item from storage
  removeItemFromStorage(item.firstChild.textContent);
  clearAllHide();
}
//remove item from storage
function removeItemFromStorage(item) {
  let itemsFromStorage = getItemFromStorage();
  console.log(itemsFromStorage);
  console.log(item);
  itemsFromStorage = itemsFromStorage.filter((i) => i !== item);
  localStorage.setItem("items", JSON.stringify(itemsFromStorage));
}

//clear all the items from the list
function clearAll() {
  listItems.innerHTML = "";
  clearAllHide();
}
//if there no any item clearAll button will be desabled
function clearAllHide() {
  const li = document.querySelectorAll("li");
  if (li.length === 0) {
    clear.style.display = "none";
    filter.style.display = "none";
  } else {
    clear.style.display = "block";
    filter.style.display = "block";
  }
}
//filter search function from the list items
function filterAll(e) {
  const value = e.target.value.toLowerCase();
  const li = document.querySelectorAll("li");
  li.forEach((item) => {
    itemName = item.firstChild.textContent.toLowerCase();
    if (itemName.indexOf(value) != -1) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}

inputForm.addEventListener("submit", addItem);
listItems.addEventListener("click", OnClickItem);
clear.addEventListener("click", clearAll);
filterInput.addEventListener("input", filterAll);
clearAllHide();
document.addEventListener("DOMContentLoaded", displayItem);
