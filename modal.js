function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements

// bouton je m'inscris
const modalBtn = document.querySelectorAll(".modal-btn"); //bouton je m'incris il faut un message

// bouton fermeture croix à faire
//const boutonFermetureCroix = document.getElementsByClassName("close"); //
// prénom, nom email .. container
const formData = document.querySelectorAll(".formData"); //ct au depart container de prenom, nom....

/*function data() {
  var valide = true;
  // check si valeur entrer dans les champs obligatoire
  if (formData.first.value == "") {
    valide = false;
    alert("Vous n'avez pas entré le prénom!");
  }
  if (formData.last.value == "") {
    valide = false;
    alert("Vous n'avez pas entré le nom!");
  }
}*/

// chaque fenetre nom prénom...
/*function formDataChaqueElement() {
 let textControl = document.getElementsByClassName("textcontrol"); //
 let firstTextControl = textControl[0];
 let secondTextControl = textControl[1];
 let thirdTextControl = textControl[2];
 let fourthTextControl = textControl[3];
 let fifthTextControl = textControl[4];
};*/
/*function formData() {
  if (document.getElementById("first").nodeValue.length < 2)
    return alert("le champs...");
}
*/
/*
function valider() {
  // si la valeur du champ prenom est non vide
  if (document.getElementsByName.prenom.value != "0") {
    // les données sont ok, on peut envoyer le formulaire
    return true;
  } else {
    // sinon on affiche un message
    alert("Saisissez le prénom");
    // et on indique de ne pas envoyer le formulaire
    return false;
  }
}
*/
//let prenom = document.getElementById("first").textContent;
//document.getElementById("first").textContent = "texte blabla";

// lauch modal bouton je m'inscris
// launch modal event !!!!!! je n'ai rien en lauchModal
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// bouton fermeture croix close à faire
//boutonFermetureCroix.forEach(() => boutonFermetureCroix.addEventListener("click", ""));
//function croixFermeture(){
//}
//function boutonFermetureCroix(close) {
// addEventListener("click") = window.close;
//}

//functionformData(){
//  first.text-control(required, )

// } else {
//  popup document write
//}
//}
//if()

/*
let close;
function fermerLaCroche() {
  let close = false;
  if (false) {
    console.log("The code in this block will not run.");
  } else {
    console.log("But the code in this block will!");
  }
}*/
/*/////
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
*/
/*
function close () {
  window.close(;)
}
*/
//const close = document.getElementsByName("close");
//function fermetureJeInscrit(elt){
//elt.addEventListener("click", closeDefinitif);

//}

// bouton fermeture croix je m'inscris okkkkkkkk
//si je fais .close la croix uniquement disparait!
let fermetureCroixJeMinscris = document.querySelector(".close");
const modalbg = document.querySelector(".bground"); //à l'origine

//window.onclick = function(event) {

document.addEventListener("click", function (event) {
  if (event.target == fermetureCroixJeMinscris) {
    // fermetureCroixJeMinscris.style.display = "none"; la croix disparait au 2ème click
    modalbg.style.display = "none"; // fait disparaitre le tout
    console.log(fermetureCroixJeMinscris);
  }
});

//alert quand on entre pas deux lettres
/*let first = getElementById("first");
function getElementById(first){
  if(lenght<2){
    alert("message à rédiger");
  }
  return first;
};*/
/*
const prenom = querySelector("first");
//function prenom(){
prenom.addEventListener("onmouseout", function (event) {
  if (lenght < 2) {
    alert("message à communiquer!");
    console.log(first);
  }
});*/
/*
const prenom = querySelector("first");
prenom.addEventListener("input", function (e) {
  let value = e.target.value;
  if (value.lenght < 2) {
    isValid = true;
  } else {
    isValid = false;
    alert("oh la la il manque des lettres!");
    return alert;
  }
});
*/
//cons formulairePrenom = document.querySelector("first");
/*document.getElementById(formulairePrenom).oninvalid = function () {
  this.formulairePrenom(this.checked ? "" : "My message");
};*/
/*
var text = document.getElementById("first").textContent;
// |text| vaut "Ceci est un exemple de texte".

// On définit le contenu textuel :
document.getElementById("first").textContent = "Ceci est un exemple de texte";
function text() {
  alert("hello");
}
*/
//function messageConfirmationSubmit() {}

//function messageCaseCondition() {
//  if(){

//  }
//}

//Element.onmouseout;
//length < 2
//alerte("")
/*
function validate(form)
{
  fail = validateFirst(form.first.value)
  fail += validateLast(form.last.value)
  if (fail == "") return true
  else { alert(fail); return false}
}
function validateFirst(field) {
  return (field == "") ? "Entrez vorname.\n" : ""
}
function validateLast(field)
{
  return (field == "") ? "Entrez nachname.\n" : ""
}*/

//TAF

//<form>
// <label for="name">Enter username (upper and lowercase letters): </label>
// <input type="text" name="name" id="name" required pattern="[A-Za-z]+">
// <button>Submit</button>
//</form>
/*
const textControlInput = document.getElementsById("first");

textControlInput.addEventListener("first", () => {
  textControlInput.setCustomValidity("");
  textControlInput.checkValidity();
});

textControlInput.addEventListener("invalid", () => {
  if (textControlInput.value === "") {
    textControlInput.setCustomValidity("Enter your username!");
  } else {
    textControlInput.setCustomValidity(
      "Usernames can only contain upper and lowercase letters. Try again!"
    );
  }
});
*/
/*
const nameInput = document.querySelector('input');

nameInput.addEventListener('input', () => {
  nameInput.setCustomValidity('');
  nameInput.checkValidity();
});

nameInput.addEventListener('invalid', () => {
  if(nameInput.value === '') {
    nameInput.setCustomValidity('Enter your username!');
  } else {
    nameInput.setCustomValidity('Usernames can only contain upper and lowercase letters. Try again!');
  }
});*/



/*
const conditionsButton = document.getElementsByClassName("checkbox-icon");

function conditionsButton(field) {
  if (field == "") {
    return "cochezzzzz";
  }
}
/*
const conditionsElt = document.getElementById("checkbox1");
function isConditionsValid() {
  let inputConditions = new InputElement(
    conditionsElt,
    "Vous devez vérifier que vous acceptez les termes et conditions."
  );
  let isValid = isCheckboxChecked("checkbox1");
  removeOrDisplayError(inputConditions, isValid);

  return isValid;
}*/
/*
function validate(e) {
  e.preventDefault();

  let conditions = isConditionsValid();

  let isFormValid =
    first && last && email && birthdate && quantity && city && conditions;

  if (isFormValid) displaySuccessMessage();
}*/
