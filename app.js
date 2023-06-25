console.log("hello world");

const openButton = document.querySelector(".main_button");
const modal = document.querySelector(".modal_section");
const modal_button = document.querySelector(".modal_button");

openButton.addEventListener("click", function () {
  modal.classList.add("show");
});

modal_button.addEventListener("click", function () {
  modal.classList.remove("show");
});
