const chart = (totalInt, totalOff, totalDen) => {
  const myChart = document.querySelector("#chart").getContext("2d");

  const data = [];
  data.push(totalInt.textContent, totalOff.textContent, totalDen.textContent);

  const myDoughnutChart = new Chart(myChart, {
    type: "doughnut",
    data: {
      labels: ["Interviews", "Offers", "Denied"],
      datasets: [
        {
          data: data,
          backgroundColor: ["#b3813f", "#755934", "#555555"]
        }
      ]
    }
  });
};
