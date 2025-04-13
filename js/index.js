let fixed = document.querySelector("nav");
let arrow = document.getElementById("arrow_a");

window.onscroll = function () {
    if (window.scrollY >= 250) {
        fixed.style.position = "fixed"
        fixed.style.zIndex = "10"
        fixed.style.marginTop = "-50px"
        arrow.style.position = "fixed"
        // fixed.style.zIndex = "10"
    }
    else {
        fixed.style.marginTop = "0"
        fixed.style.position = "static"
        arrow.style.position = "relative"
    }
};

window.scrollTo({
    // top: 1300,
    behavior:"smooth"
});


let nums = document.querySelectorAll(".num .goal");
let section = document.querySelectorAll(".score");

            nums.forEach((num) => counter(num));


function counter(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count)
        }
    }, 5 / goal);
}

counter(document.querySelectorAll(".num .goal")[0])