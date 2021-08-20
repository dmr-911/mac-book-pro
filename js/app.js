function getExtraPrice(storageId, spaceAmount) {
    const extraSpacePrice = document.getElementById(storageId + '-extra-price');
    const extraMemoryPriceAmount = 0 + parseFloat(spaceAmount);
    extraSpacePrice.innerText = extraMemoryPriceAmount;
}
function spaceCost(storageId, memory, deliveryCharge) {
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
    getExtraPrice(storageId, spaceAmount);
    totalPrice();
    endTotal();
}
function totalPrice() {
    const fixedPrice = document.getElementById('fixed-price').innerText;
    const extraMemoryPrice = document.getElementById('memory-extra-price').innerText;
    const extraStoragePrice = document.getElementById('storage-extra-price').innerText;
    const deliveryCharge = document.getElementById('delivery-extra-price').innerText;
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = parseFloat(fixedPrice) + parseFloat(extraMemoryPrice) + parseFloat(extraStoragePrice) + parseFloat(deliveryCharge);
}
function endTotal(inputValue) {
    const total = parseFloat(document.getElementById('total-price').innerText);
    const endTotal = document.getElementById('end-total');
    if (inputValue == 'stevekaku') {
        const promo = parseFloat(total) / 5;
        console.log(promo);
        endTotal.innerText = total - promo;
    }
    else {
        endTotal.innerText = total;
    }
}

document.getElementById('default-memory-amount').addEventListener('click', function () {
    spaceCost('memory',8);
})
document.getElementById('extra-memory-amount').addEventListener('click', function () {
    spaceCost('memory', 16);
})
document.getElementById('default-storage-amount').addEventListener('click', function () {
    spaceCost('storage', 256);
})
document.getElementById('extra-storage-amount').addEventListener("click", function () {
    spaceCost("storage", 512);
});
document.getElementById('extra-large-storage-amount').addEventListener("click", function () {
      spaceCost("storage", 1);
});
document.getElementById('free-delivery').addEventListener('click', function () {
    spaceCost('delivery', 0, false)
})
document.getElementById('delivery-charge').addEventListener("click", function () {
  spaceCost('delivery', 0, true);
});
document.getElementById('apply-button').addEventListener('click', function () {
    const input = document.getElementById('promo-code-input');
    const inputValue = input.value;
    endTotal(inputValue);
    input.value = '';
})