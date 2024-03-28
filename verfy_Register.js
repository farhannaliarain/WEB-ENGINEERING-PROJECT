const btn=document.getElementById("toggleButton");//select the toogle button
const link=document.getElementsByClassName("navbar")[0];//select the class of the navigation bar

btn.addEventListener('click',()=>{//listen when the toogle button clicked
    link.classList.toggle('active');//And activate the navagation bar then when click it will appeared on the sxreen
})


const number=document.querySelector(".phone-number");
const btn = document.querySelector(".btn");
const text =document.querySelector(".text");

let regex =/^[\d,\s](5,20)/;

btn.addEventListener('click',()=>{
    if(number.value==""){
        text.innerHTML="Please Enter your Phone number";
        text.style.color="#C0C0C0";
    }
    else if(number.value.match(regex)){
        text.innerText ="Valid password";
        text.style.color ="green";
    }
    else
    {
        text.innerText = "Wrong Password";
    }
});

