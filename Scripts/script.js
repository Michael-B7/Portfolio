let submenu = document.getElementsByClassName("submenu")[0];
let pSubmenu = submenu.parentElement;

pSubmenu.addEventListener("mouseover", function(){ 
    submenu.classList.add("slider")
})

// pSubmenu.addEventListener("mouseout", function(){
//     submenu.classList.remove("slider")
// })

submenu.addEventListener("mouseout", function(){
    submenu.classList.add("unslider");
    submenu.classList.remove("slider");
    
})