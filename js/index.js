const applyBtn = document.getElementById('apply-btn');
applyBtn.classList.add('cursor-not-allowed', 'opacity-50', 'pointer-events-none');

function getCardText(target) {
    // Show Card Title
    const getCardName = target.childNodes[3].childNodes[3].innerText;
    const getShowCartOption = document.getElementById('show-title-container');
    const li = document.createElement('li');
    li.innerText = getCardName;
    getShowCartOption.appendChild(li);

    // Get Card Price
    const getCardPrice = target.childNodes[3].childNodes[5].childNodes[0];
    const getCardPriceString = getCardPrice.innerText;
    const getCardPriceNumber = parseFloat(getCardPriceString);

    // Get Privios Total Price
    const getPreviousTotalPrice = document.getElementById('total-price');
    const getPreviousTotalPriceString = getPreviousTotalPrice.innerText;
    const getPreviousTotalPriceNumber = parseFloat(getPreviousTotalPriceString);

    // Calculate Card Price and  Previos Total Price
    const totalPrice = getCardPriceNumber + getPreviousTotalPriceNumber;
    getPreviousTotalPrice.innerText = totalPrice;

    // Get Total
    const getPreviousTotal = document.getElementById('total');
    const getPreviousTotalString = getPreviousTotal.innerText;
    const getPreviousTotalNumber = parseFloat(getPreviousTotalString);

    // Calculate Tatal and Card Price
    // const total = getCardPriceNumber + getPreviousTotalNumber;
    // getPreviousTotal.innerText = total;

    // Get Make Purchase Button and disable set
    const getMakePurchaseBtn = document.getElementById('make-purchase');
    if (totalPrice > 0) {
        getMakePurchaseBtn.disabled = false;
    }

    // Get Applyand Enabled Button
    const applyBtn = document.getElementById('apply-btn');
    applyBtn.classList.add('cursor-not-allowed', 'opacity-50', 'pointer-events-none');
    if (totalPrice >= 200) {
        applyBtn.classList.remove('cursor-not-allowed', 'opacity-50', 'pointer-events-none');
    }
    else {
        const total = getCardPriceNumber + getPreviousTotalNumber;
        getPreviousTotal.innerText = total;
    }
}



function getApply(target) {
    const getCouponInputField = document.getElementById('coupon-code');
    const getCouponInputValue = getCouponInputField.value;
    console.log(getCouponInputValue)


    if (getCouponInputValue === 'SELL200') {
        // get total price
        const getTotalPrice = document.getElementById('total-price');
        const getTotalPriceString = getTotalPrice.innerText;
        const getTotalPriceNumber = parseFloat(getTotalPriceString);

        // get discount tk
        const getPreviousDiscount = document.getElementById('discount');
        // const getPreviousDiscountString = getPreviousDiscount.innerText;
        // const getPreviousDiscountNumber = parseFloat(getPreviousDiscountString);
        // console.log(getTotalPriceNumber)

        // Calculate the Discount number 
        const discount = (20 / 100) * getTotalPriceNumber;
        getPreviousDiscount.innerText = discount;

        // get total
        const getTotal = document.getElementById('total');
        console.log(getTotal);
        const getTatalString = getTotal.innerText;
        const getTotalNumber = parseFloat(getTatalString);

        // calculate total
        const total = getTotalPriceNumber - discount;

        getTotal.innerText = total;
    }
}

document.getElementById('go-home').addEventListener('click', function () {
    const getShowCartOption = document.getElementById('show-title-container');
    getShowCartOption.innerText = '';
    const getCouponInputField = document.getElementById('coupon-code');
    getCouponInputField.value = '';
    refreshPage('total-price')
    refreshPage('discount')
    refreshPage('total')
})

function refreshPage(elementId) {
    const getId = document.getElementById(elementId);
    getId.innerText = '00.00'
}


