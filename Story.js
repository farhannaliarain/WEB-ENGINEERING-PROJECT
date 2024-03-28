const title = document.querySelector(".fund");
const des=document.querySelector(".comment");
const file = document.querySelector(".finish");

function Data( name, story){
    this.name =name;
    this.com = story;
}
//Form validation for story page


const end = document.querySelector(".finish");

end.addEventListener("click",()=>{
    const pack = new Data(title.value,des.value);
    // if(pack.name="")
    // {
    //     let checkTitle = document.createElement("p");
    //     let text = document.createTextNode("Insert the title for the fund");
    //     checkTitle.appendChild(text);
    //     document.insertBefore(checkTitle,des);
    //     alert(text);
    // }
    // else{
    localStorage.setItem("story_1",JSON.stringify(pack));
})



