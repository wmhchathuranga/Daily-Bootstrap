var yes1 = document.getElementById("yes1");
var yes2 = document.getElementById("yes2");
var no1 = document.getElementById("no1");
var no2 = document.getElementById("no2");

var register1 = document.getElementById("register1");
var register2 = document.getElementById("register2");
var login1 = document.getElementById("login1");
var login2 = document.getElementById("login2");

yes1.addEventListener("click",()=>{
    if(!register1.classList.contains("d-none"))
    {
        register1.classList.toggle("d-none");
        login1.classList.toggle("d-none");
    }
})

yes2.addEventListener("click",()=>{
    if(!register2.classList.contains("d-none"))
    {
        register2.classList.toggle("d-none");
        login2.classList.toggle("d-none");
    }
})

no1.addEventListener("click",()=>{
    if(!login1.classList.contains("d-none")){
        register1.classList.toggle("d-none");
        login1.classList.toggle("d-none");
    }
})

no2.addEventListener("click",()=>{
    if(!login2.classList.contains("d-none")){
        register2.classList.toggle("d-none");
        login2.classList.toggle("d-none");
    }
})