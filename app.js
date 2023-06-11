const inputBox = document.getElementById("Input-box");
const submitBtn = document.getElementById("btn");
const inputForm = document.getElementById("Input-form");
const itemList = document.querySelector(".item-list");

inputForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = inputBox.value;
  if (inputValue === "") {
    alert("Write something first");
    return;
  }
  const mainDiv = document.createElement("div");
  mainDiv.classList.add("list-items");
  mainDiv.innerHTML = `<div class="items">${inputValue}</div><button class="btn">Delete</button>`;
  itemList.appendChild(mainDiv);
  inputBox.value = "";
});

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
