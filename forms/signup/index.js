const password = document.querySelector('#password')
const passwordConfirmation = document.querySelector('#passwordConfirmation');
const passwordContent =  document.querySelector('#passwordContent')

passwordContent.addEventListener('click', function() {

    if (this.checked){
        password.type = "text";
        passwordConfirmation.type = "text";
        console.log('checked')
    } else {
        password.type = "password";
        passwordConfirmation.type = "password";
    }
})

