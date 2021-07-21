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

// lauch modal bouton je m'inscris
// launch modal event !!!!!! je n'ai rien en lauchModal
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// bouton fermeture croix je m'inscris okkkkkkkk
//si je fais .close la croix uniquement disparait!
const fermetureCroixJeMinscris = document.querySelector("#closebtn");
const modalbg = document.querySelector(".bground"); //à l'origine

//window.onclick = function(event) {

fermetureCroixJeMinscris.addEventListener("click", function (event) {
  //if (event.target == fermetureCroixJeMinscris) {
  // fermetureCroixJeMinscris.style.display = "none"; la croix disparait au 2ème click
  modalbg.style.display = "none"; // fait disparaitre le tout
  console.log(fermetureCroixJeMinscris);
  // }
});

// JE RECUPERE MON FORMULAIRE VALIDATE POUR PLUS TARD
//const validate = document.getElementById("validate");
//validate.addEventListener("submit", function(event) {
// verifier les true et false avant soumission du formulaire si chque function true alors soumission
//});// au dessus il y a déjà le début avec for each non !!!
/*
//3eme cas
//fonction pour first
const validatefirst = (event) => {
  // event.preventDefault(); //formulaire
  const firstNameInput = document.getElementById("first"); // name field
  //const valueNameInput = nameInput.value; //value field
  //trim pas d'espace début et fin
  if (firstNameInput.value == "") {
    let myError = document.getElementById("texterrorfirstname");
    myError.innerHTML = "merci de renseigner votre prénom";
    //changeStyleFirstName = document.getElementById("texterrorfirstname");
    //changeStyleFirstName.setAttribute(
    //  "style",
    //  "font-size : 16px; color : red; font-weight : bold"
    // );
    myError.style.color = red;

    event.preventDefault();
  }
};*/

/*
//2eme cas
function validatefirst(event) {
  event.preventDefault(); //formulaire
  const myField = document.getElementById("first");
  const value = myField.value;

  if (value.length > 2 && isNaN(value)) {
    //alert("Invalid input!");
    myField.focus();
    return true;
  } else {
    if (value.length < 2 || myField.value === [0 - 9]) {
      alert("Invalid input!");
      myField.focus();
      return false;
    }
  }
}*/

//detection envoi formulaire sur nouvelle page id dans form NB
/* bouton envoiNBNBNBNBNB
document.getElementById("inscription").addEventListener("submit", function (e) {
  e.preventDefault(); // on le met si erreur afin de ne pas envoyé le formulaire
  alert("Formulaire envoyé !");
});
NBNBNBNBNBNBNB*/
//1ier cas
const validateFirst = (event) => {
  event.preventDefault(); //formulaire
  const nameInput = document.getElementById("first"); // name field
  const valueNameInput = nameInput.value; //value field

  const nameRegex = /^[A-ZÇÉÈÊËÀÂÎÏÔÙÛa-zçéèêëàâîïôùû_\-\.\ ]+$/;
  let errorText = document.getElementById("texterrorfirstname");
  //var letters = /^[A-Za-z]+$/;
  //if (inputtxt.value.match(letters))

  if (valueNameInput.length < 2) {
    //console.log(typeof valueNameInput);
    // 1- for the caracter number

    //created a div with innerHTML
    //warning message, the field is not correct
    //const textfirst = document.getElementById("texterrorfirstname").textContent;
    //ca fonctionne sans la phrase précédente
    //document.getElementById("texterrorfirstname").textContent =
    //  "le champ n'est pas valide, veuillez entrer au minimum 2 lettres "; // pourquoi je ne peux pas mettre text tt simplement ?
    // change style for error field
    errorText.innerHTML = "merci d'indiquer au moins 2 lettres";
    changeStyleFirstName = document.getElementById("texterrorfirstname");
    changeStyleFirstName.setAttribute(
      "style",
      "font-size : 16px; color : red; font-weight : bold"
    );
    console.log("problem nombre de caractères!");
  } else if (
    nameRegex.test(nameInput.value) == true && ///erreur si valueNameInput!!!!!!!
    valueNameInput.length >= 2
  ) {
    errorText.innerHTML = "";
    changeStyleFirstName = document.getElementById("texterrorfirstname");
    changeStyleFirstName.setAttribute(
      "style",
      "font-size : 16px; color : red; font-weight : bold"
    );
    console.log("ok prénom correct");
  } else {
    changeStyleFirstName = document.getElementById("texterrorfirstname");
    changeStyleFirstName.setAttribute(
      "style",
      "font-size : 16px; color : red; font-weight : bold"
    );
    errorText.innerHTML = "merci d'indiquer un prénom";
  }
  //    valueNameInput.length > 2;
  //  console.log("nombre de lettres tout est ok");
  //document.getElementById("texterrorfirstname").textContent = "";
  return true; //TAF
  //console.log("return");
};

//NOM DE FAMILLE

const validateLast = (event) => {
  event.preventDefault(); //formulaire
  const lastNameInput = document.getElementById("last"); // name field
  const valueLastNameInput = lastNameInput.value; //value field

  const lastNameRegex = /^[A-ZÇÉÈÊËÀÂÎÏÔÙÛa-zçéèêëàâîïôùû_\-\.\ ]+$/;
  let errorText = document.getElementById("texterrorlastname");

  //var letters = /^[A-Za-z]+$/;
  //if (inputtxt.value.match(letters))

  if (valueLastNameInput.length < 2) {
    errorText.innerHTML = "merci d'indiquer au moins 2 lettres";
    changeStyleLastName = document.getElementById("texterrorlastname");
    changeStyleLastName.setAttribute(
      "style",
      "font-size : 16px; color : red; font-weight : bold"
    );
    console.log("problem nombre de caractères!");
  } else if (
    lastNameRegex.test(lastNameInput.value) == true && ///erreur si valueNameInput!!!!!!!
    valueLastNameInput.length >= 2
  ) {
    errorText.innerHTML = "";
    changeStyleLastName = document.getElementById("texterrorlastname");
    changeStyleLastName.setAttribute(
      "style",
      "font-size : 16px; color : red; font-weight : bold"
    );
    console.log("ok nom correct");
  } else {
    changeStyleFirstName = document.getElementById("texterrorfirstname");
    changeStyleFirstName.setAttribute(
      "style",
      "font-size : 16px; color : red; font-weight : bold"
    );
    errorText.innerHTML = "merci d'indiquer un nom";
  }
  //    valueNameInput.length > 2;
  //  console.log("nombre de lettres tout est ok");
  //document.getElementById("texterrorfirstname").textContent = "";
  return true; //TAF
  //console.log("return");
};

//

//EMAIL
const validateEmail = (event) => {
  event.preventDefault(); //formulaire
  const nameInputEmail = document.getElementById("email"); // name field
  const valueNameInputEmail = nameInputEmail.value; //value field
  const emailFormat =
    /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if (valueNameInputEmail == "") {
    //return "entrez une adresse email valide";
    console.log("");
    textEmail = document.getElementById("texterroremail").textContent;
    document.getElementById("texterroremail").textContent =
      "entrez une adresse email valide champ vide ";
    changeStyleEmail = document.getElementById("texterroremail");
    changeStyleEmail.setAttribute(
      "style",
      "font-size : 16px; color : red; font-weight : bold"
    );
  } else if (
    !(
      valueNameInputEmail.indexOf(".") > 0 &&
      valueNameInputEmail.indexOf("@") > 0
    ) ||
    /[^a-zA-Z0-9.@_-]/.test(valueNameInputEmail)
  ) {
    //return "l'adresse incorrect";
    // return "";
    document.getElementById("texterroremail").textContent = "email incorrect ";
    changeStyleEmail = document.getElementById("texterroremail");
    changeStyleEmail.setAttribute(
      "style",
      "font-size : 16px; color : red; font-weight : bold"
    );
  } else {
    // document.getElementById("texterroremail").textContent;
    document.getElementById("texterroremail").textContent = "";
    console.log("ok email correct");
  }
};

// BIRTHDAY

const validateBirthdate = (event) => {
  event.preventDefault(); //formulaire
  const nameInputBirthdate = document.getElementById("birthdate"); // name field
  const valueNameInputBirthdate = nameInputBirthdate.value; //value field
  // const birthdateFormat =
  /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z0-9_\-\.]{2,5})$/;
  let errorText = document.getElementById("texterrorbirthdate");
  // setFullYear("first");

  if (valueNameInputBirthdate === "") {
    event.preventDefault(); //formulaire
    errorText.innerHTML = "Merci d'entrez une date de naissance valide";
    changeStyleBirthdate = document.getElementById("texterrorbirthdate");
    changeStyleBirthdate.setAttribute(
      "style",
      "font-size : 16px; color : red; font-weight : bold"
    );
  } else if (
    (valueNameInputBirthdate.indexOf(".") > 0 &&
      valueNameInputBirthdate.indexOf("@") > 0) ||
    /[^a-zA-Z0-9.@_-]/.test(valueNameInputBirthdate)
  ) {
    errorText.innerHTML = "Entrez votre date de naissance";
    // nameInputBirthdate.setCustomValidity("");
    changeStyleBirthdate = document.getElementById("texterrorbirthdate");
    changeStyleBirthdate.setAttribute(
      "style",
      "font-size : 16px; color : red; font-weight : bold"
    );
  } else {
    // document.getElementById("texterroremail").textContent;
    document.getElementById("texterrorbirthdate").textContent = "";
    console.log("all is perfect for bithdate");
  }
};

// QUANTITY

const validateQuantity = (event) => {
  event.preventDefault(); //formulaire
  const quantityInput = document.getElementById("quantity"); // name field
  const valueQuantityInput = quantityInput.value; //value field

  const quantityRegex = /^[0-9]/;
  let errorText = document.getElementById("texterrorquantity");

  if (
    quantityRegex.test(quantityInput.value) == true &&
    valueQuantityInput <= 99
  ) {
    errorText.innerHTML = "";
    changeStyleQuantity = document.getElementById("texterrorquantity");
    changeStyleQuantity.setAttribute(
      "style",
      "font-size : 16px; color : red; font-weight : bold"
    );
    console.log("okay for number of games");
  } else if (valueQuantityInput > 99) {
    changeStyleQuantity = document.getElementById("texterrorquantity");
    changeStyleQuantity.setAttribute(
      "style",
      "font-size : 16px; color : red; font-weight : bold"
    );
    errorText.innerHTML = "Cette valeur doit être inférieur ou égal à 99";
  } else {
    changeStyleQuantity = document.getElementById("texterrorquantity");
    changeStyleQuantity.setAttribute(
      "style",
      "font-size : 16px; color : red; font-weight : bold"
    );
    errorText.innerHTML = "merci d'indiquer le nombre de games";
  }
  return true; //TAF pour submit
};

//bouton ville taf

/*
const validateCheckbox = (event) => {
  event.preventDefault(); //formulaire
  const location1Input = document.getElementById("location1"); // name field
  const location2Input = document.getElementById("location2"); // name field
  const location3Input = document.getElementById("location3"); // name field
  const location4Input = document.getElementById("location4"); // name field
  const location5Input = document.getElementById("location5"); // name field
  const location6Input = document.getElementById("location6"); // name field
  const checkedLocation1Input = location1Input.checked; 
  const checkedLocation2Input = location2Input.checked; 
  const checkedLocation3Input = location3Input.checked; 
  const checkedLocation4Input = location4Input.checked; 
  const checkedLocation5Input = location5Input.checked; 
  const checkedLocation6Input = location6Input.checked; 
  //value checked radio

  let errorText = document.getElementById("texterrorlocation");

  if (checkedLocation1Input.checked
    quantityRegex.test(quantityInput.value) == true &&
    valueQuantityInput <= 99
  ) {
    errorText.innerHTML = "";
    changeStyleQuantity = document.getElementById("texterrorquantity");
    changeStyleQuantity.setAttribute(
      "style",
      "font-size : 16px; color : red; font-weight : bold"
    );
    console.log("okay for number of games");
  } else if (valueQuantityInput > 99) {
    changeStyleQuantity = document.getElementById("texterrorquantity");
    changeStyleQuantity.setAttribute(
      "style",
      "font-size : 16px; color : red; font-weight : bold"
    );
    errorText.innerHTML = "Cette valeur doit être inférieur ou égal à 99";
  } else {
    changeStyleQuantity = document.getElementById("texterrorquantity");
    changeStyleQuantity.setAttribute(
      "style",
      "font-size : 16px; color : red; font-weight : bold"
    );
    errorText.innerHTML = "merci d'indiquer le nombre de games";
  }
  return true; //TAF pour submit
};;;;
*/
//o
const validateCheckbox = (event) => {
  const conditionsCheckBox1 = document.getElementById("checkbox1");
  conditionsCheckBox1.addEventListener("change", function (event) {
    event.preventDefault();
    let errorText = document.getElementById("texterrorconditions");
    //let errorText = document.getElementById("texterrorconditions");
    if (conditionsCheckBox1.checked == false) {
      errorText.innerHTML =
        "Merci d'accepter les conditions générales pour s'inscrire";
      changeStyleIconObligatoire = document.getElementById(
        "texterrorconditions"
      );
      changeStyleIconObligatoire.setAttribute(
        "style",
        "font-size : 16px; color : red; font-weight : bold"
      );
    } else {
      changeStyleIconObligatoire = document.getElementById(
        "texterrorconditions"
      );
      changeStyleIconObligatoire.setAttribute(
        "style",
        "font-size : 16px; color : red; font-weight : bold"
      );
      errorText.innerHTML = "";
    }
  });
};
// LE BOUTON CHECK obligatoire

//document
//.getElementById("checkbox1")
//.addEventListener("click", function (event) {
//const validateConditions = (event) => {//
//document.getElementById("iconobligatoire").addEventListener("click", onclick);
//event.preventDefault();
//const iconObligatoireInput = document.getElementById("iconObligatoire");
//const valueIconObligatoireInput = iconObligatoireInput.value;
//const conditionsCheckBox1 = document.getElementById("checkbox1");
//
//
//
/*
conditionsCheckBox1.addEventListener("change", function (event) {
  event.preventDefault();
  let errorText = document.getElementById("texterrorconditions");
  //let errorText = document.getElementById("texterrorconditions");
  if (conditionsCheckBox1.checked == false) {
    errorText.innerHTML =
      "Merci d'accepter les conditions générales pour s'inscrire";
    changeStyleIconObligatoire = document.getElementById("texterrorconditions");
    changeStyleIconObligatoire.setAttribute(
      "style",
      "font-size : 16px; color : red; font-weight : bold"
    );
  } else {
    changeStyleIconObligatoire = document.getElementById("texterrorconditions");
    changeStyleIconObligatoire.setAttribute(
      "style",
      "font-size : 16px; color : red; font-weight : bold"
    );
    errorText.innerHTML = "";
  }
});
*/
//return true;

/*
const button = document.querySelector(".btn");
button.onclick = function () {
  console.log("Hello!");
};
// OR
button.onclick = () => {
  console.log("Hello!");
};
*/

//
//https://www.youtube.com/watch?v=NxTQyZuwFOw
