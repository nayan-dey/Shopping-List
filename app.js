const inputBox = document.getElementById("Input-box");
const submitBtn = document.getElementById("btn");
const inputForm = document.getElementById("Input-form");
const listItems = document.querySelector(".list-items");
const deleted = document.querySelector(".delete");
const clear = document.querySelector(".clear-btn");
const filter = document.querySelector(".filter");
const filterInput = document.querySelector(".filter-input");
const main = document.querySelector("main");
function addItem(e) {
  e.preventDefault();
  const inputValue = inputBox.value;
  if (inputValue === "") {
    alert("Write something first");
    return;
  }
  const li = document.createElement("li");
  li.className = "items";
  const btn = createButton("btn delete");
  li.appendChild(document.createTextNode(inputValue));
  btn.appendChild(document.createTextNode("Delete"));
  li.appendChild(btn);
  listItems.appendChild(li);

  // mainDiv.innerHTML = `<div class="items">${inputValue}</div><button class="btn delete">Delete</button>`;
  // itemList.appendChild(mainDiv);
  inputBox.value = "";
  clearAllHide();
}
function createButton(classes) {
  const btn = document.createElement("button");
  btn.className = classes;
  return btn;
}
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
    clearAllHide();
  }
}
function clearAll() {
  listItems.innerHTML = "";
  clearAllHide();
}
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

    //do from here
  });
}

inputForm.addEventListener("submit", addItem);
listItems.addEventListener("click", removeItem);
clear.addEventListener("click", clearAll);
filterInput.addEventListener("input", filterAll);
clearAllHide();

// submitBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log("clicked");
//   another.innerHTML += `<div class="list-items">
//             <div class="items">${foundValue()}</div>
//             <button class="btn">Delete</button>
//           </div>`;

// });
// InputBox.addEventListener("keypress", foundValue);

// function foundValue() {
//   return InputBox.value;
// }
