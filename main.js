//Default best price
const price = document.getElementById('price');


function isContain(element) {
    //return is class present
    return element.classList.contains('selected');
}

//Memory options
const memory1 = document.getElementById('memory-8gb');
const memory2 = document.getElementById('memory-16gb');

const memoryField = document.getElementById('memory-cost');
const totalOne = document.getElementById('total');

memory1.addEventListener('click', function () {
    //Memory options highlighted with select border
    if (!isContain(memory1)) {
        memory1.classList.add('selected');
        memory2.classList.remove('selected');
    }
    memoryField.innerText = '0';
    updateTotal();
});
memory2.addEventListener('click', function () {
    if (!isContain(memory2)) {
        memory1.classList.remove('selected');
        memory2.classList.add('selected');
    }
    memoryField.innerText = '180';
    updateTotal();
});

//Storage options
const storage1 = document.getElementById('storage-256gb');
const storage2 = document.getElementById('storage-512gb');
const storage3 = document.getElementById('storage-1tb');

const storageField = document.getElementById('storage-cost');
const totalTwo = document.getElementById('total');

storage1.addEventListener('click', function () {
    //Storage options highlighted with select border
    if (!isContain(storage1)) {
        storage1.classList.add('selected');
        storage2.classList.remove('selected');
        storage3.classList.remove('selected');
    }
    storageField.innerText = '0';
    updateTotal();
});
storage2.addEventListener('click', function () {
    if (!isContain(storage2)) {
        storage1.classList.remove('selected');
        storage2.classList.add('selected');
        storage3.classList.remove('selected');
    }
    storageField.innerText = '100';
    updateTotal();
});
storage3.addEventListener('click', function () {
    if (!isContain(storage3)) {
        storage1.classList.remove('selected');
        storage2.classList.remove('selected');
        storage3.classList.add('selected');
    }
    storageField.innerText = '180';
    updateTotal();
});

//Delivery options
const free = document.getElementById('free');
const fast = document.getElementById('fast');

const shippingField = document.getElementById('shipping');
const newTotal = document.getElementById('total');

const bottomTotal = document.getElementById('total-bottom');

const promoText = document.getElementById('promo-text');
const promoApply = document.getElementById('promo-apply');
const addPromo = document.getElementById('add-promo');
const errorMessege = document.getElementById('error');
const accessory = document.getElementById('accessory');


//delivery options highlighted with select border
free.addEventListener('click', function () {
    if (!isContain(free)) {
        free.classList.add('selected');
        fast.classList.remove('selected');
    }
    shippingField.innerText = '0';
    updateTotal();
});
fast.addEventListener('click', function () {
    if (!isContain(fast)) {
        free.classList.remove('selected');
        fast.classList.add('selected');
    }
    shippingField.innerText = '20';
    updateTotal();
});

promoApply.addEventListener('click', function () {
    let promoValue = promoText.value;
    let totalValue = Number(bottomTotal.innerText);
    let finalTotal = Number(newTotal.innerText);

    if (promoValue == 'stevekaku' || promoValue == 'STEVEKAKU') {
        totalValue = totalValue * .20;
        totalValue = finalTotal - totalValue;
        bottomTotal.innerText = totalValue;
        addPromo.style.display = 'none';
        accessory.style.display = 'none';
    }
    else {
        errorMessege.innerText = 'Invalid promo code! Correct order e.g: promo or PROMO';
    }
})

// New Update Total
function updateTotal() {
    const storageExtraCost = Number(storageField.innerText);
    const memoryExtraCost = Number(memoryField.innerText);
    const shippingCharge = Number(shippingField.innerText);
    const productPrice = Number(price.innerText);
    const GrandTotal = memoryExtraCost + productPrice + storageExtraCost + shippingCharge;
    newTotal.innerText = GrandTotal;
    bottomTotal.innerText = GrandTotal;
}


