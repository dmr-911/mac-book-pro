function getExtraPrice(extraId, extraAmount) {
  // memory, storage amount and delevery amount
  const extraPrice = document.getElementById(extraId + "-extra-price");
  const extraPriceAmount = parseFloat(extraAmount);
  extraPrice.innerText = extraPriceAmount;
}

function totalPrice() {
  // Get all prices
  const fixedPrice = document.getElementById("fixed-price").innerText;
  const extraMemoryPrice =
    document.getElementById("memory-extra-price").innerText;
  const extraStoragePrice = document.getElementById(
    "storage-extra-price"
  ).innerText;
  const deliveryCharge = document.getElementById(
    "delivery-extra-price"
  ).innerText;

  // add all prices
  const totalPrice = document.getElementById("total-price");
  totalPrice.innerText =
    parseFloat(fixedPrice) +
    parseFloat(extraMemoryPrice) +
    parseFloat(extraStoragePrice) +
    parseFloat(deliveryCharge);
}

function endTotal(inputValue) {
  // get total price and put it on the footer total
  const total = parseFloat(document.getElementById("total-price").innerText);
  // get footer total
  const endTotal = document.getElementById("end-total");

  // checking the input value and add the offer
  if (inputValue == "stevekaku") {
    const promo = parseFloat(total) / 5;
    endTotal.innerText = total - promo;
  } else {
    endTotal.innerText = total;
  }
}

// Main function
function extraCost(expenseId, memory, deliveryCharge) {
  // declare and update constant value
  let extraAmount = 0;
  if (memory == 8 || memory == 256) {
    extraAmount = 0;
  } else if (deliveryCharge) {
    extraAmount = 20;
  } else if (memory == 512) {
    extraAmount = 100;
  } else if (memory == 16 || memory == 1) {
    extraAmount = 180;
  }

  // call the functions
  getExtraPrice(expenseId, extraAmount);
  totalPrice();
  endTotal();
}

// Extra Memory part
document.getElementById("default-memory-amount").addEventListener("click", function () {
    extraCost("memory", 8);
  });
document.getElementById("extra-memory-amount").addEventListener("click", function () {
    extraCost("memory", 16);
  });

// Extra Storage part
document.getElementById("default-storage-amount").addEventListener("click", function () {
    extraCost("storage", 256);
  });
document.getElementById("extra-storage-amount").addEventListener("click", function () {
    extraCost("storage", 512);
  });
document.getElementById("extra-large-storage-amount").addEventListener("click", function () {
    extraCost("storage", 1);
  });

// Extra Delivery cost part
document.getElementById("free-delivery").addEventListener("click", function () {
  extraCost("delivery", 0, false);
});
document.getElementById("delivery-charge").addEventListener("click", function () {
    extraCost("delivery", 0, true);
});

// Promo Button part
document.getElementById("apply-button").addEventListener("click", function () {
  const input = document.getElementById("promo-code-input");
  const inputValue = input.value;
  endTotal(inputValue);

  // input value cleared
  input.value = "";
});
