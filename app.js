let input = document.getElementById("numberInp");
let convertBtn = document.getElementById("convBtn");
let meterOutput = document.getElementById("meter-output");
let kiloOutput = document.getElementById("kilo-output");
let literOutput = document.getElementById("liter-output");

convertBtn.addEventListener("click", () => {
  meterOutput.innerHTML = `${input.value} meters = ${(input.value * 3.28084).toFixed(3)} feet | ${input.value} feet = ${(input.value / 3.28084).toFixed(3)} meters`
  kiloOutput.innerHTML = `${input.value} liter = ${(input.value * 0.26).toFixed(3)} gallons | ${input.value} gallons = ${(input.value /0.26).toFixed(3)} liter`
  literOutput.innerHTML = ` ${input.value} kilos = ${(input.value * 2.20462).toFixed(3)} pounds | ${input.value} pounds = ${(input.value / 0.453592).toFixed(3)} kilos`
  });
