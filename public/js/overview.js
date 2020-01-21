window.onload = () => {
  TotalApplications();
};

const TotalApplications = () => {
  const applications = document.querySelectorAll(".row");
  const totalApp = document.querySelector(".total-applications");
  totalApp.textContent = applications.length;

  const jobColor = document.querySelectorAll(".job-color");
  const status = document.querySelectorAll(".job-status");
  const totalInt = document.querySelector(".total-interviews");
  const totalOff = document.querySelector(".total-offers");
  const totalDen = document.querySelector(".total-denied");
  const interviews = [];
  const offers = [];
  const denied = [];
  status.forEach((e, index) => {
    if (e.innerHTML === "interviewed") {
      interviews.push(e);
      jobColor[index].style.background = "#0000ff";
    } else if (e.innerHTML === "received offer") {
      offers.push(e);
      jobColor[index].style.background = "#5cb85c";
    } else if (e.innerHTML === "denied") {
      denied.push(e);
      jobColor[index].style.background = "#e7433d";
    }
  });
  totalInt.textContent = interviews.length;
  totalOff.textContent = offers.length;
  totalDen.textContent = denied.length;
};
