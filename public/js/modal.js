const modalBtns = [...document.querySelectorAll(".modal-btn")];
modalBtns.forEach(function(btn) {
  btn.onclick = function() {
    const modaldata = btn.getAttribute("data-modal");
    const modal = document.getElementById(modaldata);
    modal.classList.toggle("show-modal");

    const id = btn.value;
    modal.setAttribute("data-id", id);
  };
});

window.onclick = function(e) {
  const add = document.querySelector("#add-modal");
  const edit = document.querySelector("#edit-modal");
  if (e.target === add) {
    add.classList.toggle("show-modal");
  }
  if (e.target === edit) {
    edit.classList.toggle("show-modal");
  }
};
