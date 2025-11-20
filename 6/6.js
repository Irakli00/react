const modal = document.getElementById("modal");

const btn = document.createElement("button");
btn.textContent = "click";
btn.addEventListener("click", () => {
  modal.classList.toggle("hidden");
  modal.style.backgroundColor = "#333";
  modal.style.color = "#ffffffff";
});

document.body.insertAdjacentElement("beforeend", btn);
//----------------------------------------------------
const AVAILABLE_COLORS = {
  red: "#ff0000ff",
  blue: "#0400ffff",
  green: "#00ff40ff",
  black: "#333",
  white: "#fff",
};

const form = document.getElementById("colorForm");
const colorInput = document.getElementById("colorInput");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!AVAILABLE_COLORS[colorInput.value]) {
    alert("No such color");
  } else {
    document.body.style.backgroundColor = AVAILABLE_COLORS[colorInput.value];
  }
});
//----------------------------------------------------
const avarageForm = document.getElementById("avarageForm");
const numberInput = document.getElementById("avarageInput");
const avarageResult = document.getElementById("avarageResult");

avarageForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const nums = numberInput.value.split(":");
  const total = nums.reduce((curr, acc) => +acc + +curr);

  const avarage = total / nums.length;

  avarageResult.textContent = `avarage is: ${avarage}`;
});
