
    var question1faite = false;
    var question2faite = false;
    var question3faite = false;
    var question4faite = false;
    var question5faite = false;

    var resultat = 0;

    function play_single_sound() {
        document.getElementById('francais').play();
    }

    //Fonction pour afficher une image
    function show_image(src, width, height, alt) {
        var img = document.createElement("img");
        img.src = src;
        img.width = width;
        img.height = height;
        img.alt = alt;

        // This next line will just add it to the <body> tag
        document.body.appendChild(img);
    }
    //Fin de la Fonction


    function question1() {
        if (!question1faite) {
            var rep1 = document.getElementById("q1").value;
            if (rep1 == "C'est pas faux" || rep1 == "c'est pas faux" || rep1 == "cest pas faux" || rep1 == "Cest pas faux") {
                document.getElementById("zone1").innerHTML = "<font color=\"green\">" + rep1 + "</font> était la bonne réponse!";
                resultat++;
                question1faite = true;
                dispResultat();
            } else {
                document.getElementById("zone1").innerHTML = "<font color=\"red\"> Faux! </font>";

            }
        }
        question1faite = true;
        dispResultat();
    }

    function question2() {

        if (!question2faite) {
            var rep2 = document.getElementById("q2").value;
            if (rep2 == "C'est pas faux" || rep2 == "c'est pas faux" || rep2=="Cest pas faux") {
                document.getElementById("zone2").innerHTML = "<font color=\"green\">" + rep2 + "</font> était la bonne réponse!";
                resultat++;
            } else {
                document.getElementById("zone2").innerHTML = "<font color=\"red\"> Faux! </font>";
            }
        }
        question2faite = true;
        dispResultat();
    }

    function question3() {

        if (!question3faite) {
            var rep3 = document.getElementById("q3").value;
            if (rep3 == "Français" || rep3 == "français" || rep3 == "Francais" || rep3=="francais") {
                document.getElementById("zone3").innerHTML = "<font color=\"green\">" + rep3 + "</font> était la bonne réponse!";
                play_single_sound();
                resultat++;
            } else {
                document.getElementById("zone3").innerHTML = "<font color=\"red\"> Faux! </font>";
            }
        }
        question3faite = true;
        dispResultat();
    }


    function question4() {

        if (!question4faite) {
            var rep4 = document.getElementById("q4").value;
            if (rep4 == "Kadoc" || rep4=="kadoc") {
                document.getElementById("zone4").innerHTML = "<font color=\"green\">" + rep4 + "</font> était la bonne réponse!";
                resultat++;
            } else {
                document.getElementById("zone4").innerHTML = "<font color=\"red\"> Faux! </font>";
            }
        }
        question4faite = true;
        dispResultat();
    }

    function question5() {

        if (!question5faite) {
            var rep5 = document.getElementById("q5").value;
            if (rep5 == "Fishy" || rep5=="fishy") {
                document.getElementById("zone5").innerHTML = "<font color=\"green\">" + rep5 + "</font> était la bonne réponse!";
                resultat++;
            } else {
                document.getElementById("zone5").innerHTML = "<font color=\"red\"> Faux! </font>";
            }
        }
        question5faite = true;
        dispResultat();
    }


    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    function dispResultat() {
        if (question1faite && question2faite && question3faite && question4faite && question5faite) {
            switch (resultat) {
                case 0:
                    document.getElementById("zoneResultat").innerHTML = "<br><b>Grosse merde</b>";
                    break;
                case 1:
                    document.getElementById("zoneResultat").innerHTML = "<br><b>C'est très bof quand même.</b>";
                    break;
                case 2:
                    document.getElementById("zoneResultat").innerHTML = "<br><b>Y'a pire, mais y'a mieux.</b>";
                    break;
                case 3:
                    document.getElementById("zoneResultat").innerHTML = "<br><b>Pas mal, pas mal.</b>";
                    break;
                case 4:
                    document.getElementById("zoneResultat").innerHTML = "<br><b>... C'est de la triche!</b>";
                    break;
                case 5:
                    document.getElementById("zoneResultat").innerHTML = "<br><b>Légendaire!</b>";
                    var strWindowFeatures = "location=yes,height=400,width=525,scrollbars=no,status=yes";
                    var URL = "http://lequizzdebile.toile-libre.org/badge3.html";
                    var win = window.open(URL, "_blank", strWindowFeatures);
                    setCookie("quizz3",true);

                    break;
                default:
                    break;

            }
            window.scrollTo(0, document.body.scrollHeight);
        }

    }
    //Récupérer la touche "entrée"
    $("#q1").keypress(function(event) {
        if (event.which == 13) {
            event.preventDefault();
            question1();
        }

    });

    $("#q2").keypress(function(event) {
        if (event.which == 13) {
            event.preventDefault();
            question2();
        }

    });

    $("#q3").keypress(function(event) {
        if (event.which == 13) {
            event.preventDefault();
            question3();
        }

    });

    $("#q4").keypress(function(event) {
        if (event.which == 13) {
            event.preventDefault();
            question4();
        }

    });

    $("#q5").keypress(function(event) {
        if (event.which == 13) {
            event.preventDefault();
            question5();
        }

    });

    // register jQuery extension
    jQuery.extend(jQuery.expr[':'], {
        focusable: function(el, index, selector) {
            return $(el).is('a, button, :input, [tabindex]');
        }
    });

    $(document).on('keypress', 'input,select', function(e) {
        if (!question5faite) {
            if (e.which == 13) {
                e.preventDefault();
                // Get all focusable elements on the page
                var $canfocus = $(':focusable');
                var index = $canfocus.index(document.activeElement) + 2; // <- ça focus un élement focusable sur deux
                if (index >= $canfocus.length) index = 0;
                $canfocus.eq(index).focus();
            }
        }
    });

    function setCookie(sName, sValue) {

    var today = new Date(), expires = new Date();

    expires.setTime(today.getTime() + (365*24*60*60*1000));

    document.cookie = sName + "=" + encodeURIComponent(sValue) + ";expires=" + expires.toGMTString();

}
