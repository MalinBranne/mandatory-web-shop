let productspage = document.getElementById("productsDiv");
let checkoutpage = document.getElementById("checkoutDiv");

productspage.style.display = "block"; // Bryr mig inte om att detta inte funkar för äldre versioner av IE
checkoutpage.style.display = "none";

//Dölj checkoutDiv när man öppnar sidan

let products = [
  {
    name: "Bikini Top",
    price: 500,
    description: "Lorem ipsum dolor sit amet, consectetur elit",
    image: {
      img: "img/b1.jpg"
    }
  },

  {
    name: "Bikini Bottom",
    price: 500,
    description: "Lorem ipsum dolor sit amet, consectetur elit",
    image: {
      img: "img/b4.jpg"
    }
  },
  {
    name: "Bikini Full Set",
    price: 500,
    description: "Lorem ipsum dolor sit amet, consectetur elit",
    image: {
      img: "img/b2.jpg"
    }
  },

  {
    name: "Bikini Set",
    price: 500,
    description: "Lorem ipsum dolor sit amet, consectetur elit",
    image: {
      img: "img/b3.jpg"
    }
  },
  {
    name: "Bikini Top",
    price: 500,
    description: "Lorem ipsum dolor sit amet, consectetur elit",
    image: {
      img: "img/b4.jpg"
    }
  },

  {
    name: "Bikini Bottom",
    price: 500,
    description: "Lorem ipsum dolor sit amet, consectetur elit",
    image: {
      img: "img/b1.jpg"
    }
  },
  {
    name: "Bikini Full Set",
    price: 500,
    description: "Lorem ipsum dolor sit amet, consectetur elit",
    image: {
      img: "img/b2.jpg"
    }
  },

  {
    name: "Bikini Set",
    price: 500,
    description: "Lorem ipsum dolor sit amet, consectetur elit",
    image: {
      img: "img/b3.jpg"
    }
  },
  {
    name: "Bikini Set",
    price: 500,
    description: "Lorem ipsum dolor sit amet, consectetur elit",
    image: {
      img: "img/b4.jpg"
    }
  },
  {
    name: "Bikini Set",
    price: 500,
    description: "Lorem ipsum dolor sit amet, consectetur elit",
    image: {
      img: "img/b1.jpg"
    }
  }
];

// array av objekt som innehåller produkter

let img = document.getElementById("myImage");
img.setAttribute("src", products[0].image.img);
let img1 = document.getElementById("myImage1");
img1.setAttribute("src", products[1].image.img);
let img2 = document.getElementById("myImage2");
img2.setAttribute("src", products[2].image.img);
let img3 = document.getElementById("myImage3");
img3.setAttribute("src", products[3].image.img);
let img4 = document.getElementById("myImage4");
img4.setAttribute("src", products[4].image.img);
let img5 = document.getElementById("myImage5");
img5.setAttribute("src", products[5].image.img);
let img6 = document.getElementById("myImage6");
img6.setAttribute("src", products[6].image.img);
let img7 = document.getElementById("myImage7");
img7.setAttribute("src", products[7].image.img);
let img8 = document.getElementById("myImage8");
img8.setAttribute("src", products[8].image.img);
let img9 = document.getElementById("myImage9");
img9.setAttribute("src", products[9].image.img);

//loopar ut bilderna från arrayen i img taggarna

// let body = document.getElementsByTagName('body')[0];

// for (let i = 0; i < products.length; i++) {
//     let img = document.createElement('img');
//     img.setAttribute("src", products[i].image.img);
//     body.appendChild(img);
// }

// Kod ovan loopar ut bilderna i body taggen, men kunde inte få dom att hamna i annan div än body och då skapar den img taggar längst ner i htmlen.

let cards = document.querySelectorAll("div > #card");

cards.innerHTML = "hey"; //test

for (var i in products) {
  let p = products[i];
  cards[i].innerHTML = `
    <h4>${p.name}</h4>
    <div>Price: ${p.price}</div>
    <div>${p.description}</div>
  `;

  /*
    products[i].name +
    ", " +
    "Price: " +
    products[i].price +
    ", " +
    products[i].description;
    */
}

//loopar ut objekten ur arrayen i divvarna.

let checkoutBtn = document.getElementById("checkoutBtn");

checkoutBtn.addEventListener("click", function() {
  switchToPage2();
});

//lägger till ett event när man klickar på checkout knappen

function switchToPage2() {
  productspage.style.display = "none";
  checkoutpage.style.display = "block";
}

function switchToPage1() {
  productspage.style.display = "block";
  checkoutpage.style.display = "none";
}
//byter mellan divvarna

function jsShow(id) {
  document.getElementById(id).style.display = "block";
}

function jsHide(id) {
  document.getElementById(id).style.display = "none";
}

//funktoner för att dölja/visa saker

//validering för form nedan

function validateName() {
  let name = document.getElementById("fName").value;
  let lastname = document.getElementById("lName").value;

  if (name.length === 0 || lastname.length === 0) {
    producePrompt("Full name required", "namePrompt", "grey");
    return false;
  }

  if (!name.match(/^[a-zA-Z]+$/)) {
    producePrompt("Invalid entry", "namePrompt", "grey");
    return false;
  }

  producePrompt("Verified", "namePrompt", "green");
  return true;
}

function validateEmail() {
  let email = document.getElementById("email").value;

  if (email.indexOf("@") === -1) {
    producePrompt("Invalid entry", "emailPrompt", "grey");
    return false;
  }

  producePrompt("Verified", "emailPrompt", "green");
  return true;
}

function validatePhone() {
  let phone = document.getElementById("phone").value;

  if (phone.length === 0) {
    producePrompt("Required", "phonePrompt", "grey");
    return false;
  }

  if (!phone.match(/^[0-9]{10}$/)) {
    producePrompt("Invalid entry", "phonePrompt", "grey ");
    return false;
  }

  producePrompt("Verified", "phonePrompt", "green");
  return true;
}

function validateStreet() {
  let address = document.getElementById("street").value;

  if (address.length === 0) {
    producePrompt("Required", "addressPrompt", "grey");
    return false;
  }

  producePrompt("Verified", "addressPrompt", "Green");
  return true;
}

function validateZip() {
  let zipcode = document.getElementById("zip").value;

  if (zipcode.length === 0) {
    producePrompt("Required", "zipPrompt", "grey");
    return false;
  }

  if (zipcode.match(/^[a-zA-Z]+$/)) {
    producePrompt("Invalid entry", "zipPrompt", "grey");
    return false;
  }

  producePrompt("Verified", "zipPrompt", "green");
  return true;
}

function validateCity() {
  let city = document.getElementById("city").value;

  if (city.length === 0) {
    producePrompt("Required", "cityPrompt", "red");
    return false;
  } else if (!city.match(/^[a-zA-Z]+$/)) {
    producePrompt("Invalid entry", "cityPrompt", "grey");
    return false;
  }

  producePrompt("Verified", "cityPrompt", "green");
  return true;
}

function validateForm() {
  if (
    !validateName() ||
    !validateEmail() ||
    !validatePhone() ||
    !validateStreet() ||
    !validateZip() ||
    !validateCity()
  ) {
    jsShow("formPrompt");
    producePrompt(
      "Please check if your details are correct",
      "formPrompt",
      "grey"
    );
    setTimeout(function() {
      jsHide("formPrompt");
    }, 10000);
  } else {
    jsShow("formPrompt");
    producePrompt("Form Sent", "formPrompt", "green");
    setTimeout(function() {
      jsHide("namePrompt");
      jsHide("emailPrompt");
      jsHide("phonePrompt");
      jsHide("addressPrompt");
      jsHide("zipPrompt");
      jsHide("cityPrompt");
      jsHide("formPrompt");

      // gör så att alla verified promptar försvinner efter form sent. Testade att lägga in alla promptar i samma jsHide men fick det inte att funka.

      let form = document.getElementById("myForm");
      form.reset();

      //tömmer vårt form efter submit

      switchToPage1();

      //Byter till productsDiv
    }, 3000);
  }
}

function producePrompt(message, promptLocation, color) {
  document.getElementById(promptLocation).innerHTML = message;
  document.getElementById(promptLocation).style.color = color;
}

//skapar en prompt som visar verifieringen på formet.
