const inputBox = document.getElementById("Input-box");
const submitBtn = document.getElementById("btn");
const inputForm = document.getElementById("Input-form");
const itemList = document.querySelector(".item-list");
const deleted = document.querySelector(".delete");
function addItem(e) {
  e.preventDefault();
  const inputValue = inputBox.value;
  if (inputValue === "") {
    alert("Write something first");
    return;
  }
  const mainDiv = document.createElement("div");
  mainDiv.classList.add("list-items");
  const innerDiv = document.createElement("div");
  innerDiv.className = "items";
  const btn = document.createElement("button");
  btn.className = "btn delete";
  innerDiv.appendChild(document.createTextNode(inputValue));
  btn.appendChild(document.createTextNode("Delete"));

  mainDiv.appendChild(innerDiv);
  mainDiv.appendChild(btn);
  itemList.appendChild(mainDiv);
  // mainDiv.innerHTML = `<div class="items">${inputValue}</div><button class="btn delete">Delete</button>`;
  // itemList.appendChild(mainDiv);
  inputBox.value = "";
}

inputForm.addEventListener("submit", addItem);
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
