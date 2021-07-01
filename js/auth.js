const seePass = document.querySelector(".see_password")

const showHide = () => {
    if (passwordRegister.type === "password" && passwordLogin.type === "password") {
        passwordRegister.setAttribute("type", "text");
        passwordLogin.setAttribute("type", "text");
    } else {
        passwordRegister.setAttribute("type", "password");
        passwordLogin.setAttribute("type", "password");
    }
}

// login Form
const formLogin = document.getElementById("formLogin");
const emailLogin = document.getElementById("emailLogin");
const passwordLogin = document.getElementById("passwordLogin");
// login Form


// register Form
const formRegister = document.getElementById("formRegister");
const fullnameRegister = document.getElementById("fullnameRegister");
const emailRegister = document.getElementById("emailRegister");
const phoneRegister = document.getElementById("phoneRegister");
const passwordRegister = document.getElementById("passwordRegister");
const passwordConfirmRegister = document.getElementById("passwordConfirmRegister");
// register Form

formRegister.addEventListener("submit", e => {
    e.preventDefault();
    checkInputRegister();
})

formLogin.addEventListener("submit", e => {
    e.preventDefault();
    checkInputLogin();
})

const checkInputRegister = () => {
    const fullnameValue = fullnameRegister.value.trim();
    const emailValue = emailRegister.value.trim();
    const phoneValue = phoneRegister.value.trim();
    const passwordValue = passwordRegister.value.trim();
    const passwordConfirmValue = passwordConfirmRegister.value.trim();

    if (fullnameValue === '') {
        error(fullnameRegister, "لطفا نام و نام خانوادگی خود را وارد کنید");
    } else {
        success(fullnameRegister);
        resetError(fullnameRegister)
    }
    if (emailValue === '') {
        error(emailRegister, "لطفا پست الکترونیک خود را وارد کنید");
    } else {
        success(emailRegister);
        resetError(emailRegister)
    }
    if (phoneValue === '') {
        error(phoneRegister, "لطفا شماره تماس خود را وارد کنید");
    } else {
        success(phoneRegister);
        resetError(phoneRegister)
    }
    if (passwordValue.length < 8) {
        error(passwordRegister, "دوست من کلمه عبور خود را بیشتر از 8 کاراکتر انتخاب کن");
    } else {
        success(passwordRegister);
        resetError(passwordRegister)
    }

    if (passwordConfirmValue === '') {
        error(passwordConfirmRegister, "لطفا تایید کلمه عبور  را وارد کنید");
    } else if (passwordValue !== passwordConfirmValue) {
        error(passwordConfirmRegister, "کلمه عبور و تایید کلمه عبور یکسان نیستند");
    } else {
        success(passwordConfirmRegister);
        resetError(passwordConfirmRegister)
    }


}

const checkInputLogin = () => {
    const emailValue = emailLogin.value.trim();
    const passwordValue = passwordLogin.value.trim();

    if (emailValue === '') {
        error(emailLogin, "لطفا پست الکترونیک خود را وارد کنید");

    } else {
        success(emailLogin);
        resetError(emailLogin)
    }
    if (passwordValue.length < 8) {
        error(passwordLogin, "دوست من کلمه عبور خود را بیشتر از 8  کاراکتر انتخاب کن")
    } else {
        success(passwordLogin)
        resetError(passwordLogin)
    }
}
const error = (input, message) => {
    const formControll = input.parentElement;
    const span = formControll.querySelector("span")
    span.style = "color : #f14545"
    span.innerHTML = message;
    input.style = "border-color : #f14545"
}

const success = (input) => {
    input.style = "border-color : #43cc5a"
}

const resetError = (input) => {
    const formControll = input.parentElement;
    const span = formControll.querySelector("span")
    span.style = "display : none"
}