$(document).ready(function() {
    $('.custom').owlCarousel({
        center: true,
        loop: true,
        margin: 0,
        dots: false,
        nav: true,
        items: 3,
        responsive: {
            0: {
                items: 1
            },
            991: {
                items: 3
            },
        }
    });

    $(".menu").click(function() {
        $("span").toggleClass("change");
        $("ul").slideToggle();
    });

    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
});