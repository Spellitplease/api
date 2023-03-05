document.addEventListener("DOMContentLoaded", function () {
  //nom
  const name = document.querySelector("#nom");

  function validation() {
    if (name.value.length < 3) {
      name.style.borderColor = "red";
    } else {
      name.style.borderColor = "green";
    }
  }

  if (name) {
    name.addEventListener("input", validation);
  }

  //prenom
const firstname = document.querySelector("#prenom");

  function validation2() {
    if (firstname.value.length < 3) {
      firstname.style.borderColor = "red";
    } else {
      firstname.style.borderColor = "green";
    }
  }
  if (firstname) {
    firstname.addEventListener("input", validation2);
  }
  //date
  // function verifAge(){
  // const today = new Date();
  // const dob = new Date(document.querySelector("#age").value);
  // const age = (   today - dob)/(365*24*60*60*1000);
  // if (age<18) {
  //     alert ("Vous n'avez pas l'âge requis pour poursuivre l'inscription !");
  // }
  // }
  // const dob = new Date(document.querySelector("#age"));
  // if (dob) {
  //     dob.addEventListener("input", verifAge);
  // }

  const birthdateInput = document.querySelector("#age");
  const ageMessage = document.querySelector("#age-message");

  function calculateAge(birthdate) {
    const today = new Date();
    const birthdateObj = new Date(birthdate);
    let age = today.getFullYear() - birthdateObj.getFullYear();
    const monthDiff = today.getMonth() - birthdateObj.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthdateObj.getDate())
    ) {
      age--;
    }
    return age;
  }

  function validateAge() {
    const birthdate = birthdateInput.value;
    const age = calculateAge(birthdate);
    if (age < 18) {
      ageMessage.textContent =
        "Vous devez avoir au moins 18 ans pour vous inscrire.";
                
    } else {
      ageMessage.textContent = "";
      
      
    }
  }

  birthdateInput.addEventListener("input", validateAge);
  //email
  const emailInput = document.querySelector("#email");
function validateEmail(email) {
  const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(email);
}
function validation3() {
  if (validateEmail(emailInput.value)) {
    emailInput.style.borderColor = "green";
  } else {
    emailInput.style.borderColor = "red";
  }
}
if (emailInput) {
  emailInput.addEventListener("input", validation3);
}
});

//page2

fetch("https://dummyjson.com/products")
  .then((data) => {
    //console.log(data);
    return data.json();
  })
  .then((objectData) => {
    console.log(objectData.products);
    let tableData = "";
    if (Array.isArray(objectData.products)) {
      objectData.products.map((values) => {
        tableData += ` <tr>
      <td>${values.title}</td>
      <td>${values.description}</td>
      <td>${values.price} $</td>
      <td>${values.stock} restants</td>
      <td><img id="img" src="${values.thumbnail}"/></td>
      </tr>`;
      });
    }

    const tableBody = document.querySelector("#tableBody");
    if (tableBody !== null) {
      tableBody.innerHTML = tableData;
    } else {
      console.error("#tableBody not found");
    }
  });
 


