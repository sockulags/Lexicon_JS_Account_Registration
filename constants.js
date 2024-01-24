export const regex = {
specialChars: /[!"@#£$%&\/{(\[\)*\]=})]/,
lowerCase: /[a-z]/,
upperCase: /[A-Z]/,
number: /[0-9]/,
space: /\s/,
email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
};

export const password = {
    input: document.querySelector(".passwordInput"),
    feedback: document.querySelector('.pw-status'),
}

export const confirmPw = {
    input: document.querySelector(".confirmPasswordInput"),
    feedback: document.querySelector('.confirm-pw-status'),
}
export const email = {
    input: document.querySelector(".emailInput"),
    feedback: document.querySelector('.email-status'),
}
export const firstName = {
    input: document.querySelector(".firstNameInput"),
    feedback: document.querySelector('.first-name-status'),
}
export const lastName = {
    input: document.querySelector(".lastNameInput"),
    feedback: document.querySelector('.last-name-status'),
}
