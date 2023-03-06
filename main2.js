const nomInput = document.querySelector('input[name="nom"]');
const prenomInput = document.querySelector('input[name="prenom"]');
const dateInput = document.getElementById("date-input");
const emailInput = document.querySelector('input[name="email"]');
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
btn2.style.display = 'none';
const private1 = document.querySelector('li[name="private"]');
const private2 = document.querySelector('#private2');
private2.style.display ='none';


 

const validateNom = () => {

  const nomValue = nomInput.value.trim();

  if (nomValue.length >= 3 && nomValue.length <= 20) {
    nomInput.classList.add('allowed');
    nomInput.classList.remove('not-allowed');
    return true;
  } 
  else {
    nomInput.classList.add('not-allowed');
    nomInput.classList.remove('allowed');
    return false;
  }
};

const validatePrenom = () => {

  const prenomValue = prenomInput.value.trim();

  if (prenomValue.length >= 3 && prenomValue.length <= 20) {
    prenomInput.classList.add('allowed');
    prenomInput.classList.remove('not-allowed');
    return true;
  } 
  else {
    prenomInput.classList.add('not-allowed');
    prenomInput.classList.remove('allowed');
    return false;
  }
};

const validateEmail = () => {

  const emailValue = emailInput.value.trim();
  const regex = /^(([^<>()[]\.,;:\s@"]+(.[^<>()[]\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;

  if (regex.test(emailValue)) {
    emailInput.classList.add('allowed');
    emailInput.classList.remove('not-allowed');
    return true;
  } 
  else {
    emailInput.classList.add('not-allowed');
    emailInput.classList.remove('allowed');
    return false;
  }
};



function validateDate() {
  const inputDate = new Date(dateInput.value);

  if (isNaN(inputDate.getTime())) {
    dateInput.classList.remove("allowed");
    dateInput.classList.add("not-allowed");
    return false;
  }

  const today = new Date();
  const ageDiff = (today.getTime() - inputDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25);

  if (ageDiff >= 18) {
    dateInput.classList.add("allowed");
    dateInput.classList.remove("not-allowed");
    return true;
  } else {
    dateInput.classList.add("not-allowed");
    dateInput.classList.remove("allowed");
    return false;
  }
}


function updateButton() {
  if (validateNom() && validatePrenom() && validateDate() && validateEmail()) {
    btn1.style.display = 'none';
    btn2.style.display = 'block';
    btn2.style.backgroundColor = 'green';

  } else {
    alert('Veuillez remplir tous les champs.');
  }
}

function updatePrivacy() {
  private1.style.display ='none';
  private2.style.display ='flex';

}

btn1.addEventListener('click', updateButton);
btn2.addEventListener('click', updatePrivacy);

nomInput.addEventListener('input', validateNom);
prenomInput.addEventListener('input', validatePrenom);
emailInput.addEventListener('input', validateEmail);
dateInput.addEventListener('blur', validateDate);