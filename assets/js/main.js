const tripDistanceEl = document.getElementById("trip-distance");
const fuelEfficiencyEl = document.getElementById("fuel-efficiency");
const fuelCostEl = document.getElementById("fuel-cost");
const calculateBtnEl = document.getElementById("calculateBtn");

calculateBtnEl.addEventListener("click", (event) => {
  event.preventDefault();
  if (tripDistanceEl.value === "") {
    alert("Enter Trip Distance value");
  } else {
    const distanceKM = tripDistanceEl.value;
    const fuelEfficiency = fuelEfficiencyEl.value;
    const fuelCost = fuelCostEl.value;

    const result = (distanceKM / fuelEfficiency) * fuelCost;

    const finalMsg = "Your fuel cost will be around: Rs." +result;
    alert(finalMsg);
    console.log(finalMsg);
  }
});
