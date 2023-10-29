const input_field = document.querySelector(".inp_fild .password");
const eyeIcon = document.querySelector(".inp_fild i");
const requirementList = document.querySelectorAll(".liste_item .item");

const requirement = [
  { regex: /.{8,}/, index: 0 },
  { regex: /[0-9]/, index: 1 },
  { regex: /[a-z]/, index: 2 },
  { regex: /[^A-Za-z0-9]/, index: 3 },
  { regex: /[A-Z]/, index: 4 },
];

input_field.addEventListener("keyup", (e) => {
  requirement.forEach((item) => {
    const isValid = item.regex.test(e.target.value);
    const requirementItem = requirementList[item.index];
    if (isValid) {
      requirementItem.firstElementChild.className = `fa-solid fa-check`;
      requirementItem.classList.add("valid");
    } else {
      requirementItem.firstElementChild.className = `fa-solid fa-circle`;
      requirementItem.classList.remove("valid");
    }
  });
});

eyeIcon.addEventListener("click", () => {
  if (!input_field.value) return;
  input_field.type = input_field.type === "password" ? "text" : "password";
  eyeIcon.className = `fa-solid fa-eye${
    input_field.type === "password" ? "" : "-slash"
  }`;

  setTimeout(() => {
    input_field.type = "password";
    eyeIcon.className = `fa-solid fa-eye`;
  }, 1500);
});
