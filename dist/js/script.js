const myNavbar = document.getElementById("myNavbar");

window.addEventListener("scroll", function () {
    var y = window.scrollY;
    console.log(y);
    if (y > 200) {
        myNavbar.classList.add("fixedNav");
        myNavbar.classList.remove("scrollyNav");
        myNavbar.classList.add("bg-third");
        myNavbar.classList.remove("navbar-dark");
        myNavbar.classList.add("navbar-light");
        myNavbar.classList.add("shadow");
        myNavbar.classList.remove("p-4");
        myNavbar.classList.add("p-3");
    } else if (y < 200) {
        myNavbar.classList.remove("fixedNav");
        myNavbar.classList.add("scrollyNav");
        myNavbar.classList.remove("bg-third");
        myNavbar.classList.add("navbar-dark");
        myNavbar.classList.remove("navbar-light");
        myNavbar.classList.remove("shadow");
        myNavbar.classList.add("p-4");
        myNavbar.classList.remove("p-3");
    }
});