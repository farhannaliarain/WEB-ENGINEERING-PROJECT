const Mon = document.getElementById("money");
const F_Name = document.getElementById("firstName");
const L_Name = document.getElementById("lastName");
const street = document.getElementById("street");
const email = document.getElementById("email");
const zip = document.getElementById("zip");
const BankM = document.getElementById("BankM");
const submit = document.getElementById("submit");
const form = document.getElementById("myform");

let donaters = [];
form.addEventListener("submit", e => {
    e.preventDefault();


    let ch = validateInputs();
    if (ch == true) {
        alert("Clear");
        let info = {
            FirstName: F_Name.value,
            LastName: L_Name.value,
            Email: email.value,
            Zip: zip.value,
            Money: Mon.value,
            Street: street.value,
            MonBank: BankM.value
        }
        donaters.push(info);
    
        localStorage.setItem("Data", JSON.stringify(donaters));
    }

})

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
    const birr = Mon.value;
    const firstName = F_Name.value;
    const lastName = L_Name.value;
    const stre = street.value;
    const mail = email.value;
    const z = zip.value;
    let check = false;

    if (birr == "") {
        setError(Mon, "enter the amount");
        check = false;
    } else if (isNaN(birr)) {
        setError(Mon, "enter Number/text not valid");
        check = false;
    } else if (birr < 5 && birr != "") {
        setError(Mon, "Minimum amount is 5 birr");
        check = false;
    } else {
        setSuccess(Mon);
        check = true;
    }

    if (firstName == "") {
        setError(F_Name, "First name is required");
        check = false;
    } else {
        setSuccess(F_Name);
        check = true;
    }

    if (lastName == "") {
        setError(L_Name, "last name is required");
        check = false;
    } else {
        setSuccess(L_Name);
        check = true;
    }
    if (mail == "") {
        setError(email, "Email is required");
        check = false;
    } else if (!isValidEmail(mail)) {
        check = false;
        setError(email, "Provide a valid email address");
    } else {
        check = true;
        setSuccess(email);
    }

    if (z == "") {
        setError(zip, "zip code required");
        check = false;
    } else {
        check = true;
        setSuccess(zip);
    }
    if (stre == "") {
        setError(street, "street home requred");
        check = false;
    } else {
        setSuccess(street);
        check = true;
    }

    return check;
}
