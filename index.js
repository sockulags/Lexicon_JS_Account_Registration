import {regex, password, confirmPw, email, firstName, lastName} from "./constants.js";


const submitBtn = document.querySelector(".form-btn");

const registrationData={};
const formState = {
    firstName: false,
    lastName: false,
    email: false,
    password: false
}


function handleNameInput(input, feedback, property) {
    if (!regex.number.test(input.value) &&
        !regex.specialChars.test(input.value) &&
        !regex.space.test(input.value)) {
        feedback.innerText = "✔";
        feedback.classList.add("green");
        formState[property] = true;
    } else {
        feedback.classList.remove("green");
        feedback.innerText = "x";
        formState[property] = false;
    }

    if (input.value === "") {
        feedback.innerText = "";
    }
}

firstName.input.addEventListener("change", () => {
    handleNameInput(firstName.input, firstName.feedback, "firstName");
});

lastName.input.addEventListener("change", () => {
    handleNameInput(lastName.input, lastName.feedback, "lastName");
});



password.input.addEventListener("input",  () => {
  password.feedback.classList.remove("green");
  password.feedback.classList.remove("first-name-status")
  if(password.input.value === ""){
    password.feedback.innerText = "";
  } else if (regex.space.test(password.input.value)) {
    password.feedback.innerText = "Password can't contain spaces";
  } else if (!regex.upperCase.test(password.input.value)) {
    password.feedback.innerText = "At least one upper case letter(A-Z)";
  } else if (!regex.number.test(password.input.value)) {
    password.feedback.innerText = "At least one number(0-9)";
  } else if (!regex.specialChars.test(password.input.value)) {
    password.feedback.innerText = 'At least one special char !@#£$%&*)';
  } else if (password.input.value.length < 8) {
    password.feedback.innerText = "At least 8 charcters needed";
  } else if(password.input.value.length > 20){
    password.feedback.innerText = "Password is too long"
  } else { 
password.feedback.innerText = "Password is secure"
password.feedback.classList.add("green");

  }
});

confirmPw.input.addEventListener("input", () => {    
    confirmPw.feedback.style.fontSize = "";
    confirmPw.feedback.classList.remove("green"); 
    confirmPw.feedback.classList.remove("first-name-status")
    if(confirmPw.input.value === password.input.value){
        confirmPw.feedback.classList.add("green");
        confirmPw.feedback.innerText = "Password is matching"
        formState.password = true;       
    } else{
        confirmPw.feedback.innerText = "Password isn't matching"
        formState.password = false;
    }
    if(confirmPw.input.value === ""){
        confirmPw.feedback.innerText = "";
    }
})

function setFeedbackStatus(feedback, condition) {
    feedback.classList.add("first-name-status");
    if (condition) {
        feedback.innerText = "✔";
    } else {
        feedback.innerText = "x";
    }
}

confirmPw.input.addEventListener("change", () => {
    setFeedbackStatus(confirmPw.feedback, formState.password === true);
});

password.input.addEventListener("change", () => {
    setFeedbackStatus(password.feedback, password.feedback.classList.contains("green"));
});
email.input.addEventListener("change", () => {
    let emailValue = email.input.value;
    formState.email = false;    
    email.feedback.classList.remove("green");
    if(regex.email.test(emailValue)){
    email.feedback.innerText = "✔"
    email.feedback.classList.add("green"); 
    formState.email = true; 
    }else if(emailValue === ""){
        email.feedback.innerText = "";
    }
    else{
        email.feedback.innerText = "x"
     }
})

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(isCorrect(formState))
    if(isCorrect(formState)){
        registrationData.fullName = capitalizeFirstLetter(firstName.input.value) + " " + capitalizeFirstLetter(lastName.input.value);
        registrationData.username = createUsername(firstName.input.value, lastName.input.value);
        registrationData.email = email.input.value;
        registrationData.password = confirmPw.input.value;
        console.log(registrationData)
        alert(`Registration details:\n\nName: ${registrationData.fullName}\nUsername: ${registrationData.username}\nEmail: ${registrationData.email}\nPassword: ${registrationData.password}`);

        clearForm()
    }  
    else{
        alert("Details isn't correctly filled out.")
    }
})



const inputs = [password.input, confirmPw.input, email.input, firstName.input, lastName.input];
const feedbacks = [password.feedback, confirmPw.feedback, email.feedback, firstName.feedback, lastName.feedback];

function clearForm() {
    inputs.forEach((input) => (input.value = ""));
    feedbacks.forEach((feedback) => (feedback.innerText = ""));
}


function isCorrect(formState){
    return Object.values(formState).every(value => value === true);
}

function capitalizeFirstLetter(str) {
    return str.split(/[- ]/).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

function createUsername(firstName, lastName) {
    return firstName.slice(0, 3).toLowerCase() + lastName.slice(0,3).toLowerCase();
}