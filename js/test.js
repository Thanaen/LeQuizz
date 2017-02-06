alert("Vous allez commencer le quizz infernal. Pour quitter, répondez \"quit\"");

var resultat = 0;

var reponse1 = prompt("Qui est représenté par le nombre \"45\"?");
document.write("<BR><h3>Qui est représenté par le nombre \"45\"?</h3>");

if (reponse1 == "Thibault" || reponse1 == "Thigros" || reponse1 == "Grarnould") {
    resultat++;
    document.write("\nVotre réponse:<font color=\"green\">  " + reponse1 + "</font>");
} else {
    document.write("Votre réponse:<font color =\"red\"> " + reponse1 + "</font>");
    document.write("<BR>La bonne réponse était \"Thibault\".");
}

var reponse2 = prompt("Quel est le jour le plus important de la semaine?");
document.write("<BR><h3>Quel est le jour le plus important de la semaine?</h3>");

if (reponse2 == "Jeudi" || reponse2 == "jeudi") {
    resultat++;
    document.write("\nVotre réponse:<font color=\"green\">  " + reponse2 + "</font>");
} else {
    document.write("Votre réponse:<font color =\"red\"> " + reponse2 + "</font>");
    document.write("<BR>La bonne réponse était \"Jeudi\".");
}

var reponse3 = prompt("Quel est la recette fétiche de Thigro?");
document.write("<BR><h3>Quelle est la recette fétiche de Thigro?</h3>");


if (reponse3 == "Le melt" || reponse3 == "Melt" || reponse3 == "Le Melt") {
    resultat++;
    document.write("\nVotre réponse:<font color=\"green\">  " + reponse3 + "</font>");
} else {
    document.write("Votre réponse:<font color =\"red\"> " + reponse3 + "</font>");
    document.write("<BR>La bonne réponse était \"Le melt\".");
}

document.write("<BR><h3>Nombre de points: " + resultat + "</h3><BR>");

switch (resultat) {
    case 0:
        alert("Bravo, vous êtes nul.");
        break;

    case 1:
        alert("Mouais. Faut réviser ses classiques.");
        break;

    case 2:
        alert("Presque correct.");
        break;

    case 3:
        alert("Tu triches, sans aucun doutes.");
        break;

    default:
        alert("Heu... j'ai perdu ta copie.");
        break;

}

//  document.write("<a href=\"file:///C:\\Users\\Clem\\OneDrive\\Dev\\web\\Projet test\\html\\index.html\">Retour au menu</a>");
