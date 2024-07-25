function validateName(input, errorElement) {
  const value = input.value.trim();
  const regex = /^[A-Za-z\s.]+$/;
  if (value === "" || regex.test(value)) {
    errorElement.classList.add("d-none");
    input.classList.remove("is-invalid");
  } else {
    errorElement.classList.remove("d-none");
    input.classList.add("is-invalid");
    return false;
  }
  return true;
}

function validateInput(input, errorElement) {
  const value = input.value.trim();
  if (value === "") {
    errorElement.classList.add("d-none");
    input.classList.remove("is-invalid");
  } else if (isNaN(value)) {
    errorElement.classList.remove("d-none");
    input.classList.add("is-invalid");
    return false;
  } else {
    errorElement.classList.add("d-none");
    input.classList.remove("is-invalid");
  }
  return true;
}

function calculateTotal() {
  let markOne = document.getElementById("mark-one");
  let markTwo = document.getElementById("mark-two");
  let markThree = document.getElementById("mark-three");
  let markFour = document.getElementById("mark-four");
  let markFive = document.getElementById("mark-five");
  let markTotal = document.querySelector("#mark-total");

  let errorOne = document.getElementById("error-one");
  let errorTwo = document.getElementById("error-two");
  let errorThree = document.getElementById("error-three");
  let errorFour = document.getElementById("error-four");
  let errorFive = document.getElementById("error-five");

  let allValid = true;

  allValid = validateInput(markOne, errorOne) && allValid;
  allValid = validateInput(markTwo, errorTwo) && allValid;
  allValid = validateInput(markThree, errorThree) && allValid;
  allValid = validateInput(markFour, errorFour) && allValid;
  allValid = validateInput(markFive, errorFive) && allValid;

  if (allValid) {
    let valueOne = parseInt(markOne.value) || 0;
    let valueTwo = parseInt(markTwo.value) || 0;
    let valueThree = parseInt(markThree.value) || 0;
    let valueFour = parseInt(markFour.value) || 0;
    let valueFive = parseInt(markFive.value) || 0;
    const result = valueOne + valueTwo + valueThree + valueFour + valueFive;
    markTotal.value = result;
  } else {
    markTotal.value = "Invalid input";
  }
}

document.getElementById("student-name").addEventListener("input", function () {
  validateName(this, document.getElementById("error-name"));
});
document.getElementById("mark-one").addEventListener("input", function () {
  validateInput(this, document.getElementById("error-one"));
  calculateTotal();
});
document.getElementById("mark-two").addEventListener("input", function () {
  validateInput(this, document.getElementById("error-two"));
  calculateTotal();
});
document.getElementById("mark-three").addEventListener("input", function () {
  validateInput(this, document.getElementById("error-three"));
  calculateTotal();
});
document.getElementById("mark-four").addEventListener("input", function () {
  validateInput(this, document.getElementById("error-four"));
  calculateTotal();
});
document.getElementById("mark-five").addEventListener("input", function () {
  validateInput(this, document.getElementById("error-five"));
  calculateTotal();
});
