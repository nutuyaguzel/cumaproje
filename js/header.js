const menubtn=document.getElementById("hamburgermenubtn")
const navbar=document.getElementById("navbar")


menubtn.addEventListener("click",()=>{

    console.log(getComputedStyle(navbar,null).display)
    
    if(getComputedStyle(navbar,null).display=== "none")
    {navbar.style.display= "block"}
    else{
        navbar.style.display= "none"
    }


}
)