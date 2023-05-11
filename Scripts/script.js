class PreviewModal{
    constructor(link){
        let navWidth = document.getElementsByTagName("nav")[0];
        console.log(navWidth)
        this.link = link
        this.html = 
        `<div id="cover" style="position:fixed; z-index:20; background:rgba(0,0,0,.5); width:100%; height:100%;">
            <i class="fa-solid fa-x"></i>
            <div class="preview-modal" style="position:fixed; z-index:100; width:90%; height:90%; margin-left:70px;">
                <iframe src="${this.link}" style="width:100%; height:100%;"></iframe>
            </div>
        </div>`   
    }
}

// document.addEventListener("click", function(el){console.log(el.target)});

let submenu = document.getElementsByClassName("submenu")[0];
let pSubmenu = submenu.parentElement;
let nav = pSubmenu.parentElement;


function slide(){
    submenu.classList.remove("unslider"); 
    submenu.classList.add("slider");
}

function unslide(){
    submenu.classList.add("unslider");
    submenu.classList.remove("slider");
}

pSubmenu.addEventListener("mouseover", slide);

submenu.addEventListener("mouseout", unslide);

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
    carousel = document.getElementById("carousel-container");
    carousel.style.width = document.getElementsByClassName("python")[0].width;

    animateCarousel();
}

function webPreview(link){
    let nav = document.getElementsByTagName("nav")[0];
    let links = nav.getElementsByTagName("a");
    for(let i=0; i<links.length; i++){
        links[i].style.pointerEvents = "none";
    }

    let modal = new PreviewModal(link);
    let body = document.getElementById("prev-modal");
    body.style.display = "block";
    body.style.position = "fixed";
    body.innerHTML += modal.html;
    let cover = document.getElementById("cover");

    pSubmenu.removeEventListener("mouseover", slide);

    submenu.removeEventListener("mouseout", unslide);
    
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop; 
    let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    function scroll(){
        window.scrollTo(scrollLeft, scrollTop);
    }

    window.addEventListener("scroll", scroll);

    function close(){
        cover.remove();
        // body.style.position = "relative";
        body.style.display = "none";
        window.removeEventListener("scroll", scroll);
        pSubmenu.addEventListener("mouseover", slide);
        submenu.addEventListener("mouseout", unslide);
        for(let i=0; i<links.length; i++){
            links[i].style.pointerEvents = "auto";
        }
    }

    cover.addEventListener("click", close)
}