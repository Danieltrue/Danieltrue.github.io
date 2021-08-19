$(document).ready(() => {
    let home;
    let service = document.querySelector(".work").getBoundingClientRect().top;

    //home
    //service
    $(".head-service").click(() => {
        $("html, body").animate({
                scrollTop: service,
            },
            1000
        );
    });
    $(".head-design").click(() => {
        $("html, body").animate({
                scrollTop: design,
            },
            1000
        );
    });
    $(".head-game").click(() => {
        $("html, body").animate({
                scrollTop: game,
            },
            1500
        );
    });

    $("html").scroll(() => {
        alert();
    });
});