const btnsOpen = document.querySelectorAll(".btn-open");
const btnsClose = document.querySelectorAll(".btn-close");
const modals = document.querySelectorAll(".backdrop");

modals.forEach((modal) => modal.classList.add("is-hidden"));

btnsOpen.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    event.preventDefault();
    const modalId = btn.getAttribute("data-modal");
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove("is-hidden");
    }
  });
});

btnsClose.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    event.preventDefault();
    btn.closest(".backdrop").classList.add("is-hidden");
  });
});
