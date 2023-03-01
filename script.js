// function: add or minus to card
function addPlusMinus(inputValueId, isAdding) {
  const inputValue = document.getElementById(inputValueId);
  const phoneInputValue = inputValue.value;
  const newInputValue = parseInt(phoneInputValue);

  let totalInputValue;
  if (isAdding == true) {
    totalInputValue = newInputValue + 1;
    inputValue.value = totalInputValue;
  } else {
    if (newInputValue > 0) {
      totalInputValue = newInputValue - 1;
      inputValue.value = totalInputValue;
    }
  }
  return totalInputValue;
}
// Function: update price
function updatePrice(totalInputValue, priceId, price) {
  const updatePreviousValue = totalInputValue * price;
  const updatePrice = document.getElementById(priceId);
  updatePrice.innerText = updatePreviousValue;
}
//
function getTextElementById(elementID) {
  const PriceInTotal = document.getElementById(elementID);
  const PriceValue = PriceInTotal.innerText;
  const phonePriceINTotalValue = parseInt(PriceValue);
  return phonePriceINTotalValue;
}

// Function: add total value to subTotal
function addSubtotal() {
  const phonePriceTotalValue = getTextElementById("phone-price");
  const casePriceTotalValue = getTextElementById("case-price");
  const subTotalValue = phonePriceTotalValue + casePriceTotalValue;

  // update subtotal
  const subTotalText = document.getElementById("Subtotal");
  subTotalText.innerText = subTotalValue;
  // update Tax
  const tax = document.getElementById("tax");
  const taxCalculation = subTotalValue * 0.05;
  const totalTax = taxCalculation.toFixed(2);
  tax.innerText = totalTax;

  // Add subtotal and tax to total
  const total = document.getElementById("total");
  const totalCalculation = subTotalValue + parseFloat(totalTax);
  total.innerText = totalCalculation.toFixed(2);
}

// for phone plus button
document
  .getElementById("btn-phone-plus")
  .addEventListener("click", function () {
    const totalInputValue = addPlusMinus("phone-inputValue", true);
    updatePrice(totalInputValue, "phone-price", 1219);
    addSubtotal();
  });

// for phone minus button
document
  .getElementById("btn-phone-minus")
  .addEventListener("click", function () {
    const totalInputValue = addPlusMinus("phone-inputValue", false);
    updatePrice(totalInputValue, "phone-price", 1219);
    addSubtotal();
  });

// for case plus button
document.getElementById("btn-case-plus").addEventListener("click", function () {
  const totalInputValue = addPlusMinus("case-inputValue", true);
  updatePrice(totalInputValue, "case-price", 59);
  addSubtotal();
});

// for case minus button
document
  .getElementById("btn-case-minus")
  .addEventListener("click", function () {
    const totalInputValue = addPlusMinus("case-inputValue", false);
    updatePrice(totalInputValue, "case-price", 59);
    addSubtotal();
  });
