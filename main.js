const backToTop = document.querySelector(".back-to-top");
const rootElement = document.documentElement;
// TODO: hide back-to-top button when scroll is in 100vh//

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {  
    if (
        document.body.scrollTop > rootElement.clientHeight ||
        document.documentElement.scrollTop > rootElement.clientHeight
    ) {
        backToTop.classList.add("show-btn")         
    } else {
        backToTop.classList.remove("show-btn")            
    }
}