window.onload = function () {
    let myLinks = document.getElementById("icon");
    let myInisdeLinks = document.getElementById("inside-links");
    let myLanding = document.getElementById("landing");
    let mySpan = document.getElementById("second-span");
  


    myLinks.onclick = function () {
        myInisdeLinks.style.display = "block";
        mySpan.style.width = "100%";
       
    };
    myInisdeLinks.onmouseleave = function () {
        myInisdeLinks.style.display = "none";
        mySpan.style.width = "60%";
        
    }



};

let scrollToTop = document.querySelector(".scroll");

document.body.onscroll = function () {
    if (scrollY > 200) {
        scrollToTop.style.bottom = "20px"
    }
    else {
        scrollToTop.style.bottom = "-100px"
        
    }
}

scrollToTop.onclick = function() {
    document.documentElement.scrollTop = 0
}