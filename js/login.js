//step one

document.getElementById('btn-submit').addEventListener('click', function () {
    //step two: get the email address inside the email address field
    //alway remeber to use .value to get text from an input field

    const userEmail = document.getElementById('user-email');
    const email = userEmail.value;

    // step 3: get password
    const userPassword = document.getElementById('user-password');
    const password = userPassword.value;

    //danger: do not verify email by user side
    //step 4: verify email and password
    if (email === 'sontan@bap.com' && password === 'secret') {
        location.href = 'bank.html';
    }
    else {
        alert('invalid password');
    }


})