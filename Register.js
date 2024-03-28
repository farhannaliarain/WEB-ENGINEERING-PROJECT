const form = document.querySelector(".f-container");

const name = document.getElementById("name");
const email = document.getElementById("email");
const confirm = document.getElementById("Confpass");
const psw = document.getElementById("psw");

form.addEventListener("submit", (e) => {
        e.preventDefault();

        let ch = validateInputs();
        if (ch == true) {
    let user_records = new Array();
    user_records = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
    if (user_records.some((v) => {
            return v.email == email
        })) {
    } else {
        user_records.push({
            "name": name.value,
            "email": email.value,
            "psw": psw.value
        })
        localStorage.setItem("users", JSON.stringify(user_records));
    }

}
});
const setError = (element, message) => {
    const input = element.parentElement;
    const errorDisplay = input.querySelector(".error");

    errorDisplay.innerText = message;
    errorDisplay.style.color = "red";
    input.classList.add('error');
    input.classList.remove('success');
}

const setSuccess = element => {
    const input = element.parentElement;
    const errorDisplay = input.querySelector(".error");
    errorDisplay.innerText = ' ';

    input.classList.add('success');
    input.classList.remove('error');
}
const isValidEmail = email => {
    const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regEx.test(email);
}
const validateInputs = () => {
    let check = false;
    if (name.value == "") {
        setError(name, "Name is required");
        check = false;
    } else {
        setSuccess(name);
        check = true;
    }
    if (email.value == "") {
        setError(email, "Email is required");
        check = false;
    } else if (!isValidEmail(email.value)) {
        check = false;
        setError(email, "Provide a valid email address");
    } else {
        check = true;
        setSuccess(email);
    }
    if(psw.value==""|| psw.value.length<8) {
        setError(psw,"Minimum number of requirment is 8");
        check=false;
    }
    else {
        setSuccess(psw);
        check = true
    }

    if(psw.value!= confirm.value || confirm.value=="") {
        setError(confirm,"Password not match");
        check = false;
    }
    else {
        setSuccess(confirm);
        check = true;
    }

    return check;
}