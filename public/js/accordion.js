const acc = document.querySelectorAll(".job");

let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    const panel = this.parentElement.nextElementSibling;
    const row = this.parentElement;

    // handle panel open/close
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      panel.style.minHeight = null;
      row.style.borderBottomRightRadius = "5px";
    } else {
      panel.style.maxHeight = "200px";
      panel.style.minHeight = "150px";
      row.style.borderBottomRightRadius = "0px";
    }
  });
}

const dates = document.querySelectorAll(".date");
dates.forEach((date, index) => {
  const str = date.innerHTML.toString().slice(0, 15);
  date.textContent = str;
});
