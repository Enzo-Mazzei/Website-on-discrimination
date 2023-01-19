function zoomMenu(x) {
    x.classList.toggle("change");
  }
  function showMenu() {
    let x = document.getElementById("myNav");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }

const slide = ["autonomie.png", "bank.png", "lgbt.png", "black.png", "language.png",
 "family.png", "ethnicity.png", "male.png", "french.png", "bankactual.png", "patronyme.png", "philosophy.png",
"origin.png", "politician.png", "old.png", "pregnant.png", "wheelchair.png", "transgender.png",
"syndicat.png", "genetic.png", "health.png", "moeur.png", "physique.png", "religion.png", "house.png"];
let numero = 0;
let numeroText = 0;
const slideText = ["L'autonomie", "La vulnérabilité [...] financière", "L'orientation sexuelle", "la race",
"La [...] langue [...]", "La situation de famille", "L'[...]ethnie", "Le sexe", "La [...] nation", 
"La domiciliation bancaire", "Le patronyme", "Les opinions philosophiques", "L'origine", 
"Les opinions politique", "L'âge", "La grossesse", "Le handicap", "L'identité de genre", 
"Les activités syndicales", "Les caractéristiques génétiques", "L’état de santé", "Les moeurs", 
"L’apparence physique", "La religion", "Le lieu de résidence"];
function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = "../images/" + slide[numero];
    document.getElementById("slide-description").innerHTML = slideText[numero];
}