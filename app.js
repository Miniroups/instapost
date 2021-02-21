$(document).ready(function () {

    $('.card').each(function (i, obj) {
        textfill({
            maxFontPixels: 36
        });
    });
});


// Gestion de la taille de police d'écriture en fonction de la longueur du text
function textfill(options) {
    var fontSize = options.maxFontPixels;
    var ourText = $('.card_content:visible:first', this);
    var maxHeight = $(this).height() - 10;
    var maxWidth = $(this).width();
    var textHeight;
    var textWidth;
    do {
        ourText.css('font-size', fontSize);
        textHeight = ourText.height();
        textWidth = ourText.width();
        fontSize = fontSize - 1;
    } while ((textHeight > maxHeight || textWidth > maxWidth) && fontSize > 3);
    return this;
};


// Demande à html2canvas de créer une image
$('.card').on('click', function () {

    html2canvas(this).then(function (canvas) {

        // Génère un lien avec les attributs
        var link = document.getElementById('link');
        link.setAttribute('download', 'instapsy.png');
        link.setAttribute('href', canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"));
        // Simule le click
        link.click();

    });

});