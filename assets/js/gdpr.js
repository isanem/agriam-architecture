$(document).ready(function () {

    gdpr();

    function gdpr() {
        let gdprContainer = $('.gdpr');
        let gdprButton = $('.gdpr-btn');

        gdprButton.on("click", function () {
            gdprContainer.removeClass("active");
            localStorage.setItem("gdprConsent", "Accepted");
        });

        setTimeout(function () {
            if (localStorage.getItem("gdprConsent") === null) {
                gdprContainer.addClass("active");
            }
        }, 2500);
    }
});