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

const formData = document.querySelectorAll(".formData"); //ct au depart container de prenom, nom....

// lauch modal bouton je m'inscris
// launch modal event !!!!!! je n'ai rien en lauchModal
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// bouton fermeture croix je m'inscris okkkkkkkk
const btnClose = document.querySelector("#closebtn");
const modalbg = document.querySelector(".bground"); //à l'origine

//window.onclick = function(event) {

btnClose.addEventListener("click", function (event) {
  modalbg.style.display = "none"; // fait disparaitre le tout
  console.log(btnClose);
  // }
});

// JE RECUPERE MON FORMULAIRE VALIDATE POUR PLUS TARD

//detection envoi formulaire sur nouvelle page id dans form NB
/* bouton envoiNBNBNBNBNB
document.getElementById("inscription").addEventListener("submit", function (e) {
  e.preventDefault(); // on le met si erreur afin de ne pas envoyé le formulaire
  alert("Formulaire envoyé !");
});
NBNBNBNBNBNBNB*/
//1ier cas
const validateFirst = (event) => {
  // event.preventDefault(); //formulaire
  const nameInput = document.getElementById("first"); // name field
  const valueNameInput = nameInput.value; //value field

  const nameRegex = /^[A-ZÇÉÈÊËÀÂÎÏÔÙÛa-zçéèêëàâîïôùû_\-\.\ ]+$/;
  let errorText = document.getElementById("texterrorfirstname");

  if (valueNameInput.length < 2) {
    errorText.innerHTML = "Merci d'indiquer au moins 2 lettres";
    changeStyleFirstName = document.getElementById("texterrorfirstname");
    changeStyleFirstName.setAttribute(
      "style",
      "font-size : 16px; color : red; font-weight : bold"
    );
    console.log("problem nombre de caractères prénom!");
    isValid = false;
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
    isValid = true;
  } else {
    changeStyleFirstName = document.getElementById("texterrorfirstname");
    changeStyleFirstName.setAttribute(
      "style",
      "font-size : 16px; color : red; font-weight : bold"
    );
    errorText.innerHTML = "Merci d'indiquer un prénom";
    isValid = false;
  }
};

//NOM DE FAMILLE

const validateLast = (event) => {
  //  event.preventDefault(); //formulaire
  const lastNameInput = document.getElementById("last"); // name field
  const valueLastNameInput = lastNameInput.value; //value field

  const lastNameRegex = /^[A-ZÇÉÈÊËÀÂÎÏÔÙÛa-zçéèêëàâîïôùû_\-\.\ ]+$/;
  let errorText = document.getElementById("texterrorlastname");

  if (valueLastNameInput.length < 2) {
    errorText.innerHTML = "Merci d'indiquer au moins 2 lettres";
    changeStyleLastName = document.getElementById("texterrorlastname");
    changeStyleLastName.setAttribute(
      "style",
      "font-size : 16px; color : red; font-weight : bold"
    );
    console.log("problem nombre de caractères nom!");
    isValid = false;
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
    isValid = true;
  } else {
    changeStyleFirstName = document.getElementById("texterrorfirstname");
    changeStyleFirstName.setAttribute(
      "style",
      "font-size : 16px; color : red; font-weight : bold"
    );
    errorText.innerHTML = "Merci d'indiquer un nom";
    isValid = false;
  }
};

//

//EMAIL
const validateEmail = (event) => {
  // event.preventDefault(); //formulaire
  const nameInputEmail = document.getElementById("email"); // name field
  const valueNameInputEmail = nameInputEmail.value; //value field
  const emailFormat =
    //  /^[^\W][a-zA-Z0-9\-\._]+[^\W]@[^\W][a-zA-Z0-9\-\._]+[^\W]\.[a-zA-Z]{2,6}$/;

    /^\A(?:[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])\z$/;

  if (valueNameInputEmail == "") {
    //return "entrez une adresse email valide";
    console.log("");
    textEmail = document.getElementById("texterroremail").textContent;
    document.getElementById("texterroremail").textContent =
      "Entrez une adresse email valide champ vide ";
    changeStyleEmail = document.getElementById("texterroremail");
    changeStyleEmail.setAttribute(
      "style",
      "font-size : 16px; color : red; font-weight : bold"
    );
    isValid = false;
  } else if (
    !(
      valueNameInputEmail.indexOf(".") > 0 &&
      valueNameInputEmail.indexOf("@") > 0
    ) ||
    /[^a-zA-Z0-9.@_-]/.test(valueNameInputEmail)
  ) {
    //return "l'adresse incorrect";
    // return "";
    document.getElementById("texterroremail").textContent =
      "Adresse email incorrect ";
    changeStyleEmail = document.getElementById("texterroremail");
    changeStyleEmail.setAttribute(
      "style",
      "font-size : 16px; color : red; font-weight : bold"
    );
    isValid = false;
  } else {
    // document.getElementById("texterroremail").textContent;
    document.getElementById("texterroremail").textContent = "";
    console.log("ok email correct");
    isValid = true;
  }
};

// BIRTHDAY

const validateBirthdate = (event) => {
  //  event.preventDefault(); //formulaire
  const nameInputBirthdate = document.getElementById("birthdate"); // name field
  const valueNameInputBirthdate = nameInputBirthdate.value; //value field
  // const birthdateFormat =
  /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z0-9_\-\.]{2,5})$/;
  let errorText = document.getElementById("texterrorbirthdate");
  // setFullYear("first");

  if (valueNameInputBirthdate === "") {
    errorText.innerHTML = "Merci d'entrez une date de naissance valide";
    changeStyleBirthdate = document.getElementById("texterrorbirthdate");
    changeStyleBirthdate.setAttribute(
      "style",
      "font-size : 16px; color : red; font-weight : bold"
    );
    isValid = false;
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
    isValid = false;
  } else {
    // document.getElementById("texterroremail").textContent;
    document.getElementById("texterrorbirthdate").textContent = "";
    console.log("ok pour birthdate");
    isValid = true;
  }
};

// QUANTITY

const validateQuantity = (event) => {
  // event.preventDefault(); //formulaire
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
    isValid = true;
  } else if (valueQuantityInput > 99) {
    changeStyleQuantity = document.getElementById("texterrorquantity");
    changeStyleQuantity.setAttribute(
      "style",
      "font-size : 16px; color : red; font-weight : bold"
    );
    errorText.innerHTML = "Cette valeur doit être inférieur ou égal à 99";
    isValid = false;
  } else {
    changeStyleQuantity = document.getElementById("texterrorquantity");
    changeStyleQuantity.setAttribute(
      "style",
      "font-size : 16px; color : red; font-weight : bold"
    );
    errorText.innerHTML = "Merci d'indiquer le nombre de games";
    isValid = false;
  }
  //TAF pour submit
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
*/

const validateRadio = (event) => {
  //event.preventDefault(); //formulaire
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
  // console.log(checkedLocation1Input);
  //let errorText = document.getElementById("texterrorlocation");
  if (
    checkedLocation1Input == false &&
    checkedLocation2Input == false &&
    checkedLocation3Input == false &&
    checkedLocation4Input == false &&
    checkedLocation5Input == false &&
    checkedLocation6Input == false
  ) {
    textLocation = document.getElementById("texterrorlocation").textContent;
    document.getElementById("texterrorlocation").textContent =
      "Merci de sélectionner une ville";

    changeStyleIconObligatoire = document.getElementById("texterrorlocation");
    changeStyleIconObligatoire.setAttribute(
      "style",
      "font-size : 16px; color : red; font-weight : bold"
    );
    isValid = false;

    //  errorText.innerHTML = "Merci de sélectionner une ville";
  } else {
    checkedLocation1Input == true ||
      checkedLocation2Input == true ||
      checkedLocation3Input == true ||
      checkedLocation4Input == true ||
      checkedLocation5Input == true ||
      checkedLocation6Input == true;

    textLocation = document.getElementById("texterrorlocation").textContent;
    document.getElementById("texterrorlocation").textContent = "";

    changeStyleIconObligatoire = document.getElementById("texterrorlocation");
    changeStyleIconObligatoire.setAttribute(
      "style",
      "font-size : 16px; color : red; font-weight : bold"
    );
    console.log("ok pour location");
    isValid = true;
    //let errorText = document.getElementById("texterrorlocation").focus();

    //  errorText.innerHTML = "";
    //document.getElementById("texterrorlocation").style.display = "none";
    //errorText.style.display = "none";
  }
};

//boutons checkbox ok
const validateCheckbox = () => {
  const conditionsCheckBox1 = document.getElementById("checkbox1");
  // conditionsCheckBox1.addEventListener("change", function (event) {
  // event.preventDefault();
  // console.log(conditionsCheckBox1);
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
    isValid = false;
  } else {
    errorText.innerHTML = "";
    changeStyleIconObligatoire = document.getElementById("texterrorconditions");
    changeStyleIconObligatoire.setAttribute(
      "style",
      "font-size : 16px; color : red; font-weight : bold"
    );
    console.log("conditions ok");
    isValid = true;
  }
};

const validate = (event) => {
  console.log(event);

  /*validateFirst(event);
  console.error("validation PRENOM", isValid);
  validateLast(event);
  console.error("validation NOM", isValid);
  validateEmail(event);
  console.error("validation EMAIL", isValid);
  validateBirthdate(event);
  console.error("validation BIRTHDATE", isValid);
  validateQuantity(event);
  console.error("validation QUANTITY", isValid);
  validateCheckbox(event);
  console.error("validation CHECKBOX", isValid);
  validateRadio(event);
  console.error("validation RADIO", isValid);*/

  const isFirstNameValid = validateFirst();
  const isLastNameValid = validateLast();
  const isEmailValid = validateEmail();
  const isBirthdateValid = validateBirthdate();
  const isQuantityValid = validateQuantity();
  const isCheckboxValid = validateCheckbox();
  const isRadioValid = validateRadio();

  //if (isValid) {
  //console.log({
  //prénom: "isFirstNameValid",
  //prénom: "toto",
  //});
  const messageValidation = document.getElementById("submitMessage");

  if (
    isFirstNameValid &&
    isLastNameValid &&
    isEmailValid &&
    isBirthdateValid &&
    isQuantityValid &&
    isCheckboxValid &&
    isRadioValid
  ) {
    console.log({
      prénom: "isFirstNameValid",
      nom: "isLastName",
      //prénom: "toto",
    });
    //
    messageValidation.style.display = "block";
    //modal_body.style.display = "none";

    changeStylemessageValidate = document.getElementById("submitMessage");
    changeStylemessageValidate.setAttribute(
      "style",
      "font-size : 16px; color : red; font-weight : bold; background-color : orange"
    );
  } else {
    messageValidation.style.display = "none";
  }
  //) {
  //console.log(validate);
  //console.log("validate");
  //document.write(submiteMessage);
  //}

  // }*/
};

//
//
document
  .getElementById("inscription")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // on le met si erreur afin de ne pas envoyé le formulaire
    // enlever plus tard
    //  alert("Formulaire envoyé !");
    /*if (
      validateFirst === true &&
      validateLast === true &&
      validateEmail === true &&
      validateBirthdate === true &&
      validateQuantity === true &&
      validateRadio === true &&
      validateCheckbox === true
    ) {
      
      console.log("c'est partie pour l'envoi");
      
      //const inputs = document.getElementsByTagName("input");
    }*/
    validate(event);
  });
document
  .getElementById("inscription")
  .addEventListener("change", function (event) {
    event.preventDefault(); // on le met si erreur afin de ne pas envoyé le formulaire
    //alert("Formulaire envoyé !");
    validate(event);
  });
