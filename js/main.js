window.onload = () => {
    document.querySelector(".hd-right").addEventListener("mouseover", function() {
        document.querySelector(".header-content").style.opacity = "0";
    })

    document.querySelector(".hd-right").addEventListener("mouseleave", function() {
        document.querySelector(".header-content").style.opacity = "1";
    })
}

window.onscroll = function(e) {
    let scrollY = window.scrollY;
    if(scrollY > 20) {
        document.querySelector("#scroll-up").style.display = "block";
        document.querySelector("#tab-responsive").style.display = "flex";
        document.querySelector(".self-picture").style.display = "block";
    } else {
        document.querySelector("#scroll-up").style.display = "none";
        document.querySelector("#tab-responsive").style.display = "none";
        document.querySelector(".self-picture").style.display = "none";
    }
    document.querySelector(".background-parallax").style.backgroundPositionY = - (scrollY/2) + "px";
}