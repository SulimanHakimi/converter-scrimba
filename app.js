let input = document.getElementById("numberInp");
let convertBtn = document.getElementById("convBtn");
let meterOutput = document.getElementById("meter-output");
let kiloOutput = document.getElementById("kilo-output");
let literOutput = document.getElementById("liter-output");

convertBtn.addEventListener("click", () => {
  meterOutput.innerHTML = `${input.value} meters = ${input.value * 3.28084} feet | ${input.value} feet = ${input.value / 3.28084} meters`
  kiloOutput.innerHTML = `${input.value} liter = ${input.value * 0.26} gallons | ${input.value} gallons = ${input.value /0.26} liter`
  literOutput.innerHTML = ` ${input.value} kilos = ${input.value * 2.20462} pounds | ${input.value} pounds = ${input.value / 0.453592} kilos`
  });
