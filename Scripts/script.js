class PreviewModal{
    constructor(link){
        let navWidth = document.getElementsByTagName("nav")[0];
        console.log(navWidth.)
        this.link = link
        this.html = 
        `<div class="preview-modal" style="position:fixed; z-index:100; width:calc(100vw-${navWidth}); height:90%;">
            <iframe src="${this.link}" frameborder="8" style="width:100%; height:100%;"></iframe>
        </div>`   
    }
}

let submenu = document.getElementsByClassName("submenu")[0];
let pSubmenu = submenu.parentElement;
let nav = pSubmenu.parentElement;
console.log(nav)
pSubmenu.addEventListener("mouseover", function(){
    submenu.classList.remove("unslider"); 
    submenu.classList.add("slider");
})

submenu.addEventListener("mouseout", function(){
    submenu.classList.add("unslider");
    submenu.classList.remove("slider");
    
})

function animateCarousel() {
    const container = document.getElementById('image-container');
    const images = container.getElementsByTagName('img');
    const imageWidth = images[0].width + images[1].width; // Assumes all images are the same width
    images[2].style.height = images[0].height;
    images[3].style.height = images[0].height;
    let position = 0;
    let count = 0;
  
    setInterval(() => {
        if(count == 0){
            position -= imageWidth;
            count ++;
        }else{
            position = 0;
            count = 0;
        }
        container.style.marginLeft = `${position}px`;
    }, 3000); // Change this number to adjust the duration of each slide

    console.log("moved")
}  

if(window.location.pathname === "/portfolio/personal.html"){
    webPreview("https://mbzg.netlify.app/");
    carousel = document.getElementById("carousel-container");
    carousel.style.width = document.getElementsByClassName("python")[0].width;

    animateCarousel();
}

function webPreview(link){
    let modal = new PreviewModal(link);
    let article = document.getElementsByTagName("body")[0];
    article.innerHTML += modal.html;
}
