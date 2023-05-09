let submenu = document.getElementsByClassName("submenu")[0];
let pSubmenu = submenu.parentElement;
let nav = pSubmenu.parentElement;
console.log(nav)
pSubmenu.addEventListener("mouseover", function(){
    submenu.classList.remove("unslider"); 
    submenu.classList.add("slider");
})

// nav.addEventListener("mouseout", function(){
//     submenu.classList.remove("slider")
// })

submenu.addEventListener("mouseout", function(){
    submenu.classList.add("unslider");
    submenu.classList.remove("slider");
    
})