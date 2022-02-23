const next = '<button class="btn btn-primary-color px-4">Next</button>';
const prev = '<button class="btn btn-primary-color px-4">Prev</button>';

$(document).ready(function () {
    $("#firstCarousel").owlCarousel({
        stagePadding: 40,
        loop: true,
        margin: 20,
        responsiveClass: true,
        autoplayHoverPause:true,
        paddinStage:50,
        dots:false,
        navText:[
            prev,
            next
        ],
        nav:true,
        responsive:{
            0:{
                items:1,
            },
            800:{
                items:2,
            },
            1000:{
                items:2,
            },
            1200:{
                items:3
            }
        }
    });
});