let scrollToTop = document.querySelector(".scroll");More actions



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

const sections = document.querySelectorAll("section:not(#projects) *");

const observer = new IntersectionObserver((enteries) => {
    enteries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("apparate");
        }
        else {
            entry.target.classList.remove("apparate");
        }
    })
});

sections.forEach((el) => {
    observer.observe(el) 
})
