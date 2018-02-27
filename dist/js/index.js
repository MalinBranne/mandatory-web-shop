$("#productsDiv").attr("style", "display: block"); // Bryr mig inte om att detta inte funkar för äldre versioner av IE
$("#checkoutDiv").attr("style", "display: none");
$("#productPage").attr("style", "display: none");
//Dölj checkoutDiv och productPage när man öppnar sidan

let products = [{

    id: "id0",
    name: "Bikini Top",
    price: 500,
    description: "Lorem ipsum dolor sit amet, consectetur elit",
    image: {
      img: "dist/img/b1.jpg"
    }
  },

  {
    id: "id1",
    name: "Bikini Bottom",
    price: 500,
    description: "Lorem ipsum dolor sit amet, consectetur elit",
    image: {
      img: "dist/img/b4.jpg"
    }
  },
  {
    id: "id2",
    name: "Bikini Full Set",
    price: 500,
    description: "Lorem ipsum dolor sit amet, consectetur elit",
    image: {
      img: "dist/img/b2.jpg"
    }
  },

  {
    id: "id3",
    name: "Bikini Set",
    price: 500,
    description: "Lorem ipsum dolor sit amet, consectetur elit",
    image: {
      img: "dist/img/b3.jpg"
    }
  },
  {
    id: "id4",
    name: "Bikini Top Blue",
    price: 500,
    description: "Lorem ipsum dolor sit amet, consectetur elit",
    image: {
      img: "dist/img/b4.jpg"
    }
  },

  {
    id: "id5",
    name: "Bikini Bottom Blue",
    price: 500,
    description: "Lorem ipsum dolor sit amet, consectetur elit",
    image: {
      img: "dist/img/b1.jpg"
    }
  },
  {
    id: "id6",
    name: "Bikini Full Set Blue",
    price: 500,
    description: "Lorem ipsum dolor sit amet, consectetur elit",
    image: {
      img: "dist/img/b2.jpg"
    }
  },

  {
    id: "id7",
    name: "Bikini Set Blue",
    price: 500,
    description: "Lorem ipsum dolor sit amet, consectetur elit",
    image: {
      img: "dist/img/b3.jpg"
    }
  },
  {
    id: "id8",
    name: "Bikini Set White",
    price: 500,
    description: "Lorem ipsum dolor sit amet, consectetur elit",
    image: {
      img: "dist/img/b4.jpg"
    }
  },
  {
    id: "id9",
    name: "Bikini Set Gold",
    price: 500,
    description: "Lorem ipsum dolor sit amet, consectetur elit",
    image: {
      img: "dist/img/b1.jpg"
    }
  }
];

// array av objekt som innehåller produkter

$("#myImage").attr("src", products[0].image.img);
$("#myImage1").attr("src", products[1].image.img);
$("#myImage2").attr("src", products[2].image.img);
$("#myImage3").attr("src", products[3].image.img);
$("#myImage4").attr("src", products[4].image.img);
$("#myImage5").attr("src", products[5].image.img);
$("#myImage6").attr("src", products[6].image.img);
$("#myImage7").attr("src", products[7].image.img);
$("#myImage8").attr("src", products[8].image.img);
$("#myImage9").attr("src", products[9].image.img);

//loopar ut bilderna från arrayen i img taggarna

let cards = $("div > #card");

cards.innerHTML = "hey"; //test

for (var i in products) {
  let p = products[i];
  cards[i].innerHTML = `
    <h4>${p.name}</h4>
    <div>Price: ${p.price}</div>
    <div>${p.description}</div>
  `;
}

//loopar ut objekten ur arrayen i divvarna.

$(".checkoutBtn").on("click", function () {
  switchToPage2();
});

//lägger till ett event när man klickar på checkout knappen
function switchToPage1() {
  $("#productsDiv").attr("style", "display: block");
  $("#checkoutDiv").attr("style", "display: none");
  $("#productPage").attr("style", "display: none");
}

function switchToPage2() {
  $("#productsDiv").attr("style", "display: none");
  $("#checkoutDiv").attr("style", "display: block");
  $("#productPage").attr("style", "display: none");
}

function switchToPage3() {
  $("#productsDiv").attr("style", "display: none");
  $("#checkoutDiv").attr("style", "display: none");
  $("#productPage").attr("style", "display: block");
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
  if (!validateName() ||
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
    setTimeout(function () {
      jsHide("formPrompt");
    }, 10000);
  } else {
    jsShow("formPrompt");
    producePrompt("Form Sent", "formPrompt", "green");
    setTimeout(function () {
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

$("#validateBtn").on("click", function (event) {
  validateForm();
})
//skapar en prompt som visar verifieringen på formet.

// Shopping Cart functions

var shoppingCart = (function () {
  var cart = [];

  function Item(name, price, count) {
    this.name = name;
    this.price = price;
    this.count = count;
  }

  function saveCart() {
    localStorage.setItem("shoppingCart", JSON.stringify(cart));
  }

  function loadCart() {
    cart = JSON.parse(localStorage.getItem("shoppingCart"));
    if (cart === null) {
      cart = [];
    }
  }

  loadCart();

  var obj = {};

  obj.addItemToCart = function (name, price, count) {
    for (var i in cart) {
      if (cart[i].name === name) {
        cart[i].count += count;
        saveCart();
        return;
      }
    }

    console.log("addItemToCart:", name, price, count);

    var item = new Item(name, price, count);
    cart.push(item);
    saveCart();
  };

  obj.setCountForItem = function (name, count) {
    for (var i in cart) {
      if (cart[i].name === name) {
        cart[i].count = count;
        break;
      }
    }
    saveCart();
  };

  obj.removeItemFromCart = function (name) {
    for (var i in cart) {
      if (cart[i].name === name) {
        cart[i].count--;
        if (cart[i].count === 0) {
          cart.splice(i, 1);
        }
        break;
      }
    }
    saveCart();
  };

  obj.removeItemFromCartAll = function (name) {
    for (var i in cart) {
      if (cart[i].name === name) {
        cart.splice(i, 1);
        break;
      }
    }
    saveCart();
  };

  obj.clearCart = function () {
    cart = [];
    saveCart();
  };

  obj.countCart = function () {
    var totalCount = 0;
    for (var i in cart) {
      totalCount += cart[i].count;
    }

    return totalCount;
  };

  obj.totalCart = function () {
    var totalCost = 0;
    for (var i in cart) {
      totalCost += cart[i].price * cart[i].count;
    }
    return totalCost.toFixed(2);
  };

  obj.listCart = function () {
    var cartCopy = [];
    console.log("Listing cart");
    console.log(cart);
    for (var i in cart) {
      console.log(i);
      var item = cart[i];
      var itemCopy = {};
      for (var p in item) {
        itemCopy[p] = item[p];
      }
      itemCopy.total = (item.price * item.count).toFixed(2);
      cartCopy.push(itemCopy);
    }
    return cartCopy;
  };

  return obj;
})();

function displayCart() {
  var cartArray = shoppingCart.listCart();
  console.log(cartArray);
  var output = "";

  for (var i in cartArray) {
    output +=
      "<p>" +
      cartArray[i].name +
      " <input class='item-count' type='number' data-name='" +
      cartArray[i].name +
      "' value='" +
      cartArray[i].count +
      "' >" +
      " x " +
      cartArray[i].price +
      " = " +
      cartArray[i].total +
      " <button class='plus-item' data-name='" +
      cartArray[i].name +
      "'>+</button>" +
      " <button class='subtract-item' data-name='" +
      cartArray[i].name +
      "'>-</button>" +
      " <button class='delete-item' data-name='" +
      cartArray[i].name +
      "'>X</button>" +
      "</p>";
  }

  $("#show-cart").html(output);

  $(".add-to-cart").on("click", function (event) {
    event.preventDefault();
    var name = $(this).attr("data-name");
    var price = Number($(this).attr("data-price"));

    shoppingCart.addItemToCart(name, price, 1);
    displayCart();
  });

  $("#clear-cart").click(function (event) {
    shoppingCart.clearCart();
    displayCart();
  });



  $(".count-cart").html(shoppingCart.countCart());
  $("#total-cart").html(shoppingCart.totalCart());
}

$("#show-cart").on("click", ".delete-item", function (event) {
  var name = $(this).attr("data-name");
  shoppingCart.removeItemFromCartAll(name);
  displayCart();
});

$("#show-cart").on("click", ".subtract-item", function (event) {
  var name = $(this).attr("data-name");
  shoppingCart.removeItemFromCart(name);
  displayCart();
});

$("#show-cart").on("click", ".plus-item", function (event) {
  var name = $(this).attr("data-name");
  shoppingCart.addItemToCart(name, 0, 1);
  displayCart();
});

$("#show-cart").on("change", ".item-count", function (event) {
  var name = $(this).attr("data-name");
  var count = Number($(this).val());
  shoppingCart.setCountForItem(name, count);
  displayCart();
});

displayCart();