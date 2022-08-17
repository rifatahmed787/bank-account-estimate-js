//step 1: add event listener to the deposite button

document.getElementById('btn-withdraw').addEventListener('click', function () {

    //step 2: get the withdraw ammount from the withdraw input field
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;

    //step 2.5: convert string to a number 
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    //step 8: clear the input field
    withdrawField.value = '';

    if (isNaN(newWithdrawAmount)) {
        alert('Provide a valid number');
        return;
    }

    //step 3: get the previous withdraw total
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;

    //step 4: conver string to a number
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);


    //step 7: get the previous balance total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);



    if (newWithdrawAmount > previousBalanceTotal) {
        alert('Bap er bank a ato taka nai');
        return;
    }

    //step 5: calculate total withdraw amount
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    //step 6: set total withdraw amount
    withdrawTotalElement.innerText = currentWithdrawTotal;


    //step 8: get the new balance
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;



})