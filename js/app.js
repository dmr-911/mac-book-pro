function getExtraPrice(storageId, spaceAmount) {
    // memory and storage amount
    const extraSpacePrice = document.getElementById(storageId + '-extra-price');
    const extraMemoryPriceAmount = 0 + parseFloat(spaceAmount);
    extraSpacePrice.innerText = extraMemoryPriceAmount;
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
    console.log(promo);
    endTotal.innerText = total - promo;
  } else {
    endTotal.innerText = total;
  }
}

function spaceCost(storageId, memory, deliveryCharge) {
    // declare and update constant value
    let spaceAmount = 0;
    if (memory == 8 || memory == 256) {
        spaceAmount = 0;
    }
    else if (deliveryCharge) {
        spaceAmount = 20;
    }
    else if (memory == 512) {
        spaceAmount = 100;
    }
    else if(memory == 16 || memory == 1){
        spaceAmount = 180;
    }
    else {
        spaceAmount = 0;
    }

    // call the functions
    getExtraPrice(storageId, spaceAmount);
    totalPrice();
    endTotal();
}

// Extra Memory part
document.getElementById('default-memory-amount').addEventListener('click', function () {
    spaceCost('memory',8);
})
document.getElementById('extra-memory-amount').addEventListener('click', function () {
    spaceCost('memory', 16);
})

// Extra Storage part
document.getElementById('default-storage-amount').addEventListener('click', function () {
    spaceCost('storage', 256);
})
document.getElementById('extra-storage-amount').addEventListener("click", function () {
    spaceCost("storage", 512);
});
document.getElementById('extra-large-storage-amount').addEventListener("click", function () {
      spaceCost("storage", 1);
});

// Extra Delivery cost part
document.getElementById('free-delivery').addEventListener('click', function () {
    spaceCost('delivery', 0, false)
})
document.getElementById('delivery-charge').addEventListener("click", function () {
  spaceCost('delivery', 0, true);
});

// Promo Button part
document.getElementById('apply-button').addEventListener('click', function () {
    const input = document.getElementById('promo-code-input');
    const inputValue = input.value;
    endTotal(inputValue);

    // input value cleared 
    input.value = '';
})