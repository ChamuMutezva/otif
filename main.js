const backToTop = document.querySelector(".back-to-top");
const rootElement = document.documentElement;
console.log(backToTop)
console.log(rootElement.scrollHeight)
console.log(rootElement.clientHeight)
/*
function scrollToTop() {
    console.log(rootElement.scrollHeight)
    console.log(rootElement.clientHeight)
    if (rootElement.clientHeight < 915) {
        console.log("scroll to top")
        backToTop.classList.add("hide")
    } else {
        backToTop.classList.remove("hide")
    }
}

document.addEventListener("scroll", scrollToTop)
*/