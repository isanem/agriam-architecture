$(document).ready(function () {
    textSlide();

    function textSlide() {
        let i = 0;
        let text = $('#p-overlay');
        let textArray = [
            "Bygglovshandlingar?",
            "Rådgivning?",
            "Bygghandlingar?",
            "Visualisering i 3D?",
            "Idé till skiss?"
        ];

        text.html(textArray[i]);
        setInterval(function () {
            i++;

            text.html(textArray[i]);
            if (i >= (textArray.length - 1)) {
                i = -1;
            }
        }, 1500);
    }
});