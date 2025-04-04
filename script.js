const input = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const validateInput = (val) => {
  const intInput = parseInt(val);

  if (isNaN(intInput)) {
    return "Please enter a valid number";
  }
  if (intInput <= -1) {
    return "Please enter a number greater than or equal to 1";
  }
  if (intInput >= 4000) {
    return "Please enter a number less than or equal to 3999";
  }

  return intInput;
};

const convertToRoman = (number) => {
  let result = "";
  const romanMap = [
    { value: 1000, numeral: "M" },
    { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" },
  ];

  for (const { value, numeral } of romanMap) {
    while (number >= value) {
      result += numeral;
      number -= value;
    }
  }

  return result;
};

const showResult = () => {
  const validateResponse = validateInput(input.value.trim());

  if (typeof validateResponse === "string") {
    output.innerHTML = `<p>${validateResponse}</p>`;
  } else {
    const romanNumber = convertToRoman(validateResponse);
    output.innerHTML = `<p>${romanNumber}</p>`;
  }
};

convertBtn.addEventListener("click", showResult);
