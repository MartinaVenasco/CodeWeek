const userLi = document.querySelector(".filtered-users");
const userLiAdress = document.querySelector(".adress");
const API_URL = "https://jsonplaceholder.typicode.com/users";

const buttonAll = document.querySelector(".all");
const button2 = document.querySelector(".A-E");
const button3 = document.querySelector(".F-L");
const button4 = document.querySelector(".M-Z");
const showedContact = document.getElementById("show-contacts");


buttonAll.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("chiamata api", API_URL);

  fetch(API_URL)
    .then((response) => {
      const json = response.json();
      console.log({ json });
      return json;
    })
    .then((json) => {
      userLi.innerHTML = json
        .map((user) => {
          return `<div class="card-contact"><div class ="img-container"><img class ="placeholderimg" src="./placeholder.svg"> <img class="phone" src="./phone.svg"></div> <li class="name-number"><h2>${user.name}</h2><h4>${user.phone}</h4><p class="more-info">✉ ${user.email}<br><br><b>STREET: </b>${user.address.street}, ${user.address.suite}<br><br>
          <b>CITY: </b>${user.address.city}, ${user.address.zipcode} </p></li></div>
          `;
        })
        .join(" ");
        
    });
});

button2.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("chiamata api", API_URL);
  fetch(API_URL)
    .then((response) => {
      const json = response.json();
      console.log({ json });
      return json;
    })
    .then((json) => {
      const filteredAE = json.filter(
        (user) =>
          user.name[0] == "A" ||
          user.name[0] == "B" ||
          user.name[0] == "C" ||
          user.name[0] == "D" ||
          user.name[0] == "E"
      );
      if (filteredAE > 0) return;

      userLi.innerHTML = filteredAE
        .map((user) => {
          return `<div class="card-contact"><div class ="img-container"><img class ="placeholderimg"src="./images/placeholder-02.svg"> <img class="phone" src="./images/phone.svg"></div> <li class="name-number"><h2>${user.name}</h2><h4>${user.phone}</h4><p class="more-info">✉ ${user.email}<br><br><b>STREET: </b>${user.address.street}, ${user.address.suite}<br><br>
          <b>CITY: </b>${user.address.city}, ${user.address.zipcode} </p></li></div>
          `;
        })
        .join("");

      if (filteredAE == 0)
        return (userLi.innerHTML = `<h2> NESSUN CONTATTO DA VISUALIZZARE </h2>`);
    });
});

button3.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("chiamata api", API_URL);
  fetch(API_URL)
    .then((response) => {
      const json = response.json();
      console.log({ json });
      return json;
    })
    .then((json) => {
      const filteredFL = json.filter(
        (user) =>
          user.name[0] == "F" ||
          user.name[0] == "G" ||
          user.name[0] == "H" ||
          user.name[0] == "I" ||
          user.name[0] == "L"
      );
      if (filteredFL > 0) return;

      userLi.innerHTML = filteredFL
        .map((user) => {
          return `<div class="card-contact"><div class ="img-container"><img class ="placeholderimg"src="./images/placeholder-02.svg"> <img class="phone" src="./images/phone.svg"></div> <li class="name-number"><h2>${user.name}</h2><h4>${user.phone}</h4><p class="more-info">✉ ${user.email}<br><br><b>STREET: </b>${user.address.street}, ${user.address.suite}<br><br>
          <b>CITY: </b>${user.address.city}, ${user.address.zipcode} </p></li></div>
          `;
        })
        .join("");

      if (filteredFL == 0)
        return (userLi.innerHTML = `<h2> NESSUN CONTATTO DA VISUALIZZARE </h2>`);
    });
});

button4.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("chiamata api", API_URL);
  fetch(API_URL)
    .then((response) => {
      const json = response.json();
      console.log({ json });
      return json;
    })
    .then((json) => {
      const filteredMZ = json.filter(
        (user) =>
          user.name[0] == "M" ||
          user.name[0] == "N" ||
          user.name[0] == "O" ||
          user.name[0] == "P" ||
          user.name[0] == "Q" ||
          user.name[0] == "R" ||
          user.name[0] == "S" ||
          user.name[0] == "T" ||
          user.name[0] == "U" ||
          user.name[0] == "V" ||
          user.name[0] == "Z"
      );
      if (filteredMZ > 0) return;

      userLi.innerHTML = filteredMZ
        .map((user) => {
          return `<div class="card-contact"><div class ="img-container"><img class ="placeholderimg"src="./images/placeholder-02.svg"> <img class="phone" src="./images/phone.svg"></div> <li class="name-number"><h2>${user.name}</h2><h4>${user.phone}</h4><p class="more-info">✉ ${user.email}<br><br><b>STREET: </b>${user.address.street}, ${user.address.suite}<br><br>
          <b>CITY: </b>${user.address.city}, ${user.address.zipcode} </p></li></div>
          `;
        })
        .join("");

      if (filteredMZ == 0)
        return (userLi.innerHTML = `<h2> NESSUN CONTATTO DA VISUALIZZARE </h2>`);
    });
});
