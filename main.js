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

const sections = document.querySelectorAll("section:not(#projects) *");

const observer = new IntersectionObserver((enteries) => {
    enteries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("apparate");
        }
        observer.unobserve(entry.target);
    })
});

sections.forEach((el) => {
    observer.observe(el) 

})
