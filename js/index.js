const $name = document.querySelector('.form__name');
const $lastName = document.querySelector('.form__last');
const $email = document.querySelector('.form__email');
const $password = document.querySelector('.form__password');
const $submit = document.querySelector('.form__button');
const $form = document.getElementById('form');

const isValid={
    name:false,
    lastName:false,
    email:false,
    password:false
}


const letterReg = /^[a-zA-Z]{3,60}$/
const emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z]+(\.[a-zA-Z]{2,5})$/gm
const passReg = /^[a-zA-Z0-9._\-!@#$%&*()]{3,60}$/



$name.addEventListener('change',(e)=>{
    const nameValue = e.target.value;
    const nameValdiation = letterReg.test(nameValue);
    if(nameValdiation == true){
        isValid.name = true;
        $name.nextElementSibling.classList.remove('img__error');
        $name.nextElementSibling.nextElementSibling.textContent = null;
    }
    else{
        isValid.name = false;
        $name.nextElementSibling.classList.add('img__error');
        $name.nextElementSibling.nextElementSibling.textContent = 'Name cannot be empty';
    }
})

$lastName.addEventListener('change',(e)=>{
    const lastValue = e.target.value;
    const lastValidation = letterReg.test(lastValue);
    if(lastValidation == true){
        isValid.lastName = true;
        $lastName.nextElementSibling.classList.remove('img__error');
        $lastName.nextElementSibling.nextElementSibling.textContent = null;
    }
    else{
        isValid.lastName = false;
        $lastName.nextElementSibling.classList.add('img__error');
        $lastName.nextElementSibling.nextElementSibling.textContent = 'Last Name Cannot be empty';
    }
});


$email.addEventListener('change',(e)=>{

    const emailValue = e.target.value;
    const emailValidation = emailReg.test(emailValue);
    if(emailValidation == true){
        isValid.email = true;
        $email.nextElementSibling.classList.remove('img__error');
        $email.nextElementSibling.nextElementSibling.textContent = null;
    }
    else{
        isValid.email = false;
        $email.nextElementSibling.classList.add('img__error');
        $email.nextElementSibling.nextElementSibling.textContent = 'Email Cannot be empty';
    }
});




$password.addEventListener('change',(e)=>{
    const passValue = e.target.value;
    const passValidation = passReg.test(passValue);
    if(passValidation == true){
        isValid.password = true;
        $password.nextElementSibling.classList.remove('img__error');
        $password.nextElementSibling.nextElementSibling.textContent = null;
    }
    else{
        isValid.password = false;
        $password.nextElementSibling.classList.add('img__error');
        $password.nextElementSibling.nextElementSibling.textContent = 'Password Cannot be empty';
    }
})


$submit.addEventListener('click',(e)=>{
    e.preventDefault();
    if(isValid.name == true && isValid.lastName == true && isValid.email == true && isValid.password == true){
        $form.submit();        
    }


})

