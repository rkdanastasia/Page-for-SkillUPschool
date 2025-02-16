const btOpen = document.querySelectorAll(".bt-open");
const btClose = document.querySelectorAll(".bt-close");
const backdropDet = document.querySelectorAll(".backdrop-course");

backdropDet.forEach((backdr) => backdr.classList.add("is-hidden"));

btOpen.forEach((bt) => {
  bt.addEventListener("click", (event) => {
    event.preventDefault();
    const backdrId = bt.getAttribute("data-backdr");
    const backdr = document.getElementById(backdrId);
    if (backdr) {
      backdr.classList.remove("is-hidden");
    }
  });
});

btClose.forEach((bt) => {
  bt.addEventListener("click", (event) => {
    event.preventDefault();
    bt.closest(".backdrop-course").classList.add("is-hidden");
  });
});
