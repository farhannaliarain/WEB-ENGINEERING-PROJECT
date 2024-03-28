
const signUp = e => {
    const fullName = document.getElementById('name').value;
    const username = document.getElementById('username').value;
    const pass = document.getElementById('pass').value;
    const confpass = document.getElementById('confpass');

    let formData = JSON.parse(localStorage.getItem('formData')) || [];

    let exist = formData.length &&
        JSON.parse(localStorage.getItem('formData')).some(data =>
            data.fullName.toLowerCase() == fullName.toLowerCase() &&
            data.username.toLowerCase() == username.toLowerCase()
        );

    if (!exist) {
        formData.push({
            fullName,
            email,
            pass,
            confpass,
        });
        localStorage.setItem('formData', JSON.stringify(formData));
        document.querySelector('form').reset();
        document.getElementById('fname').focus();
        alert("Account Created.\n\nPlease Sign In using the link below.");
    } else {
        alert("Ooopppssss... Duplicate found!!!\nYou have already signed up");
    }
    e.preventDefault();
}

function signIn(e) {
    let email = document.getElementById('email').value,
        pwd = document.getElementById('pwd').value;
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    let exist = formData.length &&
        JSON.parse(localStorage.getItem('formData')).some(data => data.email.toLowerCase() == email && data.pwd.toLowerCase() == pwd);
    if (!exist) {
        alert("Incorrect login credentials");
    } else {
        location.href = "/";
    }
    e.preventDefault();
}