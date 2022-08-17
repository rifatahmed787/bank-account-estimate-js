//step 1: add event listener to the deposite button
document.getElementById('btn-deposit').addEventListener('click', function () {
    //step 2: get the deposit ammount from the deposit input field
    const depositField = document.getElementById('deposit-field');
    //alway remeber to use .value to get text from an input field
    const newDepositAmmountString = depositField.value;
    const newDepositAmmount = parseFloat(newDepositAmmountString);


    //step 3: get the deposit total
    const depositTotalElement = document.getElementById('deposit-total');

    //without input and textarea if we want to get text we will use .innerText
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    //step 4: add numbers to set the total deposit
    const currentDepositTotal = newDepositAmmount + previousDepositTotal;
    depositTotalElement.innerText = currentDepositTotal;

    // step 5: get balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    //step 6: calculate current total  balance
    const newCurrentBalanceTotal = previousBalanceTotal + newDepositAmmount;
    balanceTotalElement.innerText = newCurrentBalanceTotal;

    //step 7: clear the deposit field
    depositField.value = '';
})