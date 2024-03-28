// Toggle the link bar for responsivness 
// To Do that active the link-bar 
const btn=document.getElementById("toggleButton");
const link=document.getElementsByClassName("navbar")[0];

btn.addEventListener('click',()=>{
    link.classList.toggle('active');
})

//Validate if the value is inserted in the form list 
//Class used to valudate are name,Country, category and Next(submit)

let firstName =document.querySelector(".firstName");
let lastName=document.querySelector(".lastName");
let country = document.querySelector(".country")
let category = document.querySelector(".category");
let next = document.querySelector(".next");
let myform = document.querySelector("#myForm");
next.addEventListener("click",()=>{
    let fullName = document.querySelector(".fullName");
    let city = document.querySelector(".place");
    let choose= document.querySelector(".Choose");
    

    //Validation for the recored Name 
    if(firstName.value=="" ||country.value==""||category.selectedIndex==""){//Change the form action to on that page 
        myform.setAttribute("action","#fill");
    }                                                                   //If this condtion is true
    if(firstName.value=="" || lastName.value=="")
    {
        
        fullName.innerHTML="<i>Please Enter your name and last name!!!</i>";
        fullName.style.color="red";
    }
    else 
    {
        fullName.innerHTML="wellcome aboard";
        fullName.style.color="green";
    }
    //To check if the validate is input 
    
    if(country.value=="") {
        city.innerHTML="<i>Enter your place!!!</i>";
    }
    else
    {
    city.innerHTML="Check!!!";
    city.style.color="green";
    }

    //check if the category is choosen
    if(category.selectedIndex=="")
    {
        choose.innerHTML="<i>Select category!!!</i>";
        
    }
    else{
        var val=category.value;
        choose.innerHTML="You selected " + val;
        choose.style.color="green"
    }
});
