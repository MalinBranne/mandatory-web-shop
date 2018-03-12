//start view
$("#productsDiv").attr("style", "display: block");
$("#checkoutDiv").attr("style", "display: none");
$("#productPage").attr("style", "display: none");

let cards = $("div > #card");



/******************************************funktioner för att byta vy***********************************************' */

$(".checkoutBtn").on("click", () => {
  switchToPage2();
});

$("#brand").on("click", () => {
  switchToPage1();
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

function jsShow(id) {
  document.getElementById(id).style.display = "block";
}

function jsHide(id) {
  document.getElementById(id).style.display = "none";
}

//funktoner för att dölja/visa saker

/******************************************validering***********************************************' */

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
  cart = [];
});
//skapar en prompt som visar verifieringen på formet.

/******************************************Shopping cart functions***********************************************' */

var shoppingCart = (function () {
  var cart = [];

  function Item(id, name, price, count) {
    this.id = id;
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

  obj.addItemToCart = function (id, name, price, count) {
    for (var i in cart) {
      if (cart[i].name === name) {
        cart[i].count += count;
        saveCart();
        return;
      }
    }

    console.log("addItemToCart:", id, name, price, count);

    var item = new Item(id, name, price, count);
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

/****************************************** Bygger cart***********************************************' */

$(".add-to-cart").on("click", function (event) {
  event.preventDefault();
  var id = Number($(this).attr("data-id"));
  var name = $(this).attr("data-name");
  var price = Number($(this).attr("data-price"));

  shoppingCart.addItemToCart(id, name, price, 1);
  displayCart();
});

$("#clear-cart").on("click", function (event) {
  shoppingCart.clearCart();
  displayCart();
});

function displayCart() {
  var cartArray = shoppingCart.listCart();
  console.log(cartArray);
  var output = "";

  for (var i in cartArray) {
    output +=
      "<div id='cartCheckout'>" +
      "<table>" +
      "<td id='tdname'>" +
      cartArray[i].name +
      "</td>" +
      "<td id='tdcountprice'>" +
      " <input class='item-count styleCartInput' type='number' data-name='" +
      cartArray[i].name +
      "' value='" +
      cartArray[i].count +
      "' >" +
      " x " +
      cartArray[i].price +
      " = " +
      cartArray[i].total +
      "</td>" +
      "<td>" +
      " <button class='btn btn-default plus-item' data-name='" +
      cartArray[i].name +
      "'>+</button>" +
      " <button class='btn btn-default subtract-item' data-name='" +
      cartArray[i].name +
      "'>-</button>" +
      " <button class='btn btn-default delete-item' data-name='" +
      cartArray[i].name +
      "'>X</button>" +
      "</td>" +
      "</table>" +
      "</div>";
  }

  $("#show-cart").html(output);

  $(".count-cart").html(shoppingCart.countCart());
  $("#total-cart").html(shoppingCart.totalCart());


  /*****************Inlämning 4 Order using fetch********************** */
  /* för varje item generera så många object i orderItemsListan 
  för en ny lista utifrån cart som innehåller id name price count*/

  $("#validateBtn").on("click", function (event) {
    event.preventDefault();
    addRequest(event);
    console.log("button pressed");

  });


  function addRequest(e) {
    //event parameter is passed since it is a form.
    e.preventDefault(); //prevents it from submitting to a file.


    let orderItems = [];
    let cart = shoppingCart.listCart();
    console.log(cart);
    cart.forEach(item => {
      for (let i = 0; i < item.count; i++) {
        orderItems.push({
          Id: item.id,
          Name: item.name,
          Price: item.price
        })
      }
    });
    console.log(orderItems);
    let userName = document.getElementById("fName").value;
    let userLast = document.getElementById("lName").value;
    let userEmail = document.getElementById("email").value;
    let userPhone = document.getElementById("phone").value;
    let userStreet = document.getElementById("street").value;
    let userZip = document.getElementById("zip").value;
    let userCity = document.getElementById("city").value;
    let userComments = document.getElementById("formComment").value;
    let userCart = orderItems; //why does cart not go to the server in OrderItems?! When I click console log userCart/cart I see whats inside it.




    fetch("http://demo.edument.se/api/orders", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          firstname: userName,
          lastname: userLast,
          email: userEmail,
          phone: userPhone,
          streetaddress: userStreet,
          zipcode: userZip,
          city: userCity,
          comment: userComments,
          OrderItems: orderItems
        })
      })
      .then(res => res.json())
      .then(data => console.log(data));
  }
}

/************************************************** */

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

/**************************************datum (till kommentarerna)******************************************' */

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();
var hh = today.getHours();
var min = today.getMinutes();
var sec = today.getSeconds();

if (dd < 10) {
  dd = "0" + dd;
}
if (mm < 10) {
  mm = "0" + mm;
}
if (hh < 10) {
  hh = "0" + hh;
}
if (min < 10) {
  min = "0" + min;
}
if (sec < 10) {
  sec = "0" + sec;
}
today = mm + "/" + dd + "/" + yyyy + "   " + hh + ":" + min + ":" + sec;

/**************************************Skapar individuell produkt div******************************************' */
/*Fetchin prodicts*/
fetch("http://demo.edument.se/api/products")
  .then(response => response.json())
  .then(data => {
    var products = data;
    console.log(products, "hey");
    renderHTMLtext(products);
  });

/*rendering html by looping out the products*/

function renderHTMLtext(data) {
  var HTMLstring = "";

  let cards = $(".card");

  for (var i in data) {
    cards[i].innerHTML = `
<div class="prodDiv" data-id="${data[i].Id}">
<img src="${data[i].Image}" />
<h4>${data[i].Name}</h4>
<div>Price: ${data[i].Price}</div>
<div>${data[i].Description}</div>
</div>
`;
  }
}

/*rendering html for specific product when clicking on a div*/
/*all code for the specific products page, including reviews and such is inside this funcition*/

//Måste göra fetch igen för att individuell product page ska funka. Hur kan man göra det bättre?
// Om man bara gör fetch en gång så blir products undefined utanför den fetch funktionen.

var prodData;

$(".card").click(function (event) {
  fetch("http://demo.edument.se/api/products")
    .then(response => response.json())
    .then(data => {
      var products = data;
      console.log(products, "hey hoooe");
      event.preventDefault();

      var id = $(this).attr("data-id");
      for (var i = 0; i < products.length; i++) {
        if (products[i].Id == id) {
          prodData = products[i];
        }
      }

      displayProduct(prodData);
      switchToPage3();
    });
});

function displayProduct(prodData) {
  var com = [];

  if (localStorage.commentData) {
    com = JSON.parse(localStorage.commentData);
  }
  var outputproduct = "";

  outputproduct += `  
<img src="${prodData.Image}" />
<h3>${prodData.Name}</h3>
<h4>$${prodData.Price}</h4>
<h4>${prodData.Description}</h4>

<a href="${prodData.Url}">${prodData.Url}</a> 
<br>
<button class="backBtn btn btn-default roundBtn">Go Back To Products</button>
<div id="comments"></div>
`;

  $("#display-product").html(outputproduct);

  $(".backBtn").click(function (event) {
    switchToPage1();
  });

  var renderform = "";

  renderform += `
<div class="stars" id="${prodData.id}">
<span data-rating-id="1">&#9733;</span>
<span data-rating-id="2">&#9733;</span>
<span data-rating-id="3">&#9733;</span>
<span data-rating-id="4">&#9733;</span>
<span data-rating-id="5">&#9733;</span>
</div>
<form id="form" action="javascript:void('');" class="add_comment col-xs-12">
<label id="namelabel">Name </label>
<input id="name" type="string" name="name">
<label id="emaillabel">Email </label>
<input id="cemail" type="string" name="cemail">
<br>
<label id="commentlabel">Comment</label>
<textarea id="comment" name="comment"></textarea>
<br>
<button type="submit" class="btn btn-default" id="commentBtn">Comment</button>
</form> `;

  $("#commentsection").html(renderform);

  function changeStarRating(Rating) {
    $(".filled").removeClass("filled");
    for (let i = 1; i <= Rating; i++) {
      stars[i - 1].addClass("filled");
    }
  }

  var Rating = $(".stars");
  var stars = [
    $("[data-rating-id='1']"),
    $("[data-rating-id='2']"),
    $("[data-rating-id='3']"),
    $("[data-rating-id='4']"),
    $("[data-rating-id='5']")
  ];

  Rating.on("mouseover", "span", function (e) {
    let star = $(e.target);
    Rating = parseInt(star.attr("data-rating-id"));
    changeStarRating(Rating);
  });

  /***************Del 3 Nedan***********/

  fetch("https://demo.edument.se/api/reviews")
    .then(response => response.json())
    .then(reviews => {
      com = reviews;
      var idRev = $(this).attr("data-id");
      for (var i = 0; i < com.length; i++) {
        if (com[i].Id == idRev) {
          prodData = com[i];
        }
      }
      renderReviews(prodData.Id);
    })
    .catch(err => console.log(err));

  /*function above loops out reviews on correct product*/

  /*Render reviews html*/

  function renderReviews(prodData) {
    reviewWrapper = $("#comments");

    const reviews = com.filter(review => review.ProductID === prodData);

    reviews.map(review => {
      reviewWrapper.append(
        `<div id="commentbox" data-id="${review.Id}">
         <div class="displayStars">${review.Rating} <span>&#9733;</span>
         </div>
             <h5 id ="commentname">${review.Name} | ${review.Email}</h5>
             <h4 id ="commentpost">${review.Comment} </h4>
            
             </div>
         `
      );
    });
  }

  /*posting review to the api*/

  function postReview(review) {
    return fetch("https://demo.edument.se/api/reviews", {
      method: "POST",
      body: JSON.stringify(review),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    });
  }

  /*adding new review by creating new review object by collecting values from my comment form*/
  function addReview(prodData) {
    const newReview = {
      ProductID: prodData.Id,
      Name: $("#name").val(),
      Email: $("#cemail").val(),
      Comment: $("#comment").val(),
      Rating: Rating
    };

    postReview(newReview); // post review to api
    com.push(newReview); //push new review to the list of reviews

    renderReviews(prodData.Id); // display new review on the page
  }

  /* adding review when clicking on comment button*/
  $("#commentBtn").click(function () {
    setTimeout(function () {
      form.reset();
    }, 1000);

    console.log("btn pressed");

    addReview(prodData);
    console.log(com);
  });
}