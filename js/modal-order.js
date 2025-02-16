const backdropOrder = document.querySelectorAll(".backdrop-order");
const btnOrder = document.querySelectorAll(".btn-order");
const btnSubmit = document.querySelectorAll(".btn-submit");
const btnClose = document.querySelectorAll(".reg-close");

btnOrder.forEach((btn) => {
  btn.addEventListener("click", () => {
    backdropOrder.forEach((backdrop) => backdrop.classList.remove("is-hidden"));
  });
});

btnClose.forEach((btn) => {
  btn.addEventListener("click", () => {
    backdropOrder.forEach((backdrop) => backdrop.classList.add("is-hidden"));
  });
});

btnSubmit.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    event.preventDefault();
    backdropOrder.forEach((backdrop) => backdrop.classList.add("is-hidden"));
  });
});
