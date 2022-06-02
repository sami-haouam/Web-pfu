function reveal() {
    var reveals = document.querySelectorAll(".cards");

    for (var i = 0; i < cards.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = cards[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            cards[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", cards);