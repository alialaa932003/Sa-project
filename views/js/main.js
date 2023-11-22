let navbar = document.querySelector(".parent");
let lastScroll = 0;
// header.style.paddingTop = navbar.clientHeight + 30 + "px";
window.addEventListener("scroll", function () {
    let scrollTop =
        window.pageYOffset || this.document.documentElement.scrollTop;
    if (scrollTop > lastScroll && scrollTop > 100) {
        navbar.style.top = -+navbar.clientHeight + "px";
    } else {
        navbar.style.top = "0";
    }
    lastScroll = scrollTop;
});
