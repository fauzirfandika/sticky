function myCover() {
    let scrollPos = window.scrollY;
    if (scrollPos >= 100) {
        document.getElementById("under").className = "foc";
    }
    else () => {
        document.getElementById("under").className = "";
    }
};
