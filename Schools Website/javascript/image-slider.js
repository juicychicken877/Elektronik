var numer = Math.floor(Math.random()*3)+1;;

function schowaj_slajd() {
    $("#slider").fadeOut(500);
}

function nastepny_slajd() {
    numer = numer + 1;

    if (numer > 3)
        numer = 1;
    var plik = "<img src=\"slajdy/slajd" + numer + ".png\" />";

    document.getElementById("slider").innerHTML = plik;

    $("#slider").fadeIn(500);

    setTimeout("nastepny_slajd()", 3500);
    setTimeout("schowaj_slajd()", 3000)
}
